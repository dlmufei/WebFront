MongoDB 初探
===
MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。
在高负载的情况下，添加更多的节点，可以保证服务器性能。
MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。
* MongoDB 安装
  * 启动数据库 `D:\Program Files\MongoDB\Server\3.2\bin>mongod.exe --dbpath D:\mongo_data`
  * 访问数据库 - `mongo`
  ```
  D:\Program Files\MongoDB\Server\3.2\bin>mongo
  MongoDB shell version: 3.2.7
  connecting to: test
  Welcome to the MongoDB shell.
  For interactive help, type "help".
  For more comprehensive documentation, see
        http://docs.mongodb.org/
  Questions? Try the support group
        http://groups.google.com/group/mongodb-user
  >
  ```
  * 查看所有数据库 - `show dbs`  
  如果数据库中没有记录，那么不会显示空的数据库，只有插入数据后才会显示
  ```
  > show dbs
  local  0.000GB
  ```
  * 创建（使用）数据库 - `use db_name`
  ```
  > use test
  switched to db test
  ```
  * 显示当前使用的数据库 - `db`
  ```
  > db
  test
  ```
  * 插入数据 - `db.dbname.insert(obj)`
  ```
  > db.test.insert({"name":"cliff","age":18})
  WriteResult({ "nInserted" : 1 })
  > show dbs
  local  0.000GB
  test   0.000GB
  ```
  * 删除数据库 - `db.dropDatabase()`
  ```
  > db.dropDatabase()
  { "dropped" : "mydb", "ok" : 1 }
  ```
  * 显示数据集 - `show collections`
  ```
  > show collections
  col
  mydb
  ```
  * 删除集合 - `db.collection.drop()`
  * 插入文档 - `db.COLLECTION_NAME.insert(document)`
  如果该集合不在该数据库中， MongoDB 会自动创建该集合并插入文档
  * 查询集合 - `db.COLLECTION_NAME.find()`  find() 方法以非结构化的方式来显示所有文档。
  <br> 如果你需要以易读的方式来读取数据，可以使用 pretty() 方法，语法格式如下：
  <br> `>db.col.find().pretty() `
  ```
  > db.col.find()
  { "_id" : ObjectId("584969b43ca5fac99e7f6522"), "title" : "MongoDB 教程", "descr
  iption" : "MongoDB 是一个 Nosql 数据库", "by" : "菜鸟教程", "url" : "http://www.
  runoob.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
  >
  ```
  * 更新文档的两种方法：
    * update
    ```
    >db.collection.update(
      <query>,// update的查询条件，类似sql update查询内where后面的。
      <update>,//update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
      {
        upsert: <boolean>,//可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
        multi: <boolean>,//可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
        writeConcern: <document>//可选，抛出异常的级别。
      }
    )
    ```
    * save
    ```
    db.collection.save(
      <document>,//可选
      {
        writeConcern: <document>//可选
      }
    )
    ```
    替换了 _id 为 56064f89ade2f21f36b03136 的文档数据：
    ```
    >db.col.save({
      "_id" : ObjectId("56064f89ade2f21f36b03136"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "Runoob",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb",
                "NoSQL"
        ],
        "likes" : 110
    })
    ```
  * 删除文档
  ```
  db.collection.remove(
    <query>,//（可选）删除的文档的条件。
    {
      justOne: <boolean>,//（可选）如果设为 true 或 1，则只删除一个文档。
      writeConcern: <document>//（可选）抛出异常的级别。
    }
  )
  ```





 ----
 参考： 
   * [MongoDB中文社区](http://www.mongoing.com/) 
   * [MongoDB官网](https://www.mongodb.com/)
   * [菜鸟教程](http://www.runoob.com/mongodb/mongodb-tutorial.html)
   * [mongoVUE可视化客户端](http://www.mongovue.com/)
   * [mongoVUE破解](https://www.waitalone.cn/mongovue-v1-6-9-crack.html)
