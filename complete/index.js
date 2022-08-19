const videojs = window.videojs;

const player = videojs("my-video", {
  controls: true,
  autoplay: false,
  loop: false,
  preload: "auto",
  responsive: false,
  poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
  skipTime: 10,
  // textTrackSettings: false,
  tracks: [
    {
      src: "./captions/jp.vtt",
      kind: "captions",
      srclang: "jp",
      label: "Japanese",
    },
    {
      src: "./captions/en.vtt",
      kind: "captions",
      srclang: "en",
      label: "English",
    },
    // {
    //   src: "./thumbnails/thumbnail.vtt",
    //   kind: "metadata",
    //   label: "thumbnails",
    //   mode: "hidden",
    // },
  ],

  // playlist: [
  //   {
  //     sources: [
  //       {
  //         src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  //         type: "application/x-mpegURL",
  //       },
  //     ],
  //   },
  //   {
  //     sources: [
  //       {
  //         src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  //         type: "video/mp4",
  //       },
  //     ],
  //   },
  // ],

  //再生速度の設定
  playbackRates: [0.25, 0.5, 1, 1.5, 2, 4, 10, 15],

  //ローディングの表示
  LoadingSpinner: true,

  //音量は縦に表示
  controlBar: {
    volumePanel: { inline: false },
  },
});

// player.playlist.autoadvance(0);

player.on("timeupdate", function () {
  const span = document.getElementById("currentTime");
  span.innerText = player.currentTime();
});

player.src(
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
);
player.hlsQualitySelector({displayCurrentQuality: true})
// player.skipTime(player);

const play = () => player.play();

const pause = () => player.pause();

const mute = () => player.muted(true);

const unMute = () => player.muted(false);

const playback10x = () => {
  player.playbackRate(10);
};

const playback = () => {
  player.playbackRate(1);
};
