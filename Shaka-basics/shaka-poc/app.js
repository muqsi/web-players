const manifestUri = "https://linear.aws.stagingoptusvideo.tv/v5/OptusSport90/xbtss/drm/hevc/cmaf/scte/manifest/manifest.m3u8";

function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}

async function initPlayer() {
  // Create a Player instance.
  const video = document.getElementById('video');
  const player = new shaka.Player(video);

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;
  window.video =  video;

  var servers = {
    'com.widevine.alpha':"https://93e30b04-drm-widevine-licensing.axprod.net/AcquireLicense?AxDrmMessage=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiM0NEMkY3QjEtQzNBOC00MjJBLTk0OTctQTdCNzAwN0Q3RkI1IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiYzcwZTQ3NzYtMTdhNy00MzM3LTg2NmEtNDU4NDEyYjMzNzJkIn1dfSwiZXhwaXJhdGlvbl9kYXRlIjoiMjAyMi0wMi0wMVQwOTo1Njo1OS45MzRaIiwidXNlcklkIjoiYmY4ZWE2MTctODU0ZC00NWE5LWFjNzUtOTA3ZmU3MzRmMzA3In0.9LIpCLqHi2LiwA0LdVutZ-PTpgkG0X2BkrpWKv9JrdY",
    // 'com.microsoft.playready' : 'http://pr.drm.intigral-ott.net/PlayReady/RightsManager.asmx?deviceId=NDI2ZmU2N2EtMjJmNi0zMGQxLWFjZDUtNGQxODUzNTRhNGNh'
  };


  const config = {
    drm: {
      servers,
    },
    manifest: {
      dash: { ignoreMinBufferTime: true },
      retryParameters: {
        backoffFactor: 2,
        baseDelay: 800,
        fuzzFactor: 0.5,
        maxAttempts: 2,
        timeout: 30000,
      },
    },
    streaming: {
      bufferingGoal: 15,
      ignoreTextStreamFailures: true,
      rebufferingGoal: 0,
      bufferBehind: 5,
      stallEnabled: true,
      stallThreshold: 1,
      stallSkip: 2,
      jumpLargeGaps: true,
      startAtSegmentBoundary: true,
      retryParameters: {
        backoffFactor: 2,
        baseDelay: 800,
        fuzzFactor: 0.5,
        maxAttempts: 2,
        timeout: 30000,
      },
    },
  };

  player.configure(config);

  // Listen for error events.
  player.addEventListener('error',  (e) => {console.log("error", e)} );
  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (error) {
    // onError is executed if the asynchronous load fails.
    console.error('Error code', error.code, error);
  }
}




function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError("error", event);
}



document.addEventListener('DOMContentLoaded', initApp);