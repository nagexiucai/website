<?php
// https://github.com/nagexiucai/website

class Bra {
    const DOCTYPE = "<!DOCTYPE html>";
    public $meta="<meta charset='UTF-8'>";
    public $link="";
    public $script="";
    public $title="那个秀才";
    public $content="欢迎来到那个秀才的站点！<br/>";

    function html() {
        echo "<html>";
        $this->head();
        $this->body();
        echo "</html>";
    }
    function head() {
        echo "<head>";
        echo $this->meta;
        echo $this->link;
        echo $this->script;
        echo $this->title;
        echo "</head>";
    }
    function body() {
        echo "<body>";
        echo $this->content;
        echo "</body>";
    }
}

$bra = new Bra();
$bra->html();