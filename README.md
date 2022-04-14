## 自建 [不蒜子](https://busuanzi.ibruce.info/) API

> 本仓库为官网归档地址：https://busuanzi.icodeq.com/

> 开源地址：https://github.com/zkeq/Busuanzi_backend_self

### 前言：

1. 不蒜子是一款很好用的前端计数工具，但是因为流量日渐变多，经常会出现 `502` 的情况
2. 所以我尝试对其后端进行了仿造，达到了相同的效果
3. 虽然速度有些慢（大概2秒内），但是保证不会出现一直无法显示计数的情况
4. 防止本项目出现和不蒜子官网相同的情况，本项目采用授权制，并且最多容纳 `1000` 个站点
5. 以此来保证服务的可用性（本项目托管于 replit.com ），开源地址： [zkeq/Busuanzi_backend_self](https://github.com/zkeq/Busuanzi_backend_self)

### 使用：

1. 首先请在评论区申请域名，我会将其加入到白名单中
2. 将官网的 `//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js` 文件改为
3. `https://busuanzi.icodeq.com/busuanzi.pure.mini.js` （本项目暂不支持 `http` 协议的网站）
4. 即可使用，首次加载网站会较慢（后台同步卜算子的 `Site_uv` 和 `Site_pv` ）
5. 之后会保持在 `2` 秒左右加载出数据

### 用法：

```html
<script async src="https://busuanzi.icodeq.com/busuanzi.pure.mini.js"></script>

本文总阅读量 <span id="busuanzi_value_page_pv"></span> 次

本站总访问量 <span id="busuanzi_value_site_pv"></span> 次

本站总访客数 <span id="busuanzi_value_site_uv"></span> 人
```

<!-- 本文总阅读量<span id="busuanzi_value_page_pv"></span>次  本站总访问量<span id="busuanzi_value_site_pv"></span>次  本站总访客数<span id="busuanzi_value_site_uv"></span>人 -->