<?php
// https://github.com/nagexiucai/website

class Bra {
    const DOCTYPE = "<!DOCTYPE html>";
    const MIIT = "<div id='miit'><a href='http://www.miitbeian.gov.cn/' target='_blank'>陕ICP备14011708号-1</a></div>";
    public $meta="<meta charset='UTF-8'>";
    public $link="";
    public $hscript="";
    public $title="<title>那个秀才</title>";
    public $content="欢迎来到那个秀才的站点！<br/>";
    public $bscript="";

    function html() {
        echo "<html>";
        $this->head();
        $this->body();
        echo $this->bscript;
        echo "</html>";
    }
    function head() {
        echo "<head>";
        echo $this->meta;
        echo "<link rel='icon' type='image/x-icon' href='/frontend/common/favicon.ico'>";
        echo "<link rel='stylesheet' type='text/css' href='/frontend/common/fullscreen.css'>";
        echo "<script type='text/javascript' src='/frontend/common/browser-percept.js'></script>";
        echo $this->link;
        echo $this->hscript;
        echo $this->title;
        echo "</head>";
    }
    function body() {
        echo "<body id='body'>";
        if (is_file($this->content)) {
            include $this->content;
        }
        else {
            echo $this->content;
        }
        echo self::MIIT;
        echo "</body>";
    }
}

//$bra = new Bra();
//$bra->html();