# Video.js ハンズオン

## やること

- Video.js の基本的な使い方

## やらないこと

- HTML の基本
- CSS の基本
- JaveScript の基本

## 内容

## ディレクトリ構成
```dotnetcli
.
├── README.md
├── favicon.ico
├── samples        # 各章の完成形
│   ├── complete       # 最終形（ハンズオンで扱っていないものも含む）
│   ├── initialState   # 初期状態
│   ├── part1
│   ├── part2
│   ├── part3
│   └── part4
└── workspaces     # ハンズオンで利用するディレクトリ
    ├── captions       # 字幕関連のファイルを格納するディレクトリ
    ├── index.html
    ├── index.js
    ├── modules        # Video.jsの配布されているプラグインを格納するディレクトリ
    ├── plagins        # 自作のプラグインを格納するディレクトリ
    └── thumbnails     # サムネイル関連のファイルを格納するディレクトリ（ハンズオンでは扱わない）
```

### Introduction
- Visual Studio Codeに以下のプラグインをインストール(任意)
    - [Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)
    - [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Part1

#### この章で話すこと
- video タグで動画を再生してみる

### Part2
#### この章で話すこと
- Video.jsのセットアップ
- Video.jsで作成したインスタンスのメソッドを利用してみる
- 字幕機能（標準機能）を追加

### Part3
#### この章で話すこと
- Video.jsの配布されているプラグインを利用してみる

### Part4
#### この章で話すこと
- Video.jsで自作のプラグインを作成してみる

## 参照・資材

- [Video.js公式 Document](https://docs.videojs.com/)
- [Bootstrap CSS](https://getbootstrap.jp/docs/5.0/getting-started/introduction/)
- [Big Buck Bunny](https://peach.blender.org/)
- [hls.js demo](https://hls-js.netlify.app/demo/)
- [videoタグ HTML5リファレンス](http://www.htmq.com/html5/004.shtml)
- [videoタグ MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/HTML/Element/video)
- [videojs-hls-quality-selector](https://www.npmjs.com/package/videojs-hls-quality-selector)
- [videojs-vtt-thumbnails](https://www.npmjs.com/package/videojs-vtt-thumbnails)
