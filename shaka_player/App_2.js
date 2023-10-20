// Basic Events

const manifestUri = "https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd";

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

 function initPlayer() {
 // Create a Player instance.
 const video = document.getElementById('video');
 const player = new shaka.Player(video);
 // Attach player to the window to make it easy to access in the JS console.
//  window.player = player;
//  window.video =  video;
 player.load(manifestUri) ;
 player.addEventListener('error', (e) => { console.log("### err", e) } );
 player.addEventListener('buffering', (e) => { console.log("### buffering", e) } );
 
}




document.addEventListener('DOMContentLoaded', initApp);