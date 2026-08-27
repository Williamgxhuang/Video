# GX/HUANG 个人作品集

一个以中文为主的个人作品集网站，用于展示影像、声音、后期制作与内容项目。

项目使用纯 **HTML / CSS / JavaScript**，不依赖构建工具，可以直接部署到 **GitHub Pages**。

## 当前功能

- 中文优先的响应式作品集界面
- 项目分类与筛选
- 本地视频文件预览
- B站 / YouTube / Vimeo 视频链接导入与播放
- MP4 / WebM 等视频直链播放
- 自动读取部分视频平台的标题与封面
- 自定义 JPG / PNG / WEBP 项目封面
- 项目标题、类型、年份和项目说明
- 移动端适配

> 注意：当前“添加作品”默认是浏览器本地预览。刷新页面后，临时加入的项目不会自动写回 GitHub 仓库。

## 仓库结构

最简单只需要两个文件：

```text
portfolio/
├── index.html
└── README.md
```

如果后续希望管理固定图片，可以增加：

```text
portfolio/
├── index.html
├── README.md
└── assets/
    ├── images/
    └── videos/
```

## 部署到 GitHub Pages

### 1. 创建仓库

在 GitHub 新建一个仓库，例如：

```text
gx-portfolio
```

把 `index.html` 和 `README.md` 上传到仓库根目录，并确保首页名称保持为：

```text
index.html
```

### 2. 开启 Pages

进入仓库：

```text
Settings → Pages
```

在 **Build and deployment** 中选择：

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

保存后，网站地址通常类似：

```text
https://你的用户名.github.io/gx-portfolio/
```

如果仓库名称本身是：

```text
你的用户名.github.io
```

则地址通常可以直接使用：

```text
https://你的用户名.github.io/
```

## 更新网站

以后修改 `index.html` 后重新提交即可。

```bash
git add index.html README.md
git commit -m "Update portfolio"
git push
```

也可以直接在 GitHub 网页端替换文件。

## 视频链接支持

网站的“添加作品”入口支持视频文件和视频链接两种方式。

| 来源 | 播放 | 自动封面 / 标题 |
| --- | --- | --- |
| B站 | 支持 | 支持，但可能受平台跨域策略影响 |
| YouTube | 支持 | 支持 |
| Vimeo | 支持 | 支持 |
| MP4 / WebM 直链 | 支持 | 不一定 |
| 其他网页视频 | 视网站嵌入策略而定 | 可通过元数据接口扩展 |

如果平台没有返回封面，可以直接上传自己的 JPG / PNG / WEBP 图片。

推荐封面比例：

```text
16:9
```

## GitHub Pages 的限制

GitHub Pages 适合托管：

```text
HTML
CSS
JavaScript
固定图片
少量静态资源
```

但它本身不是数据库或文件上传服务器，所以网页里临时上传的视频、封面和新项目不会自动保存进 GitHub。

如果希望实现以下能力：

- 网页上传视频并永久保存
- 刷新后仍能看到新项目
- 多设备共享同一套作品
- 保存上传的封面
- 管理作品数据

需要额外接入后端和对象存储。

推荐组合：

```text
GitHub Pages        → 静态前端
Cloudflare Worker   → 上传 / 元数据 API
Cloudflare R2       → 视频和图片存储
Cloudflare D1 / KV  → 项目数据
```

## 云端上传接口

当前前端已经预留：

```javascript
window.NFRAME_UPLOAD_ENDPOINT = "";
```

可以把它配置成自己的 Cloudflare Worker 或其他后端接口。

推荐流程：

```text
浏览器
  ↓
请求签名上传地址
  ↓
Cloudflare Worker
  ↓
返回 R2 Signed URL
  ↓
浏览器直接上传视频到 R2
```

**不要把 R2 Secret、Cloudflare API Token 或其他密钥直接写进 `index.html`。**

## 视频元数据接口

前端还预留了：

```javascript
window.NFRAME_META_ENDPOINT = "";
```

可以用于服务器端解析浏览器无法直接读取的网站，例如处理：

- 视频标题
- 视频封面
- 作者信息
- 视频时长
- iframe 播放地址
- 短链接跳转

对于受 CORS 限制的 B站链接或其他平台，这个接口可以作为统一兜底。

## 推荐的维护方式

如果作品数量不多，而且网站主要用于求职或个人展示，推荐把最终确认的项目直接写进 `index.html` 并提交到 GitHub。

网页里的“添加作品”功能可以作为预览工具；确认封面、标题和文案后，再把正式内容固定到代码里。

这样可以获得：

- 更稳定的加载速度
- 不依赖数据库
- GitHub 自动保留版本记录
- 免费且简单的部署流程

## 本地预览

可以直接打开 `index.html`。

如果浏览器限制本地资源访问，可以在项目目录运行：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://localhost:4173
```

## 自定义域名

如果以后购买域名，可以在：

```text
Settings → Pages → Custom domain
```

中填写，例如：

```text
gxhuang.com
works.gxhuang.com
```

然后按照 GitHub Pages 提示配置 DNS。

## 注意事项

1. 不要把 API Secret、Token、私钥提交到公开仓库。
2. 大体积视频不建议直接存进 GitHub，优先使用 B站、YouTube、Vimeo、R2 或其他对象存储。
3. 外部网站是否允许 iframe 播放取决于对应平台策略。
4. 自动封面读取可能受到 CORS、Referer 或平台 API 规则影响。
5. 浏览器本地上传生成的对象 URL 在刷新页面后不会保留。
6. 正式发布前建议同时测试桌面端和手机端。

## 技术栈

```text
HTML5
CSS3
Vanilla JavaScript
GitHub Pages
```

可选扩展：

```text
Cloudflare Workers
Cloudflare R2
Cloudflare D1 / KV
```

## License

本项目用于个人作品展示。

如计划开放代码给他人使用，可以自行增加合适的开源许可证；如果仅用于个人作品集，也可以不额外声明开源授权。
