<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<?php
			$con = mysqli_connect('localhost','root','','csv');
			$query = "SELECT name,age,r,i,a,s,e,c FROM tb";
			$result = mysqli_query($con,$query);?>

			<table border="1">
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
			<?php
			while($row = mysqli_fetch_assoc($result)){?>
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
			<?php }
		?>
			</table>
			<br><a href="http://localhost:8080/TrabaWHO" target="_blank">Download</a>
	</body>
</html>
