<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Blog extends Bra {

    public function __construct()
    {
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/blog.css'>";
        $this->script = "<script type='text/javascript' src='/frontend/blog.js'></script>";
        $this->content = "<div class='fullscreen'><div id='mark'></div><div id='list'></div></div>";
    }
}

$blog = new Blog();
$blog->html();