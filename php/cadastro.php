<?php

	setlocale(LC_ALL, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
	date_default_timezone_set('America/Sao_Paulo');

	try {

		include_once('conexao.php');
		include_once('funcoes.php');

		$email = $_POST['email'];
		$nome  = $_POST['nome'];
		$sexo  = $_POST['sexo'];
		$idade = $_POST['idade'];
		$data  = date('Y-m-d H:i:s');
		$ip    = get_client_ip();

		$stmt = $con->prepare("INSERT INTO data(email, nome, sexo, idade, data, ip) VALUES(?, ?, ?, ?, ?, ?) ");
		$stmt->bind_param("sssiss", $email, $nome, $sexo, $idade, $data, $ip);
		$stmt->execute();

		$stmt->close();

		$retorno = array('retorno' => 1);
		header('Content-type: application/json');
		echo json_encode($retorno);

	}
	catch(PDOException $e){
	    echo "Error: " . $e->getMessage();
	}

	$con->close();

?>