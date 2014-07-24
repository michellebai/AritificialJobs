<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
putenv('LANG=en_US.UTF-8');

$str = $_GET["str"];
// echo $str."</br>";
$input = "java -jar LingPipeTest.jar ".$str;
// echo $input;
$output = exec($input);
echo json_encode(explode(" ", $output));
?>