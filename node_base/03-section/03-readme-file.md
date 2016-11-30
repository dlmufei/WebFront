<h1 id="node-">node 核心模块</h1><ul>
<li>Path<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/path.html#path_path">
官方文档</a></li>
<li><a href="https://github.com/nodejs/node/blob/master/lib/path.js">github</a>&lt;
/li&gt;
</li><li>path 处理文件路径</li>
<li>__dirname,指的是当前的模块所在的目录，不是入口js所在的目录，
许多时候我们传路径相关参数的时，以入口文件为基准，所以我们使用<code>path.dirname
(module.parent.filename)</code>来替换</li>
</ul>
</li>
</ul>
<ul>
<li>File System<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_file_system&#10;">官方文档</a></li>
<li>fs 操作文件系统 </li>
<li>扩展模块 <a href="https://www.npmjs.com/package/fs-extra">fs-extra</a></li>
<li><a href="https://www.npmjs.com/package/iconv-lite">iconv-lite</a>解决编码转
换问题，
node原生支持的编码有限（<code>utf8, ucs2 / utf16le, ascii, binary, base64, hex<!--
code-->）</code></li><code>
<li>写入文件有两种方式：（1）直接文件写入<code>writeFile</code>，默认是覆盖原文
件的，注意对比<code>appendFile</code>。
（2）流式文件写入<code>creatWriteStream.write</code>，默认是追加方式写入。</li>
<li>参照linux系统命令，移动和重命名使用的是同一个api <code>fs.rename</code></li>

<li>删除文件采用<code>fs.unlink</code>,而不是类似del之类的名称，其实也容易理解，
删除文件本身不删除数据，只是改变了指向磁盘的链接。</li>
</code></ul><code>
</code></li><code>
<li><p>Child Process</p>
<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#chi&#10;ld_process_child_process">官方文档</a></li>
</ul>
</li>
<li><p>Utilities</p>
<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/util.html#util_util">
官方文档</a></li>
<li>util 小工具，如：判断类型，数据格式化</li>
</ul>
</li>
<li><p>HTTP</p>
<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_http">
官方文档</a></li>
<li>http http服务功能</li>
</ul>
</li>
<li><p>URL</p>
<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/url.html#url_url">官方
文档</a></li>
<li>url url解析</li>
</ul>
</li>
<li><p>Query String</p>
<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/querystring.html#query&#10;string_query_string">官方文档</a></li>
<li>querystring 解析url中的查询结果</li>
</ul>
</li>
<li><p>Crypto</p>
<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/crypto.html#crypto_cry&#10;pto">官方文档</a></li>
<li>crypto 提供加密解密服务</li>
</ul>
</li>
<li><p>Readline</p>
<ul>
<li><a href="https://nodejs.org/dist/latest-v6.x/docs/api/readline.html#readline&#10;_readline_createinterface_options">官方文档</a></li>
<li></li>
</ul>
</li>
</code></ul><code>
  </code>
