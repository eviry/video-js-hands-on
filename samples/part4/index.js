const player = videojs("my-video", {
  sources: [
    {
      src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  ],
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
  tracks: [
    // 字幕の設定
    {
      src: "subtitle/jp.vtt",
      kind: "subtitle",
      srclang: "jp",
      label: "Japanese",
    },
    {
      src: "subtitle/en.vtt",
      kind: "subtitle",
      srclang: "en",
      label: "English",
    },
    // チャプターの設定
    {
      src: "chapter/chapter.vtt",
      kind: "chapters",
      label: "Chapter",
    },
  ],
});

// 画質選択の設定を有効にする
player.hlsQualitySelector({
  displayCurrentQuality: true,
});

// skipボタンを有効にする
player.skipTime(true);
