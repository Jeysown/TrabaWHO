<?php

$con = mysqli_connect("localhost","root","","csv");
       if (mysqli_connect_errno($con))
       {
         echo '{"query_result":"ERROR"}';
       }
       else{

        $running = mysqli_query($con, 'SELECT * FROM tb');

        $output = array();
          if(mysqli_num_rows($running) > 0){
            while($row = mysqli_fetch_array($running)){
              array_push($output, array(
                'questions'=>$row[2]
              ));
            }
            echo json_encode($output);
          }
       }


        /* $nameInput = $_REQUEST['name'];

        $result = mysqli_query($con,"INSERT INTO tb(name) VALUES('".$nameInput."')");
        */
    mysqli_close($con);

?>
