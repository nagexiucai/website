<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Ebiz extends Bra {

    public function __construct()
    {
        $this->title = "那个秀才|弘农王";
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/ebiz.css'>";
        $this->hscript = "<script type='text/javascript' src='/frontend/ebiz.js'></script>";
        $this->content = "<div class='fullscreen'><div id='logo'></div><div id='filtrate'></div><div id='show'></div><div id='pay'></div></div>";
    }
}

$ebiz = new Ebiz();
$ebiz->html();