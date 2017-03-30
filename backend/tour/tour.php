<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Tour extends Bra {

    public function __construct()
    {
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/tour.css'>";
        $this->hscript = "<script type='text/javascript' src='/frontend/tour.js'></script>";
        $this->content = "<div class='fullscreen'><div id='photowall'></div></div>";
    }
}

$tour = new Tour();
$tour->html();