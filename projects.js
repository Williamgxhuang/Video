/* ============================================================
   GX/HUANG 正式作品配置

   以后新增、删除、修改作品，只需要编辑这个文件。

   支持两种项目：
   1) 普通视频：type: "video"（也可以省略 type）
   2) 作品合集：type: "collection"，在 works: [ ] 中放很多子作品

   cover：封面路径，推荐 assets/covers/文件名.webp
          如果 video 填的是 B站链接，cover 留空时会自动尝试读取 B站封面。
          合集 cover 留空时，会尝试读取合集里第一个视频的封面。
          手动填写 cover 时，始终优先使用你自己的封面。

   video：支持 GitHub Release MP4 直链，也支持 B站完整 BV/AV 视频链接。
          B站建议使用 https://www.bilibili.com/video/BV... 这种完整链接。

   category：motion / sound / content / experimental
   ============================================================ */

window.PORTFOLIO_PROJECTS = [
  {
    title: "智行中国",
    englishTitle: "SMART ROAD",
    year: "2025",
    category: "motion",
    label: "品牌影像",
    description: "Momenta · 10+ 支品牌视频与发布会内容；单项目全网 1200w+ 曝光。",
    cover: "",
    video: ""
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
    title: "垂媒论坛",
    englishTitle: "SEARCHLIGHT",
    year: "2025",
    category: "content",
    label: "内容运营",
    description: "汽车之家 · 内容运营：92 篇内容，12 篇亮点内容。",
    cover: "",
    video: ""
  },

  /* ----------------------------------------------------------
     作品合集示例：燕语配音社

     以后增加一部广播剧，只需要在 works 里面复制一条：

     {
       title: "广播剧名称",
       year: "2023",
       role: "剪辑 / 混音 / 音效",
       description: "可选：补充一句作品说明",
       video: "https://www.bilibili.com/video/BVxxxxxxxxxx/"
     }

     video 也可以换成 GitHub Release 的 MP4 链接。
     ---------------------------------------------------------- */
  {
    type: "collection",
    title: "燕语配音社",
    englishTitle: "VOICE GRID",
    year: "2019–23",
    category: "sound",
    label: "广播剧后期",
    countLabel: "15+ 部广播剧",
    description: "北京大学 · 广播剧后期作品合集，涵盖剪辑、混音、音效与配乐。",
    collectionDescription: "这里集中展示燕语配音社时期参与制作的广播剧作品。点击列表中的任意作品即可在当前页面播放。",
    cover: "",
    works: [
       {
       title: "【互动游戏】我在北大竟然活不过一天？！| 恋爱生存互动游戏｜沙雕预警｜北京大学燕语配音社出品",
       year: "2020",
       role: "剪辑 / 混音 / 音效",
       description: "较早期作品，利用AE实现类GALGAME效果互动视频",
       video: "bilibili.com/video/BV1a7411R7aM"
     }
    ]
  }
];
