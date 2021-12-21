<?php
require 'connDB.php';
<!--bG9yeSBzaSDDqCBwb3Jjb2RpbyBhZmZlemlvbmF0byA6Jyk=-->
$sql_query = "select * from panini";
$result = $conn->query($sql_query);
foreach($result as $row){
        echo $row["id"].";".$row["nome"].";".$row["prezzo"]."|";    
    }
?>
