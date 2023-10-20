// Config 

// clearstream 
const manifestUri = 'https://akm.cdn.intigral-ott.net/VOD/M0004404_T2/M0004404_T2.ism/manifest.mpd';
// Protected
// const manifestUri = 'https://uselector.cdn.intigral-ott.net/Titles/M0020130/M0020130.ism/manifest.mpd';


  
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
  window.video =  video

  shaka.log.setLevel(shaka.log.Level.V2);
 
  // DRM config

  // var drmServerList = {
  //   'com.widevine.alpha': 'https://wv.drm.intigral-ott.net:8063?deviceId=NGNhNjBiNzMtYmQ4OC0zM2Y2LTkxNjYtOWE1MjJlYWM0YjYx',
  // };

  // player.configure({
  //   drm: {
  //     servers: drmServerList
  //   },
  // });


//   // set audio language preference to english:
// player.configure('preferredAudioLanguage', 'en');
// // NOTE: language preferences affect the next call to load()

// // set text language preference to Greek and buffering goal to 2 minutes:
// player.configure({
//   preferredTextLanguage: 'en',
// });

// // check audio language preference, which is still Canadian French:
// player.getConfiguration().preferredAudioLanguage



// set the rebuffering goal to 15 seconds and revert buffering goal to default:
// player.configure({
//   streaming: {
//     // bufferingGoal is the amount of content we try to buffer.
//     // rebufferingGoal is the amount of content we have to have buffered before we can play
//     // bufferBehind is the amount of content we keep in buffer behind the playhead
//     bufferingGoal: 120,
//     rebufferingGoal: 1,
//     bufferBehind: 10,
//   }
// });



  // Listen for error events.
  player.addEventListener('error', onErrorEvent);
  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    onError(e);
  }   
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);