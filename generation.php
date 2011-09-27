<?php
session_start();

include_once('header.inc');

date_default_timezone_set('Europe/London');

foreach($_POST as $k=>$v) {
	$_SESSION[$k]=$v;
}



?>
<div class="row">

<div class="column grid_12">


<div id="btnBack">Back</div>


</div>

</div>

<div class="row">
<div class="column grid_4">
<fieldset><legend>Generate Files</legend> <?php

$recCount = $_SESSION['recCount'];
$opsn = $_SESSION['opsn'];
$curCount = 1;
$i = 1;

if($_POST['opse'] == "on"){

	while($curCount !== $recCount){

		echo '<div class="btnGenerate" id="gen'.$i.'">';

		echo '<input type="hidden" id="start'.$i.'" value="'.$curCount.'"/>';
		
		echo 'Generate Rows '.$curCount;
		
			$curCount = $curCount + $opsn;

		if($curCount > $recCount){

			$curCount = $recCount;

		}
		
		echo ' to '.$curCount;
			
		echo '<input type="hidden" id="end'.$i.'" value="'.$curCount.'"/>';

		echo "</div>";
		$i++;

	}

}else{

	echo '<div class="btnGenerate" id="gen'.$i.'">';
	echo '<input type="hidden" id="start'.$i.'" value="'.$curCount.'"/>';
	echo '<input type="hidden" id="end'.$i.'" value="'.$recCount.'"/>';
	echo "</div>";
}

?></fieldset>
</div>


<div class="column grid_4">
<fieldset><legend>Download Link</legend>

<div id="dlLinks">

</div>

</fieldset>
</div>


<div class="column grid_4">
<fieldset><legend>Post To Server</legend>
<div class="postField"><label for="postLoc">Server Address:</label> <input
	id="postLoc" type="text" /></div>
<div class="postField"><label for="postLoc">Post Delay (Minutes):</label>
<input id="postDelay" type="text" /></div>
<div class="postField">


<div id="btnPost">Post To Server</div>
</div>
</fieldset>
</div>

</div>




<div title="Post Status" id="msgPostStat"></div>


<?php



include_once('footer.inc');
?>
