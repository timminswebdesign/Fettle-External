<?php
session_start();

date_default_timezone_set('Europe/London');

//Functions


function fnGLformat($gl){

	$sgl = "\n\t\t\t<VALUE>".$gl."</VALUE>";

	$gl = explode('-',$gl);

	$glc = count($gl);

	for($a=0; $a < $glc; $a++){

			
		if(strpos($gl[$a],"?") !== false ){


		}else{

			$sgl = $sgl."\n\t\t\t<GLCOMP glorder=\"".$a."\">".$gl[$a]."</GLCOMP>";

		}

	}

	return $sgl;

}

function compare($x, $y) {
	if ($x[1] == $y[1]) {
		return 0;
	} else if ($x[1] < $y[1]){
		return -1;
	} else {
		return 1;
	}
}



$recArray =  $_SESSION['recArray'];
$mVer = $_SESSION['mVer'];
$mOp  = $_SESSION['mOp'];
$defOwner = $_SESSION['defOwner'];

//Maximo 7

$mPubChan = $_SESSION['mPubChan'];
$mObjStruct = $_SESSION['mObjStruct'];



//Maximo 6

$m6IntObj = $_SESSION['m6IntObj'];
$m6InInt = $_SESSION['m6InInt'];
$m6ExtSys = $_SESSION['m6ExtSys'];

//File Options

$opfn = $_SESSION['opfn'];
$opsn = $_SESSION['opsn'];
$oprnt = $_SESSION['oprnt'];
$recCount = $_SESSION['recCount'];
$fieldCount = $_SESSION['fieldCount'];
$XMLcontent = "";
$enFields;
$enFieldsID =0;
$glFields;
$glFieldsID =0;


for($n=0; $n < $fieldCount; $n++){

	//Change Field Names
	$fname = "fn".$n;

	if ($_SESSION[$fname] !== ""){
			
		$recArray[0][$n] = $_SESSION[$fname];
			
	}


	//Populate Enabled Array
	$fname = "fne".$n;

	if ($_SESSION[$fname] == "on"){
			
		$enFields[$enFieldsID][0] = $n;

		//Populate Owner Table 
		$fname = "owntbl".$n;

		if ($_SESSION[$fname] !== ""){

			$enFields[$enFieldsID][1] = $_SESSION[$fname];

		}else{

			$enFields[$enFieldsID][1] = $defOwner;

		}

		//Populate Data Type
		$fname = "fdt".$n;
		$enFields[$enFieldsID][2] = $_SESSION[$fname];

		$enFieldsID++;
			
	}




	//Populate GL Accounts
	$fname = "fngl".$n;

	if ($_SESSION[$fname] == "on"){
			
		$glFields[$glFieldsID] = $n;

		$glFieldsID++;
			
	}




}

$fieldCount =count($enFields);
$glCount =count($glFields);

//Sort Enables Fields Array

usort($enFields, 'compare');



//Create 6 Script

$XML6header = "<?xml version=\"1.0\"?>\n"
."<".$m6InInt." xmlns=\"http://www.mro.com/mx/integration\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" language=\"EN\">\n"
."<Header operation=\"Notify\" event=\"0\">\n"
."<SenderID type=\"MAXIMO\">".$m6ExtSys."</SenderID>\n"
."<CreationDateTime>2010-12-02T10:46:59+00:00</CreationDateTime>\n"
."<RecipientID>MX</RecipientID>\n"
."<MessageID>12345678901240514</MessageID>\n"
."</Header>\n"
."<Content>\n";

$XML6footer = "</Content>\n"
."</".$m6InInt.">";



//Create 7 Script

$XML7header  ='<?xml version="1.0"?><Sync'.$mObjStruct.' creationDateTime="2010-11-23T11:39:17+00:00" transLanguage="EN" baseLanguage="EN" event="0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.ibm.com/maximo">'.
				'<'.$mObjStruct.'Set>';			
$XML7footer='</'.$mObjStruct.'Set>'.'</Sync'.$mObjStruct.'>';






//Create Content





$rStart = $_POST['start'];
$rEnd= $_POST['end'];
$fileNo= $rStart.'-'.$rEnd;
$loading = true;
$files;



	
	$XMLcontent=" ";


	for($i=$rStart; $i<$rEnd; $i++){


		for($s=0; $s<$glCount; $s++){


			$recArray[$i][$glFields[$s]] = fnGLformat($recArray[$i][$glFields[$s]]);

		}


		if($mVer == '7'){

			$XMLcontent.=	"<".$defOwner." action=\"".$mOp."\">\n";


		}else{

			$XMLcontent.= "<".$m6IntObj.">\n\t";
			$XMLcontent.=	"<".$defOwner." action=\"".$mOp."\">\n";

		}




		for($r=0; $r<$fieldCount; $r++){

				//Convert Dates

				

				if($enFields[$r][2] == "DATETIME" || $enFields[$r][2] == "DATE" ){

					for($d=1;$d<=$recCount;$d++){
						
						if($recArray[$d][$enFields[$r][0]] !==""){
						
						$recArray[$d][$enFields[$r][0]] = date(DATE_W3C, strtotime(str_replace('/','-',$recArray[$d][$enFields[$r][0]])));
						
						}
					}

				}
			//Remove Tag if Null Value
			if($oprnt == "on" && $recArray[$i][$enFields[$r][0]] == ""){



			}else{

				if($defOwner !== $enFields[$r][1]){


					if($enFields[$r][1] !== $enFields[$r-1][1]){

						$XMLcontent.= "\t<".$enFields[$r][1].">\n";

					}



					$XMLcontent.="\t\t<".$recArray[0][$enFields[$r][0]].">".$recArray[$i][$enFields[$r][0]]. "</".$recArray[0][$enFields[$r][0]].">\n";


					if($enFields[$r][1] !== $enFields[$r+1][1]){

						$XMLcontent.= "\t</".$enFields[$r][1].">\n";

					}




				}else{

					//Format Fields
					$XMLcontent.="\t\t<".$recArray[0][$enFields[$r][0]].">".$recArray[$i][$enFields[$r][0]]. "</".$recArray[0][$enFields[$r][0]].">\n";

				}
					
					
			}
			$rStart=$i+1;
		}


		if($mVer == '7'){

			$XMLcontent.= "\t</".$defOwner.">\n";


		}else{

			$XMLcontent.= "\t</".$defOwner.">\n</".$m6IntObj.">\n";

		}




	}

	//Form Output

	if($mVer == '7'){

		$XMLoutput =  $XML7header.$XMLcontent.$XML7footer;

	}else{

		$XMLoutput =  $XML6header.$XMLcontent.$XML6footer;

	}



	//Write Output File

	$DOCUMENT_ROOT =  './XML/'.$opfn.$fileNo.".xml";
	$files[$fileNo] = $opfn.$fileNo.".xml";

	$fp = fopen($DOCUMENT_ROOT, 'w');


	if(!$fp){


		echo "Error Has Occured";

	}

	fwrite($fp, $XMLoutput);


	fclose($fp);



	//Create Download Link PHP

	$PHPoutput=	'<?php '
	.'header(\'Content-disposition: attachment; filename='.$opfn.$fileNo.'.xml\');'
	.'header(\'Content-type: text/xml\');'
	.'readfile(\'.'.$DOCUMENT_ROOT.'\');'
	.'?>';



	$DOCUMENT_ROOT =  './PHP/'.$opfn.$fileNo.".php";
	$fd = fopen($DOCUMENT_ROOT, 'w');

	if(!$fd){
			
			
		echo "Error Has Occured";
			
	}

	fwrite($fd, $PHPoutput);


	fclose($fd);





	echo '<div> <div class="btnDownload">'.$opfn.$fileNo.'.xml<a href="'.'./PHP/'.$opfn.$fileNo.".php".'">'.'</a></div></div>';


?>
