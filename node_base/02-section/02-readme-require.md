node module
===
通过使用模块,在各个模块内部形成一个封闭的作用域,
避免模块间变量，函数的冲突。所以就不需要写自执行函数


## module 对象
* 下面是我定义的两个js文件，一个是calc.js 引用了 calc-module.js 
> calc.js 在 require calc-module 以前的module对象
```
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'E:\\WebFront\\node_base\\02-section\\calc-client.js',
  loaded: false,
  children: [],
  paths:
   [ 'E:\\WebFront\\node_base\\02-section\\node_modules',
     'E:\\WebFront\\node_base\\node_modules',
     'E:\\WebFront\\node_modules',
     'E:\\node_modules' ] }
```
> calc-module.js 的module对象
```
//calc-module.js 的module对象
Module {
  id: 'E:\\WebFront\\node_base\\02-section\\calc-module.js',
  exports: {},
  parent:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: 'E:\\WebFront\\node_base\\02-section\\calc-client.js',
     loaded: false,
     children: [ [Circular] ],
     paths:
      [ 'E:\\WebFront\\node_base\\02-section\\node_modules',
        'E:\\WebFront\\node_base\\node_modules',
        'E:\\WebFront\\node_modules',
        'E:\\node_modules' ] },
  filename: 'E:\\WebFront\\node_base\\02-section\\calc-module.js',
  loaded: false,
  children: [],
  paths:
   [ 'E:\\WebFront\\node_base\\02-section\\node_modules',
     'E:\\WebFront\\node_base\\node_modules',
     'E:\\WebFront\\node_modules',
     'E:\\node_modules' ] }
```
> calc.js 在 require calc-module 以后的module对象

```
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'E:\\WebFront\\node_base\\02-section\\calc-client.js',
  loaded: false,
  children:
   [ Module {
       id: 'E:\\WebFront\\node_base\\02-section\\calc-module.js',
       exports: [Function],
       parent: [Circular],
       filename: 'E:\\WebFront\\node_base\\02-section\\calc-module.js',
       loaded: true,
       children: [],
       paths: [Object] } ],
  paths:
   [ 'E:\\WebFront\\node_base\\02-section\\node_modules',
     'E:\\WebFront\\node_base\\node_modules',
     'E:\\WebFront\\node_modules',
     'E:\\node_modules' ] }
```

> 对比以上两个module对象，注意一下几点：  
>* __filename：模块所在的绝对路径信息
>* parent：是引用它的module 
>* children：它引用的module
>* exports：代表输出对象

* [module源码](https://github.com/nodejs/node-v0.x-archive/blob/master/lib/module.js)

## require 函数

* 阮一峰的[《require() 源码解读》](http://www.ruanyifeng.com/blog/2015/05/require.html)
* [require Module 官方使用文档](https://nodejs.org/api/modules.html#modules_all_together)
> 一般的模块定义比如 circle.js：
```js
const PI = Math.PI;
exports.area = (r) => PI * r * r;
exports.circumference = (r) => 2 * PI * r;
```
> 使用了：（1）箭头匿名函数。（2）自动属性机制。
* node 中所有的相对路径都是以入口文件为基础的，
并不是以当前js文件所在的路径，
在定义的require模块中使用相对路径时要注意。
在模块内部使用路径时，要结合模块的全局对象`__dirname` 和
`__filename` 使用。
* require 查找模块的查找路径顺序
  * 文件且省略扩展名时：js->json->node
  * 文件夹时：默认查找 index.js
* 缓存机制：第一次记载某个模块时,node会缓存该模块,
以后再加载该模块就直接从缓存中获取模块的exports属性。
  * 如果需要多次执行该模块，就需要该模块暴露函数而不是一个对象。
  * 模块的缓存可以在 require.cache 拿到，同样也可以删除。
