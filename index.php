<?php
// https://github.com/nagexiucai/website
echo "<!DOCTYPE html>";
echo "<html>";
echo "<head>";
echo "<meta charset='UTF-8'>";
echo "<title>";
echo "那个秀才";
echo "</title>";
echo "</head>";
echo "<body>";
const BLOG = "zhouguoqiang.cn";
const EBIZ = "hongnong.wang";
const OFFICIAL = "nagexiucai.com";
const TECH = "thisstack.com";
const TOUR = "pahuashan.com";

$SITE = $_SERVER["HTTP_HOST"];
echo $SITE."<br/>";

switch($SITE) {
    case BLOG:
        echo BLOG."<br/>";
        break;
    case EBIZ:
        echo EBIZ."<br/>";
        break;
    case OFFICIAL:
        echo OFFICIAL."<br/>";
        beak;
    case TECH:
        echo TECH."<br/>";
        break;
    case TOUR:
        echo TOUR."<br/>";
        break;
    default:
        echo "unknown domain:(<br/>";
}

echo '<img src="frontend/common/test.png"><br/>';
// echo function_exists("ftp_connect");
// echo function_exists("gzopen");
// echo function_exists("getimagesize");
// phpinfo();
// http://php.net/manual/zh/resource.php
echo "</body>";
echo "</html>";