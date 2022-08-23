const player = videojs("my-video", {
  controls: true,
  autoplay: false,
  loop: false,
  preload: "auto",
  responsive: false,
  // tracks: [
  //   {
  //     src: "./captions/jp.vtt",
  //     kind: "captions",
  //     srclang: "jp",
  //     label: "Japanese",
  //   },
  //   {
  //     src: "./captions/en.vtt",
  //     kind: "captions",
  //     srclang: "en",
  //     label: "English",
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

player.src("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
player.hlsQualitySelector({ displayCurrentQuality: true });
player.vttThumbnails({ src: videoMetaData[0].thumbnails, showTimestamp: true });

videoMetaData[0].metaData.tracks.forEach((track) => {
  player.addRemoteTextTrack(track);
});

const videolist = videoMetaData.map((video) => video.metaData);
player.playlist(videolist);

player.on("timeupdate", function () {
  const span = document.getElementById("currentTime");
  span.innerText = player.currentTime();
});

const play = () => player.play();

const pause = () => player.pause();

const mute = () => player.muted(true);

const unMute = () => player.muted(false);

const playback = (x) => player.playbackRate(x);

// const updateCaptions = (index) => {
//   // if (index !== undefined) {
//   const oldTracks = player.remoteTextTracks();
//   for (let i = 0; i < oldTracks.length; i++) {
//     player.removeRemoteTextTrack(oldTracks[i]);
//   }
//   // }
//   videoMetaData[index].metaData.tracks.forEach((track) => {
//     player.addRemoteTextTrack(track);
//   });
// };

const previousVideo = () => {
  const currentNumber = player.playlist.currentItem();
  const previousNumber = currentNumber - 1;
  // 前の動画が存在する場合
  if (currentNumber !== 0) {
    player.vttThumbnails.src(videoMetaData[previousNumber].thumbnails);
    // updateCaptions(previousNumber);
  }

  player.playlist.previous();
};

const nextVideo = () => {
  const currentNumber = player.playlist.currentItem();
  const nextNumber = currentNumber + 1;
  // 次の動画が存在する場合
  if (nextNumber !== player.playlist().length) {
    player.vttThumbnails.src(videoMetaData[nextNumber].thumbnails);
    // updateCaptions(nextNumber);
  }

  player.playlist.next();
};
