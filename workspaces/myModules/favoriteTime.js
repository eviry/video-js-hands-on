/*
【説明】
お気に入りのシーンが流れる時間を保存しておき、いつでもその時間に飛べる機能を作りました
コントロールバー上にある星の記号を押すと、その時の動画の再生時間を保存します
星の横に、保存した時間が文字で表示されます
文字を押すとその時間に飛べます
*/

const favoriteTime = (bool) => {
  var sec = null;
  
  // コントロールバーの要素を取得
  const controlBar = document.querySelector(".vjs-control-bar");

  // ボリュームパネルの要素を取得
  const playbackRate = controlBar.querySelector(".vjs-playback-rate");


  //ボタンを作成
  const createButton = (icon) => {
    const button = document.createElement("button");
    button.className = "vjs-favorite-button";
    button.innerHTML = icon;
    button.style.fontSize = "1.8em";
    return button;
  };

  const favoriteRegisterButton = createButton("&#9733;");
  controlBar.insertBefore(favoriteRegisterButton, playbackRate);

  const favoriteJumpButton = createButton(" ");
  controlBar.insertBefore(favoriteJumpButton, playbackRate);


  //星をクリックすると時間を保存  
  favoriteRegisterButton.onclick = () => {
    sec = player.currentTime();
    favoriteJumpButton.innerHTML = Math.floor(sec/60).toString().padStart(2,"0") + ":" + Math.floor(sec%60).toString().padStart(2,"0");
  }


  //時間をクリックするとその時間に飛ぶ
  favoriteJumpButton.onclick = () => {
    if(sec != null){
      player.currentTime(sec);
    }
  }

}

// videojsのイベントを追加する
videojs.registerPlugin("favoriteTime", favoriteTime);
