

// Kimmy Bird | Software Developer.
// All codes rights reserved by Kimmy Bird | Software Developer. 


<?
$from = $_POST['email'];
$to = "connect@curioustheme.tk";

$header = $_POST['email'];
$subject = "Official";

$message = "Name = ".$_POST['name'] ."\nMessage = ".$_POST['message'];
mail($to,$subject,$header,$message);
?>