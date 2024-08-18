<?php

require '../assets/vendor/PHPMailer/src/Exception.php';
require '../assets/vendor/PHPMailer/src/PHPMailer.php';
require '../assets/vendor/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$obj = new enviarCorreo();

if (isset($_POST['name'], $_POST['telefono'], $_POST['correo'])) {
  $res = $obj->getEnviarCorreo($_POST['name'], $_POST['telefono'], $_POST['correo']);
  die(json_encode($res));
}

class enviarCorreo
{

  private $correo;
  private $nombre;
  private $telefono;


  public function getEnviarCorreo($nombre, $telefono, $email)
  {

    if (preg_match_all("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", $email) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'Nombre invalido.'];
      return $resultado;
    }
    if (preg_match_all("/^[a-zA-ZÀ-ÿ ]{1,30}$/", $nombre) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'Apellido invalido.'];
      return $resultado;
    }
    if (preg_match_all("/^[0-9]{10,30}$/", $telefono) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'Telefono invalida.'];
      return $resultado;
    }

    $this->correo = $email;
    $this->nombre = $nombre;
    $this->telefono = $telefono;

    return $this->enviarCorreo();
  }

  private function enviarCorreo()
  {
    try {

      $mail = new PHPMailer(true);

      $nombreCompleto = $this->nombre;

      $body = '<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; width: 100%; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4; margin: 0; padding: 20px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <img src="https://torresdev00.github.io/Centro-Medico-Wesley/assets/img/iconoWesley_1.png" alt="Logo" style="max-width: 150px; height: auto;">
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <h1 style="font-weight: normal; font-family: "Times New Roman", serif; margin: 0; color: #333;">Atención Médica</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px;">
                            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                            <p style="font-size: 16px; line-height: 1.6; color: #555; text-align: justify; margin-bottom: 20px;">Estimado(a) equipo médico,</p>
                            <p style="font-size: 16px; line-height: 1.6; color: #555; text-align: justify; margin-bottom: 20px;"><strong>' . $nombreCompleto . '</strong> se ha puesto en contacto con nosotros para solicitar atención médica y ha proporcionado la siguiente información para que podamos comunicarnos con él/ella.</p>
                            <h4 style="font-size: 18px; color: #333; margin-bottom: 10px;">Datos del paciente:</h4>
                            <ul style="list-style: none; padding-left: 0; color: #333; margin-bottom: 20px;">
                                <li style="margin-bottom: 10px;"><strong>Nombre y Apellidos:</strong> ' . $nombreCompleto . '</li>
                                <li style="margin-bottom: 10px;"><strong>Teléfono:</strong> ' . $this->telefono . '</li>
                                <li style="margin-bottom: 10px;"><strong>Correo:</strong> ' . $this->correo . '</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <p style="font-size: 14px; color: #999;">Por favor, contacten con el paciente lo antes posible para coordinar la atención solicitada. Asegúrense de proporcionar toda la información y el apoyo necesarios.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
';


      try {
        $mail->isSMTP();
        $mail->SMTPDebug = 0;
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = 'ejtr18@gmail.com';
        $mail->Password = 'biowtapdsonadpcx';

        $mail->setFrom('ejtr18@gmail.com', 'Wesley');
        $mail->addAddress('ejtr18@gmail.com', $nombreCompleto);
        $mail->Subject = 'Atención Médica';
        $mail->Body = $body;
        $mail->AltBody = 'Error: HTML no soportado.';
        $mail->CharSet = 'UTF-8';

        if (!$mail->send()) {
          return false;
        } else {
          return 'Registrado con exito';
        }
      } catch (Exception $e) {
        return "El mensaje no se ha enviado. Mailer Error: {$mail->ErrorInfo}";
      }
    } catch (Exception $e) {
      return $e;
    }
  }
}
