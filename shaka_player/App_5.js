// Adavnced

const manifestUri = "https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd";
// const manifestUri = "https://cdn.bitmovin.com/content/assets/sintel/sintel.mpd";


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

 player.load(manifestUri);

 
 video.onloadeddata = function () {
  // getVariantTracks()
  // selectAudioLanguage()
  // player.configure('abr.enabled', false);
  // player.selectVariantTrack(item, true)
  // player.setVideoQuality('180_250000')
  // player.getAvailableVideoQualities()
  // player.seek(10)
  // player.getStats()

  // player.addTextTrackAsync("https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.ttml", "en", "SUBTITLE", "application/ttml+xml")
  player.addTextTrackAsync("https://test.create.diagnal.com/subtitles/layout-test.ttml", "en", "SUBTITLE", "application/ttml+xml")
  console.log("###", player.getTextTracks())
  player.setTextTrackVisibility(true)
  // player.selectTextTrack('en') 

  }
}




document.addEventListener('DOMContentLoaded', initApp);