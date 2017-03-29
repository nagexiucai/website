<?php
// https://github.com/nagexiucai/website

class Index {
    public static $BLOG = "zhouguoqiang.cn";
    public static $EBIZ = "hongnong.wang";
    public static $OFFICIAL = "nagexiucai.com";
    public static $TECH = "thisstack.com";
    public static $TOUR = "pahuashan.com";

    function route() {
        switch(implode(".", array_slice(explode(".", $_SERVER["HTTP_HOST"]), -2))) {
            case self::$BLOG:
                include "./backend/blog/blog.php";
                break;
            case self::$EBIZ:
                include "./backend/ebiz/ebiz.php";
                break;
            case self::$OFFICIAL:
                include "./backend/official/official.php";
                break;
            case self::$TECH:
                include "./backend/tech/tech.php";
                break;
            case self::$TOUR:
                include "./backend/tour/tour.php";
                break;
            default:
                include "./index.html";
        }
    }
}

$index = new Index();
$index->route();