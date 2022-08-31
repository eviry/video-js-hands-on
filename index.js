const player = videojs("my-video", {
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

  // tracks: [
  //   {
  //     src: "./captions/jp1.vtt",
  //     kind: "captions",
  //     srclang: "jp",
  //     label: "Japanese",
  //   },
  //   {
  //     src: "./captions/en1.vtt",
  //     kind: "captions",
  //     srclang: "en",
  //     label: "English",
  //   },
  // ],
});

player.hlsQualitySelector({ displayCurrentQuality: true });

initVideo = () => {
  number = 0;
  player.src(videoMetaData[number].metaData.sources);
  player.vttThumbnails({ src: videoMetaData[number].thumbnails, showTimestamp: true });
  videoMetaData[number].metaData.tracks.forEach((track) => {
    player.addRemoteTextTrack(track, false);
  });
  player.poster(videoMetaData[number].metaData.poster);
}

changeVideo = (number) => {
  player.src(videoMetaData[number].metaData.sources);
  player.vttThumbnails.src(videoMetaData[number].thumbnails);
  
  // 字幕
  track_num = Number(String(player.remoteTextTracks().length))
  console.log(track_num)
  for (var i=0;i<track_num;i++){
    if (typeof player.remoteTextTracks()[i] !== "undefined" && typeof player.remoteTextTracks()[i].src !== "undefined"){
      player.removeRemoteTextTrack(player.remoteTextTracks()[i]);
    }
  }
  videoMetaData[number].metaData.tracks.forEach((track) => {
    player.addRemoteTextTrack(track, false);
  });

  player.poster(videoMetaData[number].metaData.poster);
}

initVideo();

player.on("timeupdate", function () {
  $("span#currentTime").text(player.currentTime())
});

const play = () => player.play();

const pause = () => player.pause();

const mute = () => player.muted(true);

const unMute = () => player.muted(false);

const playback = (x) => player.playbackRate(x);

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

const swipeCarousel = (e) => {
  var num_to = e.to;
  changeVideo(num_to);
}

$(function(){
  //Carousel
  carousel = $("#carouselToggleVideo");
  carousel.bind("slid.bs.carousel", swipeCarousel);
  // switch_seekable
  $('#toggleSeekable').change(
    function(){
      var progress_control = player.controlBar.progressControl;
      if($(this).prop('checked')){
        progress_control.enable();
      }else{
        progress_control.disable();
      }
    }
  )
})