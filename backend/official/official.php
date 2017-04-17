<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Official extends Bra {

    public function __construct()
    {
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/official.css'>";
        $this->hscript = "<script src='https://unpkg.com/vue/dist/vue.js'></script>";
        $this->content = "./backend/official/official.template";
        $this->bscript = "<script type='text/javascript' src='/frontend/official.js'></script>";
    }
}

$officail = new Official();
$officail->html();