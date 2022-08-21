const skipTime = () => {
  //　スキップ処理用のボタンを作成する関数
  const createButton = (icon) => {
    const button = document.createElement("button");
    button.className = "vjs-skip-button";
    button.innerHTML = icon;
    button.style.fontSize = "1.8em";
    return button;
  };

  const backSeekButton = createButton("&#8635;");
  const seekButton = createButton("&#8634;");

  // seekButtonがクリックされたら10s進める
  seekButton.onclick = () => {
    seekXs(10);
  };

  // backSeekButtonがクリックされたら-10s進める
  backSeekButton.onclick = () => {
    seekXs(-10);
  };

  // コントロールバーの要素を取得
  const controlBar = document.querySelector(".vjs-control-bar");

  // ボリュームパネルの要素を取得
  const volumePanel = controlBar.querySelector(".vjs-volume-panel");

  // controlBarの先頭にbackSeekButtonを追加する
  controlBar.insertBefore(backSeekButton, controlBar.firstChild);

  // volumePanelの前にseekButtonを追加する
  controlBar.insertBefore(seekButton, volumePanel);
};

// プレイヤーの再生時間をx秒進める関数
const seekXs = (x) => {
  let sec = player.currentTime();
  player.currentTime(sec + x);
};

// videojsのイベントを追加する
videojs.registerPlugin("skipTime", skipTime);

player.skipTime();
