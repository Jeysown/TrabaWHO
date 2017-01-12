<?php

$con = mysqli_connect("localhost","root","","csv");

       if (mysqli_connect_errno($con))
       {
         echo '{"query_result":"ERROR"}';
       }
       else{


              $name = $_GET['name'];
              $city = $_GET['city'];
              $school = $_GET['school'];
              $course = $_GET['course'];
              $fresult = $_GET['fresult'];

              $r = $_GET['r'];
              $i = $_GET['i'];
              $a = $_GET['a'];
              $s = $_GET['s'];
              $e = $_GET['e'];
              $c = $_GET['c'];
              $yeses = explode(',',$_GET['yeses']);



              $result = mysqli_query($con,"INSERT INTO tb(name,city,school,course,r,i,a,s,e,c,result) VALUES('".$name."','".$city."','".$school."','".$course."','.$r.','.$i.','.$a.','.$s.','.$e.','.$c.','".$fresult."')");
              $list = array();
              $resus = mysqli_query($con,"SELECT question FROM result");
              while($row = mysqli_fetch_assoc($resus)){
                array_push($list,$row['question']);
            }
            echo count($list);

              for($i = 0; $i<count($list);$i++){
                    if(in_array($list[$i],$yeses)){
                      $selectSpecific = mysqli_query($con,"SELECT * FROM result WHERE question = '".$list[$i]."'");
                      $row = mysqli_fetch_assoc($selectSpecific);
                      $oldValue = $row['yes'];
                      $updateVAlue = mysqli_query($con,"UPDATE result SET yes = '".($oldValue+1)."' WHERE question = '".$list[$i]."'");

                    }
                    else{
                      $selectSpecific = mysqli_query($con,"SELECT * FROM result WHERE question = '".$list[$i]."'");
                      $row = mysqli_fetch_assoc($selectSpecific);
                      $oldValue = $row['no'];
                      $updateVAlue = mysqli_query($con,"UPDATE result SET no = '".($oldValue+1)."' WHERE question = '".$list[$i]."'");
                    }
              }

        mysqli_close($con);
}
?>
