<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['subject'])   ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
   {
    echo "No arguments Provided!";
    return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'info@ajayconstruction.in'; // Yahan apna asli email address likhein
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n".
              "Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nSubject: $subject\n\nMessage:\n$message";
$headers = "From: noreply@ajayconstruction.in\n"; // Yeh aapke domain ka email hona chahiye
$headers .= "Reply-To: $email_address";   

if(mail($to, $email_subject, $email_body, $headers)) {
    return true;
} else {
    return false;
}
?>