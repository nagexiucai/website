<?php
// https://github.com/nagexiucai/website

echo "nagexiucai.com";
echo "<br/>";
echo "POST";
echo "<br/>";
foreach($_POST as $k=>$v){
    echo $k."===".$v;
}
echo "GET";
echo "<br/>";
foreach($_GET as $k=>$v){
    echo $k."===".$v;
}
