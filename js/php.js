const page = document.getElementsByClassName("pagina");

const codeExample = `
Caso fecha actual
<?php
$fecha_actual = date("d/m/Y");
echo "Hoy " . $fecha_actual . " es un día hermoso";
?>

Caso ruta actual
<?php
  $ruta_actual = $_SERVER['REQUEST_URI'];
  echo "La ruta actual es: " . $ruta_actual;
?>`;

// Cargar el código en el contenedor
document.querySelector("#code").innerText = codeExample;
