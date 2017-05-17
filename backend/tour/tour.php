<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Tour extends Bra {

    public function __construct()
    {
        $this->title = "那个秀才|爬华山";
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/tour.css'>";
        $this->hscript = "<script src='/frontend/common/three.js'></script><script src='/frontend/common/orbitcontrols.js'></script>";
        $this->content = "./backend/tour/tour.template";
        $this->bscript = "<script type='text/javascript' src='/frontend/tour.js'></script>";
    }
}

$tour = new Tour();
$tour->html();