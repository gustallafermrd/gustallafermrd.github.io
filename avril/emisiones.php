<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

  $agencia = $_POST['agencia'];
  $representante = $_POST['representante'];
  $tlf = $_POST['telefono'];
  $provincia = $_POST['provincia'];
  $localidad = $_POST['localidad'];
  $cuit = $_POST['cuit'];
  $direccion = $_POST['direccion'];
  $email = $_POST['email'];
  
  $mail = new PHPMailer(true);
  
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
    "Razón Social: " . $agencia . "<br />" . 
    "Nombre y Apellido: " . $representante . "<br />" . 
    "Teléfono: " . $tlf . "<br />" . 
    "Provincia: " . $provincia . "<br />" . 
    "Localidad: " . $localidad . "<br />" . 
    "CUIT: " . $cuit . "<br />" . 
    "Dirección: " . $direccion . "<br />" . 
    "E-mail: " . $email;

  $mail->setFrom($_POST['email']);
  $mail->addAddress('planificacion@avril-assistance.com');

  $mail->isHTML(true);
  $mail->Subject = 'Alta de Agencia';
  $mail->Body = $msg;

  try {
    $mail->send();
    header("Location: /");

  } catch(Exception $e) {
    echo "Su mensaje no pudo ser enviado: {$mail->ErrorInfo}";
  }

?>