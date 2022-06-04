<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  # BEGIN Setting reCaptcha v3 validation data
  $url = "https://www.google.com/recaptcha/api/siteverify";
  $data = [
    'secret' => "6LccVUMgAAAAAI20ITqNJQGed-m4pYIb9gnb0ee6",
    'response' => $_POST['token'],
    'remoteip' => $_SERVER['REMOTE_ADDR']
  ];

  $options = array(
    'http' => array(
      'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
      'method'  => 'POST',
      'content' => http_build_query($data)
    )
    );

  # Creates and returns stream context with options supplied in options preset
  $context  = stream_context_create($options);
  # file_get_contents() is the preferred way to read the contents of a file into a string
  $response = file_get_contents($url, false, $context);
  # Takes a JSON encoded string and converts it into a PHP variable
  $res = json_decode($response, true);
  # END setting reCaptcha v3 validation data

    // print_r($response);
# Post form OR output alert and bypass post if false. NOTE: score conditional is optional
# since the successful score default is set at >= 0.5 by Google. Some developers want to
# be able to control score result conditions, so I included that in this example.

  if ($res['success'] == true && $res['score'] >= 0.5) {

    # Recipient email
    # Адрес электронной почты получателя
    $mail_to = "cay211076@gmail.com";

    # Sender form data
    $subject = trim($_POST["subject"]);
    $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($subject) OR empty($message)) {
      # Set a 400 (bad request) response code and exit
      http_response_code(400);
      echo '<p class="alert-warning">Пожалуйста, заполните форму и повторите попытку.</p>';
      exit;
    }

    # Mail content
    $content = "Name: $name\n";
    $content .= "Email: $email\n\n";
    $content .= "Phone: $phone\n";
    $content .= "Message:\n$message\n";

    # Email headers
    $headers = "From: $name <$email>";

    # Send the email
    $success = mail($mail_to, $subject, $content, $headers);

    if ($success) {
      # Set a 200 (okay) response code
      http_response_code(200);
      echo '<p class="alert alert-success">Спасибо! Ваше сообщение было успешно отправлено.</p>';
      echo '<script type="text/javascript">',
     'sendTheReverseForm();',
     '</script>';
    } else {
      # Set a 500 (internal server error) response code
      http_response_code(500);
      echo '<p class="alert alert-warning">Что-то пошло не так, ваше сообщение не удалось отправить.</p>';
    }

  } else {

    echo '<div class="alert alert-danger">
        Ошибка! Срок действия токена безопасности истек, или вы бот.
       </div>';
  }

} else {
  # Not a POST request, set a 403 (forbidden) response code
  http_response_code(403);
  echo '<p class="alert-warning">Возникла проблема с вашей отправкой, пожалуйста, попробуйте еще раз.</p>';
} ?>
