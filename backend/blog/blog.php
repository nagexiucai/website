<?php
// https://github.com/nagexiucai/website

include "./backend/bra.php";

class Blog extends Bra {

    public function __construct()
    {
        $this->title = "那个秀才|柳东";
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/blog.css'>";
        $this->hscript = "<script type='text/javascript' src='/frontend/blog.js'></script>";
        $this->content = "./backend/blog/blog.template";
    }
}

$blog = new Blog();
$blog->html();