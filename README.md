[![Busuanzi](https://socialify.git.ci/zkeq/Busuanzi/image?description=1&font=Bitter&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F14985020&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Light)](https://busuanzi.icodeq.com)

> 🚀 自建 [不蒜子](https://busuanzi.ibruce.info/) API

### 前言：

1. [不蒜子](https://busuanzi.ibruce.info/)是一款很好用的前端计数工具，但是因为流量日渐变多，经常会出现 `502` 的情况
2. 故尝试对其后端进行了仿造，达到了相同的效果，并且在首次添加域名时，会自动从 busuanzi 官网同步数据
3. 本项目使用 `Redis` 做数据库，若您的网站一个月内没有访问量，数据会自动清除。
4. 即下一次再使用本工具时将再次从 `Busuanzi ` 官网 同步数据
5. ~~本项目托管于 replit.com~~ ，开源地址： [zkeq/Busuanzi_backend_self](https://github.com/zkeq/Busuanzi_backend_self) [ MIT License ]
6. `replit` 存在不定期回档问题，现已将 `API` 部署至私有服务器，保证数据的完整性。

### 使用：

1. 将官网的 `//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js` 文件改为
2. `https://busuanzi.icodeq.com/busuanzi.pure.mini.js` （本项目暂不支持 `http` 协议的网站）
3. 即可使用，首次加载网站会较慢（后台同步不蒜子的 `Site_uv` 和 `Site_pv` ）
4. 之后会保持在 `360ms` 左右加载出数据 (服务器处理数据仅用时 `5ms`)

### 用法：

```html
<script async src="https://dev.busuanzi.icodeq.com/busuanzi.min.js"></script>

本文总阅读量 <span id="busuanzi_value_page_pv"></span> 次

本站总访问量 <span id="busuanzi_value_site_pv"></span> 次

本站总访客数 <span id="busuanzi_value_site_uv"></span> 人
```

 > <center>Powered by: 🚀 FastAPI + Redis ✨</center>

