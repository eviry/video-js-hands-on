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
        "posters/poster1.jpg",
      tracks: [
        {
          src: "./captions/jp1.vtt",
          kind: "captions",
          srclang: "jp",
          label: "Japanese",
        },
        {
          src: "./captions/en1.vtt",
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
      "posters/poster2.png",
      tracks: [
        {
          src: "./captions/jp2.vtt",
          kind: "captions",
          srclang: "jp",
          label: "Japanese",
        },
        {
          src: "./captions/en2.vtt",
          kind: "captions",
          srclang: "en",
          label: "English",
        },
      ],
    },
    thumbnails: "./thumbnails/elephant.vtt",
  },
];
