<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Ebiz extends Bra {

    public function __construct()
    {
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/ebiz.css'>";
        $this->script = "<script type='text/javascript' src='/frontend/ebiz.js'></script>";
        $this->content = "<div class='fullscreen'><div id='logo'></div><div id='filtrate'></div><div id='show'></div><div id='pay'></div></div>";
    }
}

$ebiz = new Ebiz();
$ebiz->html();