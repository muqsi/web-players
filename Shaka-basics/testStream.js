// let useFilter = true;
let useFilter = false;

const uri = [

    'https://akm.cdn.intigral-ott.net/Titles_HEVC/M0019324/M0019324_1.ism/manifest.mpd',
    'https://akm.cdn.intigral-ott.net/VOD/M0020313_CLR_AVC/M0020313_CLR_AVC.ism/manifest.mpd',
    'https://akm.cdn.intigral-ott.net/Titles/M0010733/M0010733.ism/manifest.mpd',
    'https://uselector.cdn.intigral-ott.net/Titles/M0010733/M0010733.ism/manifest.mpd',

];

const filter = '?filter=((type=="video"%26%26MaxHeight<=2160)%7C%7C(type=="audio")%7C%7C(type=="textstream"))&codec=hevc';
// const filter = '?filter=((type==%22video%22%26%26MaxHeight%3C=2160)||(type==%22audio%22%26%26FOURCC!=%22ac-3%22)%7C%7C(type==%22textstream%22))&codec=hevc';

let i = 0;

const drmServerList = {
  // 'com.widevine.alpha' : 'https://wv.drm.intigral-ott.net:8063?deviceId=MTFjZjRiNGMtYzBkMy0zNTJhLWE4OTgtNGJlOTUxNjlkZjdk',
  'com.microsoft.playready': 'http://pr.drm.intigral-ott.net/PlayReady/RightsManager.asmx?deviceId=MTFjZjRiNGMtYzBkMy0zNTJhLWE4OTgtNGJlOTUxNjlkZjdk',
};

const loadPlayer = (m = null) => {
    const manifestUri = m || (uri[i] + (useFilter ? filter : ''));
    document.getElementById('error').innerHTML = '';
    document.getElementById('Quality').innerHTML = '';
    document.getElementById('manifestUri').innerHTML = '';

    document.getElementById('manifestUri').innerHTML = `#${i}: ${manifestUri}`;
    console.log(manifestUri)
    window.player.load(manifestUri).then((response) => {
        console.log('Working', response);
    }).catch((response) => {
        document.getElementById('error').innerHTML = `Shaka Error : ${response.code}`;
        console.log('Error', response);
    });
};

window.loadPlayer = loadPlayer


window.addEventListener('keydown', (e) => {
    console.log('eee', e);
    if (e.keyCode === 37) {
        // if (useFilter) {
        //   useFilter = false;
        i -= 1;
        i = i >= uri.length ? uri.length - 1 : i;
        i = i <= 0 ? 0 : i;
        // } else {
        // useFilter = true;
        // }
        loadPlayer();
    }
    if (e.keyCode === 39) {
        // if (useFilter) {
        //   useFilter = false;
        i += 1;
        i = i >= uri.length ? 0 : i;
        // } else {
        // useFilter = true;
        // }
        loadPlayer();
    }
    if (window.videoElement.paused) {
        window.videoElement.play();
    } else {
        window.videoElement.pause();
    }
});

function initApp() {
    // Install built-in polyfills to patch browser incompatibilities.
    // eslint-disable-next-line no-undef
    shaka.polyfill.installAll();
    // eslint-disable-next-line no-undef
    if (shaka.Player.isBrowserSupported()) {
        initPlayer();
    } else {
        // This browser does not have the minimum set of APIs we need.
        console.error('Browser not supported!');
    }
}

const updateStats = () => {
    const { player } = window;
    const videoData = player.getVariantTracks();
    const qualities = videoData.map((item) => [item.active ? '#' : '', `${item.language}`, `${item.height}p`, `${item.audioCodec}`, `${item.channelsCount}ch`].join(' '));

    // console.log('tracks', videoData);
    // console.table(qualities);

    // const currentTrack = videoData.filter((tracks) => tracks.active);
    const quality = qualities.join('<br/>');
    document.getElementById('Quality').innerHTML = quality; // `Quality : ${currentTrack[0].height}p, ${currentTrack[0].channelsCount}Ch`;

    // console.log('videoData ', videoData);
    // console.log('Status', player.getStats());

};

function onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
    document.getElementById('error').innerHTML = `Shaka Error : ${error.code}`;
}

function onErrorEvent(event) {
    onError(event.detail);
}

function initPlayer() {
    const videoElement = document.getElementById('video');
    // eslint-disable-next-line no-undef
    const player = new shaka.Player();
    // shaka.log.setLevel(shaka.log.Level.V2);
    window.videoElement = videoElement;
    window.player = player;

    player.attach(videoElement);
    // player.configure('abr.enabled', true);
    // player.configure('preferredLanguage', 'en');
    // player.configure('preferredAudioChannelCount', 6);
        
    // player.configure('streaming.alwaysStreamText', true)

    player.configure({
        drm: {
            servers: drmServerList,
        },
    });

    loadPlayer();

    player.addEventListener('error', onErrorEvent);

    videoElement.onplaying = function () {
        console.log('################### onplaying ####################');
        updateStats();
        console.log(player.getManifest())
        console.log(player.getManifest())
    };

    videoElement.oncanplay = function () {
        console.log('can play', player, videoElement);
    };

    videoElement.onloadeddata = function () {

    };

    videoElement.ontimeupdate = function () {
        // console.log('################ time update ##################');
        // console.log(player.getStats())
        updateStats();
    };

    videoElement.onpause = function () {
        console.log('################ on pausing ##################', player.getStats());
    };

    videoElement.onloadedmetadata = function () {
        console.log('################ onloadedmetadata ##################');
        console.log('onloadedmetadata called', videoElement.currentTime);
    };
}

document.addEventListener('DOMContentLoaded', initApp);
// document.addEventListener('keydown', (e) => {
//   if (videoElement) {
//     videoElement.play();
//   }
// })