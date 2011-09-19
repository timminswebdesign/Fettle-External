<?php

@$db = new mysqli('localhost','timmins_maximo','maxadmin','timmins_maximo');

if (mysqli_connect_errno()){
	
	echo "Database Connection Error has Occured";
	
	exit;
	
}


?>