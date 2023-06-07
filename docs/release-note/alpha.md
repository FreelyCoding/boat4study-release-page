# Alpha 版本迭代介绍

## 功能介绍

在Alpha版本，学舟主要的功能有：

1. 题库的创建，删除与收藏
2. 选择题的录入与练习
3. 笔记的创建，点赞和收藏

## 技术介绍

Alpha阶段的系统架构如下：

![image-20230608024608352](C:\Users\Longxmas\AppData\Roaming\Typora\typora-user-images\image-20230608024608352.png)

* 前后端开发解耦，可以并行进行，前后端共同维护swagger接口文档实现基本交互
* 前端：前端使用uni-app框架进行开发，开发工具采用针对于uni-app框架的HBuilder X集成开发环境，主要采用uni-app自带的组件，开源的组件库，如ThorUI, uView等
* 后端：后端使用 Gin框架(Golang语言)进行开发，数据库使用Postgres，测试框架部署在华为云服务器

## 运行环境

* 微信小程序端：软件需要能够在iOS、Android、Windows、MAC等平台上的微信客户端中运行，支持不同的设备及分辨率。

* web端：软件需要能够在Chrome、FireFox、Safari、Edge等主流的浏览器中运行，支持不同的操作系统和分辨率。



