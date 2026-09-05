/* ============================================================
   GX/HUANG 正式作品配置

   普通作品：type 可省略，填写 cover + video。
   作品合集：设置 type: "collection"，并在 works: [ ] 里添加子作品。

   Momenta：
   - 数据源：抖音历史快照
   - 原始链接：抖音
   - 播放源 / 封面：B站版本
   ============================================================ */

window.NFRAME_META_ENDPOINT = "https://douyin.hultbergdeister814.workers.dev/";
window.NFRAME_META_CACHE_VERSION = "v3";

window.PORTFOLIO_PROJECTS = [
  {
    title: "品牌宣传视频",
    englishTitle: "Momenta",
    year: "2025",
    category: "motion",
    label: "品牌影像",

    description:
      "Momenta · 10+ 支品牌视频与发布会内容；单项目全网 1200w+ 曝光。\n" +
      "为适配浏览器播放，播放源使用B站版本。",

    cover: "",
    video: "https://www.bilibili.com/video/BV1Ho3yzGEAN/",

    meta: {
      kind: "embed",
      provider: "抖音",

      originalUrl:
        "https://www.douyin.com/video/7524272704455920932",

      embedUrl:
        "https://player.bilibili.com/player.html?isOutside=true&bvid=BV1Ho3yzGEAN&p=1&autoplay=1&danmaku=0",

      posterEmbedUrl:
        "https://player.bilibili.com/player.html?isOutside=true&bvid=BV1Ho3yzGEAN&p=1&poster=1&autoplay=0&danmaku=0",

      thumbnail: "",

      title:
        "“Momenta智行中国”青岛篇来啦! “红瓦绿树相映衬，碧海蓝天对岛城。”漫步八大关，穿行老街巷，这次我们来到了海滨之城——青岛。 辅助驾驶中国行，丈量哪里你来定: 评论区告诉我，下一站想去哪儿！#Momenta飞轮大模型 #青岛 #青岛旅游攻略 #Momenta",

      description:
        "抖音数据快照 · 为适配浏览器播放，播放源使用B站版本",

      durationLabel: "B站",

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
    label: "视频 / 广播剧后期",

    countLabel: "15+ 项视频 / 广播剧",

    description:
      "北京大学燕语配音社丨技术部部长：涵盖迎新视频、互动内容、广播剧后期与视频剪辑；\n" +
      "优思铭想工作室：广播剧后期制作，对白编辑、混音、音效与配乐。",

    collectionDescription:
      "这里集中展示在燕语配音社（某亦声工作室）/优思铭想工作室期间参与制作的迎新视频、互动视频、广播剧与声音作品。创意脑洞向的内容里既有笑点，也有情绪与故事；点击列表中的作品即可在当前页面播放。",

    works: [
      {
        title: "2020燕语配音社迎新视频——《出道吧，小燕！》",
        year: "2020",
        role: "迎新视频 / 创意脑洞",
        description:
          "加入燕语配音社后的处女作。以“成团出道”为核心脑洞展开的年度迎新视频，用大量二创、反差与喜剧桥段呈现社团气质，也是之后系列迎新创作的起点。",
        cover: "",
        video: "https://www.bilibili.com/video/BV1cv411C7sc/"
      },

      {
        title: "2021燕语配音社十周年迎新视频——《声逢其十燕逢君》",
        year: "2021",
        role: "迎新视频 / 创意叙事",
        description:
          "次年的年度迎新作品，也正值燕语配音社十周年。延续创意脑洞与轻喜剧表达，同时加入社团记忆、新人相遇与十周年情绪线，在笑点之外留下更完整的情感落点。",
        cover: "",
        video: "https://www.bilibili.com/video/BV1L44y1x7Zg/"
      },

      {
        title:
          "【互动游戏】我在北大竟然活不过一天？！| 恋爱生存互动游戏｜沙雕预警｜北京大学燕语配音社出品",
        year: "2020",
        role: "剪辑 / 混音 / 音效",
        description: "较早期作品，利用AE实现类GALGAME效果互动视频。",
        cover: "",
        video: "bilibili.com/video/BV1a7411R7aM"
      },

      {
        title: "【广播剧】逆光",
        year: "2022",
        role: "音频总后期",
        description:
          "她在深渊中挣扎，她逆光而来，她跟着那道光，看到了新的希望，也借着那道光，成为了她理想中的自己。",
        cover: "assets/covers/1788381407157.jpg",
        video:
          "https://github.com/Williamgxhuang/Video/releases/download/Media/Niguang.wav",

        meta: {
          kind: "video",
          provider: "项目数据",
          originalUrl:
            "https://github.com/Williamgxhuang/Video/releases/download/Media/Niguang.wav",
          sourceUrl:
            "https://github.com/Williamgxhuang/Video/releases/download/Media/Niguang.wav",
          title: "【广播剧】逆光",
          description: "音频总后期",
          stats: {
            view: 7800,
            follow: 1500,
            favorite: null,
            reply: 81,
            share: null
          }
        }
      },

      {
        title: "【广播剧】高冷仙君的那啥竟然开口说话了？！",
        year: "2021",
        role: "音频总后期",
        description:
          "高冷禁欲系牌面级仙君，某天修行结束，突然发现自己的那啥开口说话了。",
        cover:
          "assets/covers/0c6b24aed1d140a513f809b814a417c3202407.jpg?v=2",
        video:
          "https://www.missevan.com/sound/player?id=4695189"
      },

      {
        type: "archive-note",
        title: "更多作品仍在档案中",
        year: "2019–23",
        role: "ARCHIVE NOTE",
        description:
          "燕语配音社与优思铭想工作室期间还参与过更多迎新内容、配音作品、广播剧后期、混音与社团影像项目。本页仅选取具有代表性的作品展示，历史项目未完全收录。",
        archiveLabel: "未完全收录",
        cover: "",
        video: ""
      }
    ]
  }
];
