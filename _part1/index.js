// const videojs = window.videojs;

// const player = videojs("my-video", {
//   controls: true,
//   autoplay: false,
//   loop: false,
//   preload: "auto",
//   responsive: false,
//   poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
//   // textTrackSettings: false,

//   //再生速度の設定
//   playbackRates: [0.25, 0.5, 1, 1.5, 2, 4, 10, 15],

//   //ローディングの表示
//   LoadingSpinner: true,

//   //音量は縦に表示
//   controlBar: {
//     volumePanel: { inline: false },
//   },
// });

// player.on("timeupdate", function () {
//   const span = document.getElementById("currentTime");
//   span.innerText = player.currentTime();
// });

// const play = () => player.play();

// const pause = () => player.pause();

// const mute = () => player.muted(true);

// const unMute = () => player.muted(false);

// const seek10s = () => {
//   let sec = player.currentTime();
//   player.currentTime(sec + 10);
// };

// const playback10x = () => {
//   player.playbackRate(10);
// };

// const playback = () => {
//   player.playbackRate(1);
// };
