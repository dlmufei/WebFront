node环境基础
===
本节从上手开始写node程序需要的环境开始讲起，
其中涉及关于javascript与ES的关系、js与node的关系，
以及node的发展等类似这样的的知识就不讲了，
基本上这样的知识在任意一本相关的书的引言部分都要讲许多，
如果设计到和环境准备相关的且特别需要注意的知识点的时候，
为了方便记忆，根据情况提一下。

## node介绍
- [node中文网站](http://nodejs.cn/) <http://nodejs.cn/>
- [node官方网站](https://nodejs.org/) <https://nodejs.org/>  
刚开始学习时可以先看一下中文网站，
其中帮助文档有一版部分翻译成了中文，
这对于英语不好或者排斥的同学可以先从中文开始熟悉。
不过建议后期还是要切换到英文官网，中文网站一方面有广告，
另一方面更新的比较慢，到目前（2016.11.27）LTS已经是6.9.1，
current version是7.2.0，而中文的还是4.4.4和6.2.0，
看样子后期中文网站不知道会不会再维护了。

> 备注：
  >- node原来（2008~2009.02）是只支持linux系统的，
后面（2011.07）才开始支持windows，
这涉及到一个底层的跨平台异步IO库libuv
 ([github](https://github.com/libuv/libuv)，
 [官网](http://libuv.org/))，记得留意。
  >- node作者：Ryan Dahl ([github](https://github.com/ry)）

## node安装
- node及npm安装：直接去官网下载对应的安装包。
  - windows 基本上就是傻瓜式安装。
  - linux 我比较喜欢下载编译好的压缩包，记得减压以后，
将node和npm添加环境变量或者软连接到环境变量包含的目录内。
- node版本管理：由于node版本的更新速度太快，
但是当我们学习比较各个版本之间差异，或者有些库或代码运行需要特定的
环境时，就需要能够灵活的切换node版本。
  - linux 最出名的要数nvm（[github](https://github.com/creationix/nvm)），
  nvm命令本身是一个bash脚本，安装方法可以参见它github的readme，
  你可以先安装nvm然后再使用nvm安装node。
  当然还有另外一个工具 n ([github](https://github.com/tj/n))，
  首先说明一下n不是nvm的简写，这是两个不同的工具。
  n 是一个需要全局安装的 npm package，使用
  `npm install -g n` 安装，所以需要你先安装node环境。
  关于两者的比较可以看一下这篇文章《[管理 node 版本，选择 nvm 还是 n？](http://web.jobbole.com/84249/)》
  除了上面提到的区别以外，我再简单的总结一下：
    >- nvm管理node使用的是沙箱机制，也就是将不同版本的node下载存储在
    `~/.nvm/<version>/ `下，切换node版本是通过修改 `$PATH`下，但是node命令
    本身的路径是发生变化的。
    因此不同版本的node安装的全局模块也是在各自不同的路径下，不会引起冲突。
    >- n 管理node版本时，n 会先将指定版本的 node 存储下来，
    然后将其复制到我们熟知的路径/usr/local/bin，
    所以node命令的路径是不变的。
        
  - windows 在windows上安装n后运行会显示`在cmd中输入 n 会显示“sh不是内部命令……`，
  所以n命令的运行看来用到了sh脚本，在windows下 n 有自己的定制版nvmw。同样linux下的
   nvm 也有定制的nvm-windows。
    >- nvm-windows ([github](https://github.com/coreybutler/nvm-windows/)),
  使用具体的介绍看一下官网就好，建议直接使用安装版，这样省去自己配置环境变量。
  另外安装nvm-windows前记得先卸载机器上的所有nodejs，仔细阅读安装说明。
    >- nvmw ([github](https://github.com/hakobera/nvmw),
    [npm](https://www.npmjs.com/package/nvmw)) 看官网，对照linux下 n 的用法。


