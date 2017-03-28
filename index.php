<?php
// https://github.com/nagexiucai/website

class Index {
    public $BLOG = "zhouguoqiang.cn";
    public $EBIZ = "hongnong.wang";
    public $OFFICIAL = "nagexiucai.com";
    public $TECH = "thisstack.com";
    public $TOUR = "pahuashan.com";

    function route() {
        $base = dirname(__FILE__);
        switch(implode(".", array_slice(explode(".", $_SERVER["HTTP_HOST"]), -2))) {
            case $this->BLOG:
                include $base."backend/blog/blog.php";
                break;
            case $this->EBIZ:
                include "backend/ebiz/ebiz.php";
                break;
            case $this->OFFICIAL:
                include "backend/official/official.php";
                break;
            case $this->TECH:
                include "backend/tech/tech.php";
                break;
            case $this->TOUR:
                include "backend/tour/tour.php";
                break;
            default:
                include $base."/html";
        }
    }
}

$index = new Index();
$index->route();