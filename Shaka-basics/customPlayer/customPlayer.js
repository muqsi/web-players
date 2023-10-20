const manifestUri = 'https://akm.cdn.intigral-ott.net/VOD/M0004404_T2/M0004404_T2.ism/manifest.mpd';
// const manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
// const manifestUri = 'https://uselector.cdn.intigral-ott.net/Trailers/M0020130/M0020130.ism/manifest.mpd';


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

  // video.onloadeddata = function () {
  //       setInterval(() => {
  //     let playPosition = (video.currentTime / video.duration) * 100
  //     document.getElementById("track").style.width=`${playPosition}%`;
  //   }, 2000);
  //   }   
}

function onPlayClick() {
   video.play()
   document.getElementById("play").style.display=`none`;
   document.getElementById("pause").style.display=`block`;
}

function onPauseClick() {
   video.pause()
   document.getElementById("pause").style.display=`none`;
   document.getElementById("play").style.display=`block`;
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