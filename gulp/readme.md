gulp 初探
====
* 简介  
基于流的代码自动化构建工具，减少重复工作:
  >* 预处理语言的编译。
  >* js,css,html压缩混淆。
  >* 图片体积优化。

* 常见用法（原生的用法）
  * 任务自定义：
  ```
  gulp.task('hello',()=>{
    console.log('hello')
  })
  ```
  * 默认任务
  ```
  // 默认执行的任务
  gulp.task('default',()=>{
    console.log('default')
  })
  ```
  * `src`，`dest`，`pipe` 如:`gulp.src('./src/**/*.*').pipe(gulp.dest('./dest'))`，注意：路径和文件的匹配方法。
  * `watch`函数
  ```
  gulp.task('default',()=>{
    console.log('default')
    gulp.watch('./src/*',['dest'])
  })
  ```

* 第三方插件  
gulp本身不支持太多功能，大量的功能需要通过第三方插件来提供。
  * less编译插件`gulp-less`
    > 安装：`npm install gulp-less --save`  
    > [npm官网](https://www.npmjs.com/package/gulp-less)
  * jade编译`gulp-jade`
  * 合并文件`gulp-concat`
  * 最小化js文件`gulo-uglify`
  * 重命名文件`gulp-rename`
  * 最小化css文件`gulp-minify-css`
  * 压缩html`gulp-minify-html`
  * 压缩图像`gulp-imagemin`
  * 创建本地服务器`gulp-connect`
    > <https://www.npmjs.com/package/gulp-connect>






* 对比webpack
  * [Webpack 中文指南](http://webpackdoc.com/index.html)
  * <http://webpack.github.io/>




------
参考：   
* [gulp中文官网](http://www.gulpjs.com.cn/)
* [gulp英文官网](http://gulpjs.com/)
* [gulp-github](https://github.com/gulpjs/gulp)


