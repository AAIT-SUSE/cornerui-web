> 请注意，本项目和本文档仍然处于未完成状态

<p align="center">
  <a href="#">
    <img src="http://www.aait-suse.cn/OwenTsai/wp-content/uploads/2018/12/logo-1.png" alt="logo" width=150 height=150>
  </a>
  <p align="center">
    <strong>CornerUI</strong> 是为 <a href="http://www.aait-suse.cn">人工智能技术协会(AAIT@SUSE)</a> 开发的简洁、直观、易用的 Web UI框架和组件库
    <br>
    <strong>本仓库是 CornerUI-Web 的源码仓库。你可能也想查看 <a href="/">CornerUI-Vue</a> </strong>
    <br>
    <a href="/"><strong>阅读文档 ▶</strong></a>
    <br>
    <br>
    <a href="/">反馈问题</a>
    ·
    <a href="/">Made with Corner-UI</a>
    ·
    <a href="/">博客</a>
    ·
    <a href="/">插件</a>
  </p>
</p>

## 目录

- [概述](#概述)
- [快速开始](#快速开始)
- [状态](#状态)
- [文件结构](#文件结构)
- [开发与贡献](#开发与贡献)
- [许可协议](#许可协议)

## 概述

CornerUI 是基于 [Google Material Design](https://material.io/) 设计原则的 UI 组件库，将提供可以直接引入`html`文件的版本(**CornerUI-Web**)和可以与[`vue.js`](https://cn.vuejs.org/index.html)集成的版本(**CornerUI-Vue**)。

**这个仓库提供的源代码是 CornerUI-Web 的源代码。** 想要查看 CornerUI-Vue 的源代码，请[点击此处](#)。

CornerUI 被设计用于人工智能技术协会自身运作和项目用途，因此很多组件可能并不适用于其他场景。你可以查看我们文档中的[组件]我们推荐使用`vue.js`构建项目，并按需引入 CornerUI 提供的组件。

## 快速开始

> 注意，本项目处于未完成状态，你可能无法按照此处的指示引入 CornerUI 并正常工作。当开发完成后，我们会移除这一条声明。

- 如果你想直接在你的`.html`文件中引入 CornerUI，只需要分别将`css`和`js`文件引入即可；
- 如果你想在`vue.js`项目中使用 CornerUI，你可以通过`npm`来进行安装。

在`html`文件中直接引入：

```html
<link rel="stylesheet" type="text/css" href="your/path/to/cornerui.min.css">

<!-- other html elements -->

<script type="text/javascript" src="your/path/to/cornerui.min.js"></script>
```

通过`npm`安装：

```bash
> npm install corner-ui
```

关于如何使用 CornerUI，请参看我们的[文档](#)。

## 状态

![版本](https://img.shields.io/badge/version-0.0.1-blue.svg)
![状态](https://img.shields.io/badge/status-未完成-lightgrey.svg)
![发起人](https://img.shields.io/badge/founder-Owen%20Tsai-red.svg)
![开发团队](https://img.shields.io/badge/dev%20team-AAIT@SUSE%20FE-orange.svg)

## 文件结构

**注意：本节所示的文件结构是 CornerUI-Web 的项目结构。CornerUI-Vue 的文件结构与此处并不相同。**[点击此处](#)跳转到 Corner-Vue 的仓库页面。

通过`Git Clone`获得 CornerUI-Web 的代码，或者通过本页面的下载按钮下载 CornerUI-Web 的`.zip`压缩包后，你会获得如下的项目结构：


```bash
corner-ui/
├── dist/   #(dist 文件夹包含所有编译后，可以准备分发的文件)
│   ├── css/
│   │   ├── cornerui.css
│   │   ├── cornerui.min.css
│   └── js/
│       ├── cornerui.bundle.js
│       ├── cornerui.bundle.min.js
│       ├── cornerui.js
│       └── cornerui.min.js
├── src/   #(src 文件夹包含源代码，需要编译后才能部署到生产环境中)
│   ├── css/
│   │   ├── cornerui.css
│   │   ├── cornerui.min.css
│   └── js/
│       ├── cornerui.bundle.js
│       ├── cornerui.bundle.min.js
│       ├── cornerui.js
        └── cornerui.min.js
```

## 开发与贡献

CornerUI 必然是一个长期的项目，我没法依靠一己之力完成，也不可能在毕业之前完成。因此，任何对本项目感兴趣的人工智能技术协会成员，都可以参与开发和维护 CornerUI，使之变得更强大，更简便，更易用。

CornerUI 是**开源且免费**的，你**不会**因为参与开发和贡献 CornerUI 而获得任何的物质奖励或报酬。但你可以获得技术上的进步，同时也可以享受到维护一个开源项目的体验与乐趣。如果你认可并尊重我将 CornerUI 开源，并且愿意为之做出贡献，我热切地欢迎你加入 CornerUI 团队。

正如本文档所述，CornerUI 分为两个版本：

- 可以直接在`.html`文件中通过html标签引入的版本，称为**CornerUI-Web**;
- 可以与`vue.js`框架集成的版本，称为**CornerUI-Vue**.

我们推荐掌握了**html, css, JavaScript**的同学参与 CornerUI-Web 版本的开发与维护，掌握了进阶Web开发技能和熟悉**Vue.js**框架的同学参与 CornerUI-Vue 版本的开发与维护。

当你准备好着手进行开发时，请阅读[CornerUI-Web 开发环境部署指南](#)或者[CornerUI-Vue 开发环境部署指南]，来在你的计算机上部署用于开发 CornerUI 的环境和依赖。

## 许可协议

CornerUI ("CornerUI" refers to both CornerUI-Web and Corner-Vue) is open source and released under MIT License.

Copyright (c) 2018 Owen Tsai @AAIT-SUSE