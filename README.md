# hot-water
## 简介：
一个基于vue,vue-router开发的，包含展示，搜索功能的官网。
记录一下这个项目过程中踩过的坑。

## 低版本浏览器下promise缺失报错
遇到的问题，还不确定是否解决：build后index.html文件直接本地打开，在低版本浏览器无报错，一旦部署到服务器后以ip访问，会报Promise缺失错误。

引入promise-polyfill库，在main.js下【import "promise-polyfill"】


## 二、三级菜单
实现：纯css，父级：hover 子{display：block}

## favicon.ico
把要用的图标放到static下,index.html下引入。注意路径【href="static/xxx.ico"】

## css引入背景图片
在build/utils.js中的generateLoaders函数下【if (options.extract)】return加入【publicPath:'../../'】

## 搜索功能实现
思路：
1. 搜索分两种：按名字搜索，按分类搜。
2. 确定用户用哪种搜：导航到search页，将搜索参数query形式放在url上，search在create时判断类型【名字搜索时带name的key，类型带flag（为商品的第一大类1-7）】以此调用不同接口，给byName或byType赋值。
3. 进入搜索页后，按名字搜索可以用brand,third_type,page进行进一步检索，通过点击相应的btn,将搜索参数query放在url上。
4. 同理，按分类搜索，【第一，二大类可能会有容量，形状，类别这些新的检索条件】。
5. 进行下一步检索时，记得将原生的搜索参数加回去。例如，按类搜索第一次检索以brand1检索后，下一次按shape检索时，brand应该扔保留brand1。
6. watch：{'$route'}记得监听$router的变化。

## 导出pdf
实现：引入库【html2canvas】【jspdf】，先用canvas将某块区域画布转base64，然后再转pdf。
坑:【如果区域内包含非本地的图片资源，画布会被污染，有跨域问题】。
解决：在html2canvas配置中，修改【allowTaint: false,useCORS:true】

## 详情页
实现：传参数第一大类和id到url上，根据参数请求接口。

## axios下post传参
需要把参数对象解析为form数据对象。实现：引入qs库解析。

## 当post数据中包含文件
利用原生对象new FormData();然后将各个key值append进去。理论上也是可以解决上面问题的。
