/// <reference path="../../typings/typings/index.d.ts" />

const gulp = require('gulp')
const less = require('gulp-less');
const path = require('path')
const connect = require('gulp-connect');



//任务划分

gulp.task('connect', function() {
  connect.server({
    root: 'dest',
    port: 8888,
    livereload: true
  });
});
gulp.task('watch', ()=> {
  gulp.watch(['./dest/*.*'], ['reload']);
});
gulp.task('reload',()=>{
    gulp.src('./dest/*.*')
    .pipe(connect.reload())
})

//任务定义
gulp.task('hello',()=>{
    console.log('hello')
})

//运行任务

//1.拷贝文件
gulp.task('dest',()=>{
    gulp.src('./src/**/*.*').pipe(gulp.dest('./dest'))
})

// 默认执行的任务
gulp.task('default',()=>{
    console.log('default')
    gulp.watch('./src/*',['dest','connect'])
})

gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dest/css'));
});

 


