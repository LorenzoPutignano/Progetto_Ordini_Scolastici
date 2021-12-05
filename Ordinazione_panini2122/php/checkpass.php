<?php
require 'connDB.php';
$pass = $_POST["passwd"];

$pass_md5 = md5($pass);

//$query = "select * from classi";
$sql_query = "select password,classe from classi where password='".$pass_md5."';";
$result = $conn->query($sql_query);
if($result->rowCount() > 0) {
$row = $result->fetch();
echo $row["classe"];
}
else {
echo "err";
}
?>
