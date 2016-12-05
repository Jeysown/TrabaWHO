<?php

$con = mysqli_connect("localhost","root","","csv");
       if (mysqli_connect_errno($con))
       {
         echo '{"query_result":"ERROR"}';
        }
       $nameInput = $_REQUEST['name'];

        $result = mysqli_query($con,"INSERT INTO tb(name) VALUES('".$nameInput."')");  

    mysqli_close($con);

?>