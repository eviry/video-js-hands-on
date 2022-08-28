const player = videojs("my-video", {
  poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
  // 動画のアスペクト比を自動で調整する
  fluid: true,
  // コントロールバーを表示にする
  controls: true,
  // 自動再生を有効にする
  autoplay: false,
  // ループ再生を無効化する
  loop: false,
  // 動画読み込み設定("auto" or "metadata" or "none")
  preload: "auto",

  //再生速度の設定
  playbackRates: [0.25, 0.5, 1, 1.5, 2],

  //ローディングの表示
  LoadingSpinner: true,

  //音量は縦に表示
  controlBar: {
    volumePanel: { inline: false },
  },
  // 字幕の設定
  tracks: [
    {
      src: "captions/jp.vtt",
      kind: "captions",
      srclang: "jp",
      label: "Japanese",
    },
    {
      src: "captions/en.vtt",
      kind: "captions",
      srclang: "en",
      label: "English",
    },
  ],
});

player.src("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");

// 画質選択の設定を有効にする
player.hlsQualitySelector();

// skipボタンを有効にする
player.skipTime(true);

// シークバーにマウスを乗せたときにサムネイルを表示する
player.vttThumbnails({
  src: "thumbnails/big_buck_bunny_thumbnails.vtt",
});

// 再生時間が更新されるたびに実行される関数を設定する
player.on("timeupdate", function () {
  const span = document.getElementById("currentTime");
  span.innerText = player.currentTime();
});

const play = () => player.play();

const pause = () => player.pause();

const mute = () => player.muted(true);

const unMute = () => player.muted(false);

const playback = (x) => player.playbackRate(x);
