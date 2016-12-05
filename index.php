<?php // output headers so that the file is downloaded rather than displayed
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=data.csv');

// create a file pointer connected to the output stream
$output = fopen('php://output', 'w');

// output the column headings
fputcsv($output, array('ID','Name'));

// fetch the data
$con = mysqli_connect('localhost', 'root', '','csv');
$rows = mysqli_query($con,'SELECT * FROM tb');

// loop over the rows, outputting them
while ($row = mysqli_fetch_assoc($rows)) fputcsv($output, $row);
?>