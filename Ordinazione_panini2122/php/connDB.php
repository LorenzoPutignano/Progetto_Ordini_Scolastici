<?php
$servername = "localhost";
$username_sql = "**";
$password_sql = "***";
$db_name="menu";
try {
$conn = new PDO ("mysql:host=".$servername.";dbname=".$db_name,
$username_sql, $password_sql);
} catch (PDOException $exc) {
echo "[CONN_ERR] error msg: " . $exc->getMessage();
}
?
