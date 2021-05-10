<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$nombre = $_POST['name'];
$tlf = $_POST['phone'];
$nacimiento = $_POST['nacimiento'];
$direccion = $_POST['direccion'];
$interes = $_POST['interes'];

$datos = 
  "Nombre y Apellido: " . $nombre . "<br />" . 
  "Teléfono: " . $tlf . "<br />" . 
  "Area de Interés: " . $interes . "<br />" . 
  "Fecha de Nacimiento: " . $nacimiento . "<br />" . 
  "Dirección: " . $direccion;

$msg = '';
if (array_key_exists('userfile', $_FILES)) {
  require 'vendor/autoload.php';
  // Create Message
  $mail = new PHPMailer;
  $mail->SMTPDebug = 0;
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'rr-hh@avril-assistance.com';
  $mail->Password = '4;v(=yQwH~gY^qty;
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  $mail->setFrom('rr-hh@avril-assistance.com');
  $mail->addAddress('rr-hh@avril-assistance.com');
  $mail->isHTML(true);
  $mail->Subject = 'Nuevo CV';
  $mail->Body = $datos;
  //Attach multiple files one by one
  for ($ct = 0, $ctMax = count($_FILES['userfile']['tmp_name']); $ct < $ctMax; $ct++) {
    $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['userfile']['name'][$ct]));
    $filename = $_FILES['userfile']['name'][$ct];
    if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
      if (!$mail->addAttachment($uploadfile, $filename)) {
        $msg .= 'Failed to attach file ' . $filename;
      }
    } else {
      $msg .= 'Failed to move file to ' . $uploadfile;
    }
  }
  if (!$mail->send()) {
    $msg .= 'Mailer Error: '. $mail->ErrorInfo;
  } else {
    header("Location: /");
  }
}
?>
