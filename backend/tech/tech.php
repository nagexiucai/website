<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Tech extends Bra {

    public function __construct()
    {
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/tech.css'>";
        $this->script = "<script type='text/javascript' src='/frontend/tech.js'></script>";
        $this->content = "<div class='fullscreen'><div id='logo'></div><div id='tv'></div><div id='product'></div><div id='contact'></div></div>";
    }
}

$tech = new Tech();
$tech->html();