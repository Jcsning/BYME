<?php  
//login  
if(!isset($_POST['submit'])){  
    exit('非法访问!');  
}  
$username = htmlspecialchars($_POST['username']);  
$password = MD5($_POST['password']);  
  
//connection files  
 $conn = mysql_connect("127.0.0.1","root","") or die("数据库链接错误".mysql_error());  
 mysql_select_db("info_db",$conn) or die("数据库访问错误".mysql_error());  
 mysql_query("set names gb2312");    
//chech username and password  
$check_query = mysql_query("select userid from user_list where username='$username' and password='$password' limit 1");  
if($result = mysql_fetch_array($check_query)){  
    //login sucessfully  
    session_start();  
    $_SESSION['username'] = $username;  
    $_SESSION['userid'] = $result['userid'];  
    echo $username,' 欢迎你！进入 <a href="my.php">用户中心</a><br />';  
    echo '点击此处 <a href="login.php?action=logout">注销</a> 登录！<br />';  
    exit;  
} else {  
    exit('登录失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');  
}  
  
  
  
//注销登录  
if($_GET['action'] == "logout"){  
    unset($_SESSION['userid']);  
    unset($_SESSION['username']);  
    echo '注销登录成功！点击此处 <a href="login.html">登录</a>';  
    exit;  
}  
  
?>  