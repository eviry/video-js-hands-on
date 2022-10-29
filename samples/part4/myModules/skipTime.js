// コントロールバーにスキップボタンを追加するプラグイン
const skipTime = (isSkipTime) => {
  const controlBar = player.controlBar;

  // 既にスキップボタンがあれば取得する
  const skipButtons = controlBar.children_.filter((child) => {
    return child.hasClass("vjs-skip-button");
  });

  // 引数なしなら現在の設定状況を返す
  if (isSkipTime === undefined) {
    return !!skipButtons.length;
  }

  // 引数がfalseなら設定を解除する
  if (!isSkipTime) {
    // 該当の要素を削除
    skipButtons.forEach((element) => {
      controlBar.removeChild(element);
    });
    return false;
  }

  // 引数がtrueかつ設定されているなら何もしない
  if (skipButtons.length) {
    return true;
  }

  // プレイヤーの再生時間をx秒進める関数
  const skipXsec = (seconds) => {
    const currentTime = player.currentTime();
    player.currentTime(currentTime + seconds);
  };

  // controlBar内のn番目の要素にボタンを追加する関数
  const addButton = (label, n, handler) => {
    const button = controlBar.addChild(
      "button",
      { className: "vjs-skip-button" },
      n
    );
    button.el().innerHTML = label;
    button.on("click", handler);
    return button;
  };

  // 30秒戻すボタンを作成
  addButton("<img src='./myModules/replay_30sec.svg' width='28px' />", 0, () =>
    skipXsec(-30)
  );
  // 30秒進めるボタンを作成
  addButton("<img src='./myModules/forward_30sec.svg' width='28px' />", 2, () =>
    skipXsec(30)
  );
  return true;
};

// videojsのイベントを追加する
videojs.registerPlugin("skipTime", skipTime);
