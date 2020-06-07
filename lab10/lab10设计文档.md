Exercise7：





pdo

连接到数据库

 $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

设置查询并返回

 $sql = "select * from Artists order by LastName";
 $result = $pdo->query($sql);

做循环查询，输出，最后断开连接数据库

while ($row = $result->fetch()) {
         echo $row['ArtistID'] . " - " . $row['LastName'] . "<br/>";
     }
     $pdo = null;



![1](..\lab10\images\1.png)





mysqli

连接到MySQL服务器，获得数据库资源

$connection = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);

检查连接的结果

if ( mysqli_connect_errno() ) {
             die( mysqli_connect_error() );
         }

设置查询

 $sql = "select * from Genres order by GenreName";

进入循环，返回查询结果，循环结束后释放结果

if ($result = mysqli_query($connection, $sql)) {
           // loop through the data
           while($row = mysqli_fetch_assoc($result)) {
               echo '<option value="' . $row['GenreID'] . '">';
               echo $row['GenreName'];
               echo "</option>";
           }
           // release the memory used by the result set
           mysqli_free_result($result);
       }

断开连接

mysqli_close($connection);

![2](..\lab10\images\2.png)





Exercise8:

outputArtists()
PDO连接Artists数据库，获得数据，循环将每一行的LastName在a标签中输出，并设置a标签的各项属性，判断改变class属性，最后释放资源，断开数据库连接

outputPaintings()
通过PDO连接Paintings数据库，通过点击获得的id定位得到数据，进入循环，执行outputSinglePainting方法，最后释放资源，断开数据库

outputSinglePainting($row)
通过获得的$row，定位url输出照片，标题以及介绍

![3](..\lab10\images\3.png)





Exercise9:



ResultSet  executeQuery（String sql）throws SQLException：专用于查询。

int  executeUpdate（String sql）throws SQLException：执行DDL、DML语句，前者返回0，后者返回受影响行数。

boolean execute（String sql）throws SQLException：可执行任何SQL 语句。如果执行后第一个结果为ResultSet（即执行了查询语句），则返回true；如果执行了DDL、DML语句，则返回false。返回结果为true，则随后可通过该Statement对象的getResultSet()方法获取结果集对象（ResultSet类型），返回结果为false，则可通过Statement对象的getUpdateCount（）方法获得受影响的行数。



PreparedStatement

预编译SQL语句，性能更好，执行更快。

无须“拼接”SQL 语句，编程更简单。

可以防止SQL 注入（如将输入的true当成直接量，导致判断直接通过，从而降低了安全性），安全性更好。

![4](..\lab10\images\4.png)

Exercise10



![5](..\lab10\images\5.png)





![6](..\lab10\images\6.png)