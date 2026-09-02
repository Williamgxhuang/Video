/* ============================================================
   GX/HUANG 正式作品配置

   普通作品：type 可省略，填写 cover + video。
   作品合集：设置 type: "collection"，并在 works: [ ] 里添加子作品。
   合集首页会自动使用 works 中前 6 个子作品的封面组成“书册堆叠”，不需要单独制作合集大封面。

   cover：普通作品封面路径，例如 assets/covers/文件名.webp；合集请填写每个 work.cover
   video：可填写 B站完整 BV/AV 链接，或 GitHub Release MP4 链接
   category：motion / sound / content / experimental

   B站链接：cover 留空时，页面会尝试自动读取视频封面。
   没有封面或视频时，填空字符串 ""。
   ============================================================ */

window.PORTFOLIO_PROJECTS = [
  {
    title: "品牌宣传视频",
    englishTitle: "Momenta",
    year: "2025",
    category: "motion",
    label: "品牌影像",
    description: "Momenta · 10+ 支品牌视频与发布会内容；单项目全网 1200w+ 曝光。",
    cover: "",
    video: "https://v.douyin.com/tLzdEHUO304/"
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
    description: "北京大学燕语配音社丨技术部部长：涵盖广播剧后期制作、视频剪辑；
       优思铭想工作室：广播剧后期制作，对白编辑、混音、音效与配乐",
    collectionDescription: "这里集中展示在燕语配音社（某亦声工作室）/优思铭想工作室期间参与制作的广播剧与声音作品。点击列表中的作品即可在当前页面播放。",

    /*
       在下面 works 数组里继续复制项目即可。
       B站：video 填完整 https://www.bilibili.com/video/BV.../ 链接。
       GitHub Release：video 填 .mp4 的 Release Asset 地址。
       如果 work.cover 留空，B站视频会尝试自动读取封面。
       首页最多预览前 6 个子作品封面，更多作品由 countLabel 显示总量。
    */
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
