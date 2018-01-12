<?php
// https://github.com/nagexiucai/website

class Bra {
    const DOCTYPE = "<!DOCTYPE html>";
    const BEIAN = "<div id='beian'><a href='http://www.miitbeian.gov.cn/' target='_blank'>陕ICP备14011708号</a><a href='http://www.beian.gov.cn/' target='_blank'><span></span>陕公网安备61019002000333号</a></div>";
    public $meta="<meta charset='UTF-8'/><meta name='keywords' content='那个秀才 云计算 大数据 神经网络 机器学习 人工智能 物联网 区块链 Python JavaScript IOT AI 3D GIS OpenStack Docker BlockChain'/><meta name='description' content='那个秀才'/>";
    public $link="";
    public $hscript="";
    public $title="那个秀才";
    public $content="欢迎来到那个秀才的站点！<br/>";
    public $bscript="";

    public $MYSQL = null;

    public function __construct()
    {
        $this->MYSQL = new mysqli("host","username","password","database","port");
        if ($this->MYSQL->connect_error) {
            die("数据库连接失败：".$this->MYSQL->connect_error);
        }
    }

    public function __destruct()
    {
        if ($this->MYSQL) {
            mysqli_close($this->MYSQL);
        }
    }

    function html() {
        //echo self::DOCTYPE; // TODO: why style breaks with it
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
        echo "<script type='text/javascript' src='/frontend/common/utils.js'></script>";
        echo $this->link;
        echo $this->hscript;
        echo "<title>".$this->title."</title>";
        echo "</head>";
    }
    function body() {
        echo "<body>";
        if (is_file($this->content)) {
            include $this->content;
        }
        else {
            echo $this->content;
        }
        echo self::BEIAN;
        echo "</body>";
    }
}

//$bra = new Bra();
//$bra->html();