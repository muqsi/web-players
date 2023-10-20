// const manifestUri = "https://dash.akamaized.net/dash264/TestCasesIOP41/CMAF/UnifiedStreaming/ToS_AVC_MultiRate_MultiRes_AAC_Eng_WebVTT.mpd";
// const manifestUri = "https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd";
// const manifestUri = "https://test.playready.microsoft.com/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/manifest.mpd";
const manifestUri = "https://livesim.dashif.org/dash/vod/testpic_2s/multi_subs.mpd";


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
  // shaka.log.setLevel(shaka.log.Level.V2); 

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;
  window.video =  video


  
//   var drmServerList = {
//     'com.widevine.alpha':"https://wv.drm.intigral-ott.net:8063?deviceId=NDI2ZmU2N2EtMjJmNi0zMGQxLWFjZDUtNGQxODUzNTRhNGNh",
//     // 'com.widevine.alpha': 'https://wv.drm.intigral-ott.net:8063?deviceId=NmQzZmE1NzYtMWQyNi0zODVhLWI4NTktNzkzYmNlZDA3NTFm',
//     // 'com.microsoft.playready' : 'http://pr.drm.intigral-ott.net/PlayReady/RightsManager.asmx?deviceId=NmQzZmE1NzYtMWQyNi0zODVhLWI4NTktNzkzYmNlZDA3NTFm'
//   };

// player.configure({
//   drm: {
//     servers: drmServerList
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





  video.onloadeddata = function () {
  




    
    // Quality switch
    // console.log("tracks", player.getVariantTracks() );  
    // let videoData = player.getVariantTracks();
    // let qualities = videoData.map((item)=> item.height)
    //   console.log("qualities", qualities)
    //   let currentTrack =  videoData.filter((tracks) => tracks.active);
    //   console.log("active ", currentTrack[0])
     
    //   setTimeout(()=>{ 
    //     const item =  videoData[0]
    //     console.log("quality switch with", item)
    //     player.configure('abr.enabled', false);
    //     player.selectVariantTrack(item, true)
    //    }, 15000)


    // audio
    // from getVariantTracks()
    // selectAudioLanguage()

    // texttrack
    console.log("text tracks", player.getTextTracks() );
    player.setTextTrackVisibility(true)
    // player.selectTextTrack('en') 

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