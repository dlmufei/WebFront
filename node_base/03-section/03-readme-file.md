node 核心模块
===
* Path
  * [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/path.html#path_path)
  * [github](https://github.com/nodejs/node/blob/master/lib/path.js)
  * path 处理文件路径
  * __dirname,指的是当前的模块所在的目录，不是入口js所在的目录，
    许多时候我们传路径相关参数的时，以入口文件为基准，所以我们使用`path.dirname(module.parent.filename)`来替换

* File System
  * [官方文档(]https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_file_system&#10)
  * fs 操作文件系统
  * [扩展模块 fs-extra](https://www.npmjs.com/package/fs-extra)
  * [iconv-lite](https://www.npmjs.com/package/iconv-lite)解决编码转换问题，node原生支持的编码有限
  （`utf8, ucs2 / utf16le, ascii, binary, base64, hex`)
  * 写入文件有两种方式：（1）直接文件写入`writeFile`，默认是覆盖原文件的，注意对比`appendFile`
  （2）流式文件写入`creatWriteStream.write`，默认是追加方式写入。
  * 参照linux系统命令，移动和重命名使用的是同一个api `fs.rename`
  * 删除文件采用`fs.unlink`,而不是类似del之类的名称，其实也容易理解,删除文件本身不删除数据，只是改变了指向磁盘的链接。

* Child Process
  * [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#chi&#10;ld_process_child_process)

* Utilities
  * [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/util.html#util_util)
  * util 小工具，如：判断类型，数据格式化

* HTTP
  * [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_http)
  * http http服务功能

* URL
  * [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/url.html#url_url)
  * url url解析

* Query String
  * [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/querystring.html#query&#10;string_query_string)
  * querystring 解析url中的查询结果

* Crypto
  * [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/crypto.html#crypto_cry&#10;pto)
  * crypto 提供加密解密服务

* Readline
  * [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/readline.html#readline&#10;_readline_createinterface_options)
