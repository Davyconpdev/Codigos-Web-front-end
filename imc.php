<?php

$p = $_POST['peso'];
$a = $_POST['altura'];

$imc = $p/($a*$a);

echo 'O seu IMC é: ',round($imc, 2);
?>