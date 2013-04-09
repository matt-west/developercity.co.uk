<?php

  if ($_POST['name'] != "" &&
      $_POST['email'] != "" &&
      $_POST['phone'] != "" &&
      $_POST['message'] != "") {

    $to = "matt.west@developercity.co.uk";
    $subject = "Website Contact";
    $name_field = $_POST['name'];
    $email_field = $_POST['email'];
    $phone_field = $_POST['phone'];
    $message_field = $_POST['message'];
    $headers = "From: $email_field\n";

    $message = "From: $name_field\n Email: $email_field\n Phone: $phone_field\n Message:\n $message_field\n";

    echo "true";
    mail($to, $subject, $message, $headers);
  } else {
    echo "false";
  }

?>