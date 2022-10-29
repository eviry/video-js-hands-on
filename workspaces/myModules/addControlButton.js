// コントロールバーにボタンを追加するプラグイン
const addControlButton = (
  label, // ボタンのラベル
  n, // ボタンを追加する位置
  handler, // ボタンを押したときの処理
  className = {} // ボタンのオプション { className: "" }
) => {
  const controlBar = player.controlBar;
  const newButton = controlBar.addChild("button", className, n);
  newButton.el().innerHTML = label;
  newButton.on("click", handler);
};

// videojsのイベントを追加する
videojs.registerPlugin("addControlButton", addControlButton);
