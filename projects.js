/* ============================================================
   GX/HUANG 正式作品配置

   普通作品：type 可省略，填写 cover + video。
   作品合集：设置 type: "collection"，并在 works: [ ] 里添加子作品。

   支持：
   - B站：自动读取标题、封面、播放/点赞/收藏等
   - 抖音：通过 Cloudflare Worker 读取；成功后浏览器永久缓存
   - GitHub Release / MP4 / WAV 等直链
   - YouTube / Vimeo

   如果某条抖音作品的数据已经确定，可以像 Momenta 一样填写 meta 快照。
   有 meta 时页面完全不会请求 Worker，最适合历史作品。
   ============================================================ */

/* 你的 Cloudflare Worker */
window.NFRAME_META_ENDPOINT = "https://douyin.hultbergdeister814.workers.dev/";

/* 本地缓存版本。以后真想强制全部重新读取，把 v1 改成 v2 即可。 */
window.NFRAME_META_CACHE_VERSION = "v1";

window.PORTFOLIO_PROJECTS = [
  {
    title: "品牌宣传视频",
    englishTitle: "Momenta",
    year: "2025",
    category: "motion",
    label: "品牌影像",
    description: "Momenta · 10+ 支品牌视频与发布会内容；单项目全网 1200w+ 曝光。",
    cover: "",
    video: "https://v.douyin.com/tLzdEHUO304/",

    /*
       这条是已经查到的旧数据快照。
       页面优先使用这里的数据，因此不会再请求查有校 / Worker。
    */
    meta: {
      kind: "embed",
      provider: "抖音",
      originalUrl: "https://www.douyin.com/video/7524272704455920932",
      embedUrl: "https://open.douyin.com/player/video?vid=7524272704455920932&autoplay=1",
      posterEmbedUrl: "https://open.douyin.com/player/video?vid=7524272704455920932&autoplay=0",
      thumbnail: "",
      title: "“Momenta智行中国”青岛篇来啦! “红瓦绿树相映衬，碧海蓝天对岛城。”漫步八大关，穿行老街巷，这次我们来到了海滨之城——青岛。 辅助驾驶中国行，丈量哪里你来定: 评论区告诉我，下一站想去哪儿！#Momenta飞轮大模型 #青岛 #青岛旅游攻略 #Momenta",
      description: "抖音公开视频",
      durationLabel: "抖音",
      stats: {
        view: 218457,
        like: 1188,
        favorite: 0,
        reply: 21,
        share: 16
      },
      douyinVideoId: "7524272704455920932"
    }
  },
  {
    title: "偷作业的贼",
    englishTitle: "THE HOMEWORK THIEF",
    year: "2024",
    category: "sound",
    label: "声音设计",
    description: "RCA 毕业动画 · 音效与混音；入围第七届寻光小宇宙奖。",
    cover: "",
    video: "https://www.bilibili.com/video/BV1AFC8YBEAR"
  },
  {
    title: "微电影-如果可以重来",
    englishTitle: "IF REWIND",
    year: "2025",
    category: "video",
    label: "课程作业",
    description: "复旦大学硕士·人际传播课程 - 担任剪辑师、主编剧和副导演。",
    cover: "",
    video: "https://github.com/Williamgxhuang/Video/releases/download/Media/8.27.1.mp4"
  },
  {
    type: "collection",
    title: "燕语配音社（某亦声工作室）/优思铭想工作室",
    englishTitle: "VIDEO / AUDIO",
    year: "2019–23",
    category: "sound",
    label: "视频/广播剧后期",
    countLabel: "15+ 部广播剧",
    description: "北京大学燕语配音社丨技术部部长：涵盖广播剧后期制作、视频剪辑；\n优思铭想工作室：广播剧后期制作，对白编辑、混音、音效与配乐",
    collectionDescription: "这里集中展示在燕语配音社（某亦声工作室）/优思铭想工作室期间参与制作的广播剧与声音作品。点击列表中的作品即可在当前页面播放。",

    works: [
      {
        title: "【互动游戏】我在北大竟然活不过一天？！| 恋爱生存互动游戏｜沙雕预警｜北京大学燕语配音社出品",
        year: "2020",
        role: "剪辑 / 混音 / 音效",
        description: "较早期作品，利用AE实现类GALGAME效果互动视频",
        cover: "",
        video: "bilibili.com/video/BV1a7411R7aM"
      },
      {
        title: "【广播剧】逆光",
        year: "2022",
        role: "音频总后期",
        description: "她在深渊中挣扎，她逆光而来，她跟着那道光，看到了新的希望，也借着那道光，成为了她理想中的自己。",
        cover: "raw.githubusercontent.com/Williamgxhuang/Video/assets/covers/1788381407157.jpg",
        video: "https://github.com/Williamgxhuang/Video/releases/download/Media/Niguang.wav"
      },
      {
        title: "【广播剧】高冷仙君的那啥竟然开口说话了？！",
        year: "2021",
        role: "音频总后期",
        description: "高冷禁欲系牌面级仙君，某天修行结束，突然发现自己的那啥开口说话了。",
        cover: "",
        video: "https://www.missevan.com/mdrama/45947"
      }
    ]
  }
];
