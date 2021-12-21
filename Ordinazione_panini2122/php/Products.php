<?php
require 'connDB.php';
<!--3e7a328631aef7801472104dbaf8f90d-->
$sql_query = "select * from panini";
$result = $conn->query($sql_query);
foreach($result as $row){
        echo $row["id"].";".$row["nome"].";".$row["prezzo"]."|";    
    }
?>
