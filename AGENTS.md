# 项目说明

## 项目概览

- 项目名：`per-care`
- 业务主题：`沐宠小院`宠物洗护点官网/落地页。
- 主要内容：宠物洗护服务介绍、门店环境轮播、套餐价格、客户评价、预约到店信息和门店位置展示。
- 目标语言与地区：中文页面，`app/layout.tsx` 中 `html lang="zh-CN"`。

## 技术栈

- 框架：Next.js App Router。
- 语言：TypeScript + React。
- 样式：全局 CSS，主要在 `app/globals.css` 中维护。
- 图片：使用 `next/image`；远程首屏图来自 Unsplash，本地轮播与地图图片放在 `public/assets/`。
- 依赖管理：npm，锁文件为 `package-lock.json`。

## 常用命令

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 生产构建：`npm run build`
- 启动生产服务：`npm run start`
- 代码检查：`npm run lint`

## 目录结构

- `app/layout.tsx`：全站根布局与 metadata。
- `app/page.tsx`：首页主体内容，包含导航、首屏、服务、环境、评价、套餐、预约和页脚。
- `app/globals.css`：全站样式、响应式规则、配色变量和组件类名。
- `components/HeroAvailabilityPanel.tsx`：首屏右侧预约状态面板，客户端组件，包含联系人、电话、期望到店时间等交互状态。
- `components/SpaceCarousel.tsx`：门店环境轮播，客户端组件，支持自动轮播、左右切换和圆点切换。
- `public/assets/`：页面实际引用的静态图片资源。
- `assets/`：源图片/备用图片资源，目前与 `public/assets/` 中的图片同名。
- `output/`、`tmp/`：图片生成或临时输出目录，已在 `.gitignore` 中忽略。
- `index.html`：独立静态 HTML 版本，内容和视觉与 Next.js 页面相近；当前主应用仍以 `app/` 下 Next.js 实现为准。

## 页面结构

首页 `app/page.tsx` 由以下主要区块组成：

1. 顶部导航：品牌名、站内锚点链接、预约按钮。
2. 首屏 Hero：远程背景图、品牌标题、核心文案、预约/电话 CTA、预约余位面板。
3. 洗护服务：基础洗护、造型修剪、皮毛养护、接送到店。
4. 门店环境：透明、分区、低噪音空间，使用 `SpaceCarousel` 展示三张门店环境图。
5. 老客评价：横向自动滚动评价卡片。
6. 常用套餐：日常清爽洗、精致护理洗、洗护造型套。
7. 预约到店：门店地址、联系电话、营业时间和示意地图。
8. 页脚：品牌与服务关键词。

## 关键数据与文案位置

- 服务项目、套餐和评价数据直接定义在 `app/page.tsx` 顶部常量中。
- 首屏预约余位数据定义在 `components/HeroAvailabilityPanel.tsx` 的 `slots` 常量中。
- 门店环境轮播图片和 caption 定义在 `components/SpaceCarousel.tsx` 的 `slides` 常量中。
- 门店地址、电话和营业时间目前写死在 `app/page.tsx`。
- 电话链接目前使用占位号码 `13800000000` / 展示为 `138-0000-0000`。

## 样式与设计约定

- 全站使用 `app/globals.css` 中的 CSS 变量控制主色：
  - `--mint` / `--mint-dark`：品牌绿色。
  - `--coral`：主要 CTA 色。
  - `--sun`、`--blue`：辅助色。
  - `--paper`、`--white`、`--line`、`--muted`：背景、边框和文字层级。
- 卡片、按钮、面板多数使用 `8px` 圆角。
- 页面宽度主要通过 `width: min(1180px, calc(100% - 40px))` 控制。
- 响应式断点主要是 `920px` 和 `620px`。
- 移动端会隐藏导航链接，服务/价格/预约信息改为单列布局。
- 当前图标多为页面内联 SVG，不依赖外部图标库。

## 图片与 Next 配置

- `next.config.ts` 中设置：
  - `images.unoptimized = true`
  - 允许 `images.unsplash.com` 作为远程图片域名。
- `SpaceCarousel` 使用的图片路径为：
  - `/assets/washcare-carousel-reception.png`
  - `/assets/washcare-carousel-care-zone.png`
  - `/assets/washcare-carousel-finished-zone.png`
- 地图背景图片路径为 `/assets/pet-store-map.png`。
- 如果新增远程图片域名，需要同步更新 `next.config.ts` 的 `images.remotePatterns`。

## 开发注意事项

- 这是一个偏静态展示型页面，当前没有后端接口、表单提交或持久化逻辑。
- `HeroAvailabilityPanel` 中联系人、联系电话和到店时间只存在于浏览器状态里，点击预约按钮只是跳转到 `#booking`。
- 如果要做真正预约功能，需要新增提交入口、校验、接口调用和成功/失败状态。
- 保持中文文案风格温和、可信，贴合宠物洗护门店场景。
- 修改 UI 时优先复用现有类名、配色变量和布局节奏，避免引入无关设计体系。
- 新增可交互组件时，如果使用 React state/effect，需要在组件顶部添加 `"use client"`。
- `tsconfig.json` 开启 `strict`，路径别名 `@/*` 指向项目根目录。
- `eslint.config.mjs` 使用 Next.js core web vitals 与 TypeScript 规则。

## 版本控制与忽略项

- `.gitignore` 已忽略：
  - `node_modules/`
  - `.next/`
  - `next-env.d.ts`
  - `dist/`、`build/`
  - `.env*`，但保留 `.env.example`
  - `coverage/`
  - `tmp/`、`output/`
  - 常见系统和编辑器文件
- 当前仓库跟踪了 `assets/` 和 `public/assets/` 中的图片文件。

## 后续接手建议

- 修改页面内容时，优先从 `app/page.tsx` 的常量和对应 JSX 区块入手。
- 修改首屏预约交互时，优先看 `components/HeroAvailabilityPanel.tsx`。
- 修改轮播图片时，同时确认图片是否已经放入 `public/assets/`，并更新 `components/SpaceCarousel.tsx` 的 `slides`。
- 修改整体视觉时，优先调整 `app/globals.css` 顶部变量和现有组件类，减少重复样式。
