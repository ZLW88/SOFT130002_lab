Cookie:

主要用在保存客户端，其值在客户端与服务端之间传送，不安全，存储的数据量有限。

Session

保存在服务端，每一个session在服务端有一个sessionID作一个标识。存储的数据量大，安全性高。占用服务端的内存资源



 cookie和session的区别

首先，cookie和session都是用来保存用户状态的。
cookie存在客户端，安全级别很低，有存储量的限制、存储大小不超过4k；
session存储在服务器端，安全性高，需要消耗服务端的存储空间，如果存储过多的话会造成服务器很缓慢。

Cookie存在安全隐患，可以在本地拦截发送给服务器端的cookie，之后对cookie进行修改，这样是不安全的;所以对于安全性要求高的数据应该使用session来进行存储。
Session是浏览器与服务器的一次回话，在服务端存储的Session都有一个sessionId，用来唯一标识这次会话，这个SessionId会被写入到cookie中，这样可以使得用户每次访问的时候服务器都能获取到之前的状态；可以在服务器端设置Session的过期时间。