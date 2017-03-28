<?php
// https://github.com/nagexiucai/website

$ssss = "blur.www.sample.com";
$sss = "www.sample.com";
$ss = "sample.com";
$s = "com";

echo implode(".", array_slice(explode(".",$ssss), -2))."<br/>";
echo implode(".", array_slice(explode(".",$sss), -2))."<br/>";
echo implode(".", array_slice(explode(".",$ss), -2))."<br/>";
echo implode(".", array_slice(explode(".",$s), -2))."<br/>";