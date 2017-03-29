<?php
// https://github.com/nagexiucai/website

class Bra {
    public $BASE = "/";
    public $CWD = "/";
    const DOCTYPE = "<!DOCTYPE html>";
    const MIIT = "<a id='miit' href='http://www.miitbeian.gov.cn/'>陕ICP备14011708号</a>";
    public $meta="<meta charset='UTF-8'>";
    public $link="";
    public $script="";
    public $title="<title>那个秀才</title>";
    public $content="欢迎来到那个秀才的站点！<br/>";

    public function __construct()
    {
        $this->BASE = $this->CWD = dirname(__FILE__);
    }

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
        echo self::MIIT;
        echo "</body>";
    }
}

//$bra = new Bra();
//$bra->html();