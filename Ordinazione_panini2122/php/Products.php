<?php
require 'connDB.php';
$sql_query = "select * from panini";
$result = $conn->query($sql_query);
foreach($result as $row){
        echo $row["id"].";".$row["nome"].";".$row["prezzo"]."|";    
    }
?>
