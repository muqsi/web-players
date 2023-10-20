const manifestUri = "https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd";

const subtitleUrls = [ "./subtitles/Diaganal-test.ttml", "./subtitles/GBR-Test-File.ttml" ,
"MYS_Test File.ttml" , "SIM-Test-File.ttml" , "./subtitles/TAG-Test-File.ttml",
"./subtitles/TRD-Test-File.ttml"  ]

var selectedSubtitle = 0

function initApp() {
  shaka.polyfill.installAll();
  if (shaka.Player.isBrowserSupported()) {
    initPlayer();
  } else {
    console.error('Browser not supported!');
  }
}

 function initPlayer() {
 const video = document.getElementById('video');
 const player = new shaka.Player(video);
 window.player = player;
 window.video =  video;
 player.load('https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd');
  video.onloadeddata = function () {
  player.addTextTrackAsync(subtitleUrls[selectedSubtitle], "ch", "SUBTITLE", "application/ttml+xml")
  player.setTextTrackVisibility(true)
  console.log("###", player.getTextTracks())
  }
}

// function loadmedia() {
//   // let dahs = document.getElementById('dahs')
//   // player.load(dahs.value);
//   player.load('https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd');
// }

const menuselection = () => {
  var e = document.getElementById("subtitle");
  var value = e.value;
  selectedSubtitle = value
  console.log("value", value)
  player.load('https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd');
}


document.addEventListener('DOMContentLoaded', initApp);

// https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd
// https://test.create.diagnal.com/subtitles/layout-test.ttml