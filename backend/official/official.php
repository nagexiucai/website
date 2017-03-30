<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Official extends Bra {

    public function __construct()
    {
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/official.css'>";
        $this->hscript = "<script src='https://unpkg.com/vue/dist/vue.js'></script>";
        $this->content = "<div class='fullscreen'><div id='logo'></div><div id='menu'></div><div id='show'>{{message}}</div><div id='friend'></div></div>";
        $this->bscript = "<script type='text/javascript' src='/frontend/official.js'></script>";
    }
}

$officail = new Official();
$officail->html();