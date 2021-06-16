<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $telefono = $_POST['telefono'];
  $mensaje = $_POST['mensaje'];
  
  
  $mail = new PHPMailer(true);

  $msg = $_POST['mensaje'];
  
  $mail->SMTPDebug = 0;
  $mail->isSMTP();
  
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  
  $mail->Username = 'info@avril-assistance.com';
  $mail->Password = '/b2D-Gs!kT)*KFQ@';

  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  // Mensaje

  $msg = 
    "Nombre y Apellido: " . $nombre . "<br />" .
    "Telefono:" . $telefono . "<br />" .
    "E-mail: " . $email . "<br />" .
    "Mensaje: " . $mensaje;

  $mail->setFrom($_POST['email']);
  $mail->addAddress('info@avril-assistance.com');
  $mail->addCC('planificacion@avril-assistance.com');

  $mail->isHTML(true);
  $mail->Subject = 'Consulta desde la Web';
  $mail->Body = $msg;

  try {
    $mail->send();
    echo 'Su Mensaje fue enviado, Muchas gracias.';

  } catch(Exception $e) {
    echo "Su mensaje no pudo ser enviado: {$mail->ErrorInfo}";
  }

?>