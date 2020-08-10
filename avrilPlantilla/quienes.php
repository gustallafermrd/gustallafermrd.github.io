<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$msg = '';
if (array_key_exists('userfile', $_FILES)) {

  $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['userfile']['name']));
  if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    // Upload handled successfully
    // Now create a message
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
        
    // Create Message
    $mail = new PHPMailer;
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'gustavo.tallaferro@avril-assistance.com';
    $mail->Password = 'gus.304.84.t';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->setFrom($_POST['name']);
    $mail->addAddress('gustavo.tallaferro@avril-assistance.com');
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo candidato.';
    $mail->Body = $datos;
    // Attach the uploaded file
    if (!$mail->addAttachment($uploadfile, 'My uploaded file')) {
        $msg .= 'Failed to attach file ' . $_FILES['userfile']['name'];
    }
    if (!$mail->send()) {
        $msg .= 'Mailer Error: '. $mail->ErrorInfo;
    } else {
        $msg .= 'Message sent!';
    }
  } else {
      $msg .= 'Failed to move file to ' . $uploadfile;
  }
}
?>
