<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Official extends Bra {

    public function __construct()
    {
        parent::__construct();
        $this->link = "<link type='txt/css' src='./frontend/common/fullscreen.css'>";
        $this->script = "<script type='txt/javascript' src='./frontend/common/browser-percept.js'></script>";
        $this->content = "<div class='fullscreen'>$this->BASE<br/>$this->CWD</div>";
    }
}

$officail = new Official();
$officail->html();