<?php
header("Content-type: text/xml");
 echo '<?xml version="1.0" encoding="UTF-8" ?>' . "\n"; 
 echo "<rows>\n"; 
 
 
include_once('dbconnect.inc');



$attr = $_POST['attributename'];
$obj = $_POST['objectname'];

$query = "select * from maximoattributes where attributename = '".$attr."' and objectname = '".$obj."'";

	
$results = $db->query($query);

$row_cnt = $results->num_rows;


if ($row_cnt <1){
		echo '<row>
			<valid>false</valid>
		</row>';
	
}


while ($row = $results->fetch_assoc()) {
	echo '<row>
			<valid>true</valid>
			<length>'.$row["length"].'</length>
			<maxtype>'.$row["maxtype"].'</maxtype>
			<required>'.$row["required"].'</required>
		 </row>';
}


	





	$results->close();

	



$db->close();


?>

</rows>