const videoMetaData = [
  {
    title: "BigBuckBunny",
    metaData: {
      sources: [
        {
          src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
          type: "application/x-mpegURL",
        },
      ],
      poster:
        "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
      tracks: [
        {
          src: "./captions/jp.vtt",
          kind: "captions",
          srclang: "jp",
          label: "Japanese",
        },
        {
          src: "./captions/en.vtt",
          kind: "captions",
          srclang: "en",
          label: "English",
        },
      ],
    },
    thumbnails: "./thumbnails/big_buck_bunny_thumbnails.vtt",
  },
  {
    title: "ElephantsDream",
    metaData: {
      sources: [
        {
          src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          type: "video/mp4",
        },
      ],
      poster:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      tracks: [
        {
          src: "",
          kind: "captions",
          srclang: "jp",
          label: "Japanese",
        },
        {
          src: "",
          kind: "captions",
          srclang: "en",
          label: "English",
        },
      ],
    },
    thumbnails: "./thumbnails/test.vtt",
  },
];
