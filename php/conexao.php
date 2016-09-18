<?php

	$hostName = 'mysql.hostinger.com.br';
	$userName = 'u863792677_admin';
	$passName = 'asd123asd';
	$dataBase = 'u863792677_leads';

	/*$hostName = 'localhost';
	$userName = 'root';
	$passName = '';
	$dataBase = 'leads';*/

	$con = new mysqli($hostName, $userName, $passName, $dataBase);

	if ($con->connect_error) {
	    die("Connection failed: " . $con->connect_error);
	} 

?>