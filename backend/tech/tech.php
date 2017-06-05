<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Tech extends Bra {

    public function __construct()
    {
        $this->title = "那个秀才|此栈";
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/tech.css'>";
        $this->bscript = "<script type='text/javascript' src='/frontend/tech.js'></script>";
        $this->content = "./backend/tech/tech.template";
    }
}

$tech = new Tech();
$tech->html();