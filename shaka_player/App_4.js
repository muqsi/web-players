// Buffer config

const manifestUri = "https://akm.cdn.intigral-ott.net/Titles/S000854602003/S000854602003.ism/manifest.mpd";

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
 window.player = player;
 window.video =  video;

 var servers = {
  'com.widevine.alpha':"",
}

 const config = {
  drm: {
    servers,
  },
  streaming: {
    rebufferingGoal:120,
  },
};

 player.configure(config);

 player.load(manifestUri);

 player.addEventListener('error', (e) => { console.log("err", e) } );
 player.addEventListener('buffering', (e) => { console.log("err", e) } );
}


document.addEventListener('DOMContentLoaded', initApp);

