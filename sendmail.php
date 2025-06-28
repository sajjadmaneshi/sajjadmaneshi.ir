<?php
// Get form data
$name = $_POST['fullName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Set recipient email
$to = 'mainaccount@sajjadmaneshi.com';

// Set email headers
$headers = "From: $name <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";

// Set email subject and body
$subject = $subject;
$body = "<p><strong>Name:</strong> $name</p>";
$body .= "<p><strong>Email:</strong> $email</p>";
$body .= "<p><strong>Message:</strong> $message</p>";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
  ?>
    <!DOCTYPE html>
    <html>
    <head>
      <title>Email Sent</title>
      <style>
        body {
          background-color: #333;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          position:relative;
        }

        .message {
          text-align: center;
        }
        .back-to-home{
            position:absolute;
            right:10%;
            top:10%;
            color:white!important;
            text-decoration:none!important;
        }
        
      </style>
    </head>
    <body>
      <div class="message">
        <h1>Your email has been successfully sent to me</h1>
        <p>I will contact you soon if email sent successfully.</p>
      </div>
      <a href='/' class="back-to-home">back to home</a>
    </body>
    </html>
    <?php
} else {
    // Error in sending the email
    echo 'Error in sending the email.';
}

    

?>
