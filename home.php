<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <link rel="stylesheet" href="assets/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="assets/fonts/css/font-awesome.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="assets/css/style.css" media="screen" title="no title">
		<script src="assets/js/canvasjs.min.js"></script>
	  <script src="assets/js/charts.js"></script>
  </head>
	<body onload="createColumnChart()" style="padding-top:50px;">
		<?php
			$con = mysqli_connect('localhost','root','','csv');
			$query = "SELECT name,age,r,i,a,s,e,c FROM tb";
			$result = mysqli_query($con,$query);?>

		<div>
				<div class="col-lg-8">
					<table class="table table-bordered">
						<thead>
							<tr>
							<th>Name</th>
							<th>Age</th>
							<th>R</th>
							<th>I</th>
							<th>A</th>
							<th>S</th>
							<th>E</th>
							<th>C</th>
						</tr>
						</thead>
					<?php
					while($row = mysqli_fetch_assoc($result)){?>
						<tbody>
						<tr>
							<td><?php echo $row['name'];?></td>
							<td><?php echo $row['age'];?></td>
							<td><?php echo $row['r'];?></td>
							<td><?php echo $row['i'];?></td>
							<td><?php echo $row['a'];?></td>
							<td><?php echo $row['s'];?></td>
							<td><?php echo $row['e'];?></td>
							<td><?php echo $row['c'];?></td>
						</tr>
						</tbody>
					<?php }
				?>
					</table>
				</div>
				<div class="col-lg-12">
					<?php $results = array(10,20,30,40,50,60);?>
				  <div id="chartContainer" style="width:80%;"></div>
				</div>
		</div>
			<!-- <br><a href="http://localhost:8080/TrabaWHO" target="_blank">Download</a> -->

	</body>
</html>
<script type="text/javascript" src="assets/js/jquery.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
	<script type="text/javascript">
	  var res=<?php echo json_encode( $results ) ?>;
	</script>
