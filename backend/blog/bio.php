<?php

$email = $_POST["email"];
$uzpw = rand(10000,99999);

if ($email) {
    echo "Bob's bio <font color='green'>unzip</font> code has been sent to <font color='red'>".$email."</font>, please login this email-box and check the password for downloading.";
    echo "<br/>";
    echo "<form action='' style='min-width:380px;'>";
    echo "<input type='button' disabled='disabled' value='Code:'/>";
    echo "<input type='text' name='code'/>";
    echo "<input type='submit' name='intent' value='Download'/>";
    echo "</form>";
}
echo "<hr/>";
echo "Back to <a href='/'>home</a>.";