<?php
session_start();
$recArray = $_SESSION['recArray'];
$fieldCount = $_SESSION['fieldCount'];
$recCount = $_SESSION['recCount'];

include_once('header.inc');
?>



<div class="row">
<div class="column grid_12">


<fieldset><legend>Data</legend>


<div class='tblPreview'>

<table>


	<tr class='trTitle'>



	<?php

	for($t=0; $t<$fieldCount; $t++){

		echo "<td>".$recArray[0][$t]."</td>";

	}

	echo "</tr>";

	//Preview Data Table Body

	for($i=1; $i<$recCount; $i++){

		echo "<tr class=\"dr\" id=\"dr".$i."\">";

		for($r=0; $r<$fieldCount; $r++){

			echo "<td class=\"dd".$r."\">".$recArray[$i][$r]."</td>";

		}

		echo "</tr>";

	}

	?>

</table>

</div>
</fieldset>
</div>
</div>



<div class="row valError">

<div class="column grid_12">
<fieldset><legend>Validation Errors:</legend>
<div id="txtError"></div>
</fieldset>
</div>

</div>


<form id="optionForm" action="generateXML.php" method="post"
	accept-charset="utf-8">
<div class="row">
<div class="column grid_12">


<fieldset><legend>Mappings</legend>




<table class='tblMap'>

	<tr class="trTitle">
		<td>Valid</td>
		<td>Owner Table</td>
		<td>Original Name</td>
		<td>New Name</td>
		<td>Data Type</td>
		<td>Length</td>
		<td>Required</td>
		<td>Enabled?</td>
		<td>Is GL?</td>
	</tr>

	<?php
	for($t=0; $t<$fieldCount; $t++){

		echo "<tr class='fieldRow'>";
		echo "<td><div class=\"valImg\" id=\"fnvi".$t."\"> </div></td>";
		echo "<td><input class='owntbl' name=\"owntbl".$t."\" type=\"text\"/> </td>";
		echo "<td><span class='fno' name=\"fno".$t."\" id=\"".$recArray[0][$t]."\">".$recArray[0][$t]."</span><input name=\"fnv".$t."\" type=\"hidden\" />"."</td>";

		echo "<td><input class='fn' name=\"fn".$t."\" type=\"text\" /> </td>";
		echo "<td><input class='fdt' name=\"fdt".$t."\" readonly=\"readonly\" type=\"readonly\"/> </td>";
		echo "<td><input class='flen' name=\"flen".$t."\" readonly=\"readonly\" type=\"readonly\"/> </td>";
		echo "<td><input class='fr' name=\"fr".$t."\"  type=\"checkbox\" DISABLED /> </td>";
		echo "<td><input class='fne' name=\"fne".$t."\"  type=\"checkbox\" checked/> </td>";
		echo "<td><input class='fngl' name=\"fngl".$t."\"  type=\"checkbox\" /> </td>";
		echo "</tr>";

	}

	?>

</table>

<div style="text-align: right; margin-top: 5px;">

<div id="btnEa">Enable All</div>
<div id="btnDa">Disable All</div>
<div id="btnIv">Invert</div>

</div>


</fieldset>
</div>
</div>



<div class="row">

<div class="column grid_12">
<div id="vMax"><input id="mVer6" type="radio" name="mVer" value="6"
	checked /> <label for="mVer6">Maximo 6</label> <input id="mVer7"
	type="radio" name="mVer" value="7" /> <label for="mVer7">Maximo 7</label>
</div>
</div>

</div>
<div class="row">



<div class="column grid_6">





<fieldset><legend>Mappings</legend> <select id="opPrevMap">

	<option value="0">Select...</option>


	<?php

	include_once('dbconnect.inc');

	$query = "select templateid, name from mappings group by templateid order by templateid";

	$results = $db->query($query);

	while ($row = $results->fetch_assoc()) {
		echo '<option value="'.$row["templateid"].'">'.$row["name"].'</option>';
	}

	$results->close();

	$db->close();


	?>

</select>
<div id="btnLm">Load Mappings</div>
<div id="btnSm">Save Changes</div>
<div id="btnSma">Save As..</div>
</fieldset>




<div class="row">
<div class="column grid_6">
<fieldset><legend>Validation</legend> <label for="defOwner">Default
Owner Table:</label> <input name="defOwner" id="defOwner"
	class='owntbl required' type="text" />

<div id="btnVal">Validate</div>
<div id="btnValData">Validate Data</div>
</fieldset>
</div>
</div>


<div class="row">
<div class="column grid_6" style="min-height:180px";>

<div id='m6'>
<fieldset><legend>Maximo 6 Options</legend>

<ul class="proplist">
	<li><label for="m6IntObj" class="pll">Integration Object:</label><input
		id="m6IntObj" name="m6IntObj" type="text" class="required" /></li>

	<li><label for="m6InInt" class="pll">Inbound Interface:</label><input
		id="m6InInt" name="m6InInt" type="text" class="required" /></li>

	<li><label for="m6ExtSys" class="pll">External System:</label><input
		id="m6ExtSys" name="m6ExtSys" type="text" class="required" /></li>
</ul>
</fieldset>
</div>



<div id='m7'>
<fieldset><legend>Maximo 7 Options</legend>
<ul class="proplist">
	<li><label for="mObjStruct" class="pll">Object Structure:</label><input
		id="mObjStruct" name="mObjStruct" type="text" /></li>

	<li><label for="mPubChan" class="pll">Enterprise Service:</label><input
		id="mPubChan" name="mPubChan" type="text" /></li>
</ul>
</fieldset>
</div>
</div>
</div>
</div>


<div class="column grid_6">










<fieldset><legend>File Options</legend>

<ul class="proplist">
	<li><label class="pll" for="opfn">File Name Prefix:</label><input
		id="opfn" name="opfn" type="text" class="required" /></li>
	<li><label class="pll">Split File?</label><label for="opse">Disabled</label><input
		class="ccb" id="opse" name="opse" type="checkbox" /></li>
	<li><label class="pll" for="opsn">Split Amount:</label><input id="opsn"
		name="opsn" type="text" /></li>
	<li><label class="pll">Remove Null Tags?</label><label for="oprnt">Disabled</label><input
		class="ccb" id="oprnt" name="oprnt" type="checkbox" /></li>
</ul>

<div id="fOp"><input id="fOpA" type="radio" name="mOp" value="Add" /> <label
	for="fOpA">Add</label> <input id="fOpAC" type="radio" name="mOp"
	value="AddChange" checked /> <label for="fOpAC">Add Change</label> <input
	id="fOpC" type="radio" name="mOp" value="Change" /> <label for="fOpC">Change
</label> <input id="fOpD" type="radio" name="mOp" value="Delete" /> <label
	for="fOpD">Delete </label></div>
</fieldset>
</div>

</div>

<div class="row">
<div class="column grid_12 nav">
<div id="btnContinue" class="submit">Continue</div>
<div id="btnBack">Back</div>


</div>
</div>
</form>


<div title="Save Mapping as..." id="msgSaveMapping"><label
	for="templatename">Template Name</label> <input type="text"
	id="templatename" /></div>


	<?php

	include_once('footer.inc');

	?>