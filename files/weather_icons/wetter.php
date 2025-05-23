<style type="text/css">
.t1 {
	width:33%;
	float:left;
	}
.tab1 {
	width:24%;
	float:left;
	text-align:center;
	background-color:#F7F1DE;
	font-size:14px;
	line-height:50px;
	font-weight:bold;
	color:#A88D2E;
	}
.tab2 {
	width:24%;
	float:left;
	text-align:center;
	background-color:#F7F1DE;
	font-size:12px;
	min-height:150px;
	color:#A88D2E;
	}
.datum1 {
	line-height:34px;
	font-size:15px;
	font-weight:bold;
	}
.grad1 {
	line-height:34px;
	font-size:25px;
	font-weight:bold;
	}
.beschreibung1 {
	padding-left:10px;
	padding-right:10px;
	}
</style>

<?php

$thisFileContent = file("http://www.zamg.ac.at/webwet/FVmxGgYObq/wetter_netcontact_walchsee.txt"); 

foreach ($thisFileContent as $zeile) 
{ 
$datei = file("http://www.zamg.ac.at/webwet/FVmxGgYObq/wetter_netcontact_walchsee.txt");
$datei = implode("", $datei);
$datei = explode("\n", $datei);

$datei2 = explode(":", $datei[0]);
$datei3 = explode(":", $datei[1]);
$datei4 = explode(":", $datei[2]);
} 

$timestamp = time();
$heute = date("d.m.Y");
$morgen = date("d.m.Y", strtotime("+1 day"));
$umorgen = date("d.m.Y", strtotime("+2 day"));
?>
<div class="tab1">Tag</div>
<div class="tab1">Vormittag</div>
<div class="tab1">Nachmittag</div>
<div class="tab1">Abend</div>

<div class="tab2"><div class="datum1"><?php echo $heute; ?></div><div class="beschreibung1"><?php echo $datei2[7]; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei2[1].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei2[2].' °C'; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei2[3].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei2[4].' °C'; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei2[5].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei2[6].' °C'; ?></div></div>

<div class="tab2"><div class="datum1"><?php echo $morgen; ?></div><div class="beschreibung1"><?php echo $datei3[7]; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei3[1].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei3[2].' °C'; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei3[3].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei3[4].' °C'; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei3[5].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei3[6].' °C'; ?></div></div>

<div class="tab2"><div class="datum1"><?php echo $umorgen; ?></div><div class="beschreibung1"><?php echo $datei4[7]; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei4[1].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei4[2].' °C'; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei4[3].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei4[4].' °C'; ?></div></div>
<div class="tab2"><div class="icon1"><?php echo '<img src="../zamg/png/'.$datei4[5].'.png" width="100" height="100" />'; ?></div>
<div class="grad1"><?php echo $datei4[6].' °C'; ?></div></div>