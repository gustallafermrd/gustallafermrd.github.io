<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

  $nombre = $_POST['name'];
  $voucher = $_POST['voucher'];
  $tlf = $_POST['tlf'];
  $monto = $_POST['monto'];
  $mensaje = $_POST['obs'];
  $email = $_POST['email'];

  $datos = 
    "Nombre y Apellido: " . $nombre . "<br />" . 
    "Numero de Voucher: " . $voucher . "<br />" . 
    "Teléfono: " . $tlf . "<br />" . 
    "Monto: " . $monto . "<br />" . 
    "E-mail: " . $email . "<br />" . 
    "Observaciones: " . $mensaje;
  
  $msg = '';
  if (array_key_exists('userfile', $_FILES)) {
    require 'vendor/autoload.php';
    // Create a message
    $mail = new PHPMailer;
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@avril-assistance.com';
    $mail->Password = '/b2D-Gs!kT)*KFQ@';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->setFrom($_POST['email']);
    $mail->addAddress('reintegros@avril-assistance.com');
    $mail->isHTML(true);
    $mail->Subject = 'Datos para reintegro desde la Web';
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