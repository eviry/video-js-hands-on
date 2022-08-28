const skipTime = (bool) => {
  const skipButtons = document.querySelectorAll(".vjs-skip-button");
  // 引数なしなら現在の設定状況を返す
  if (bool === undefined) {
    return Boolean(skipButtons.length);
  }

  // 引数がfalseなら設定を解除する
  if (!bool) {
    // 該当の要素を削除
    skipButtons.forEach((element) => {
      element.remove();
    });
    return;
  }

  // 引数がtrueかつ設定されているなら何もしない
  if (skipButtons.length) {
    return;
  }

  //　スキップ処理用のボタンを作成する関数
  const createButton = (icon) => {
    const button = document.createElement("button");
    button.className = "vjs-skip-button";
    button.innerHTML = icon;
    button.style.fontSize = "1.8em";
    return button;
  };

  // プレイヤーの再生時間をx秒進める関数
  const seekXs = (x) => {
    const sec = player.currentTime();
    player.currentTime(sec + x);
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

// videojsのイベントを追加する
videojs.registerPlugin("skipTime", skipTime);
