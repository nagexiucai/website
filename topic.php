<?php

include "./backend/bra.php";

class Topic extends Bra {
    public function __construct()
    {
        $this->title = $this->title."|".$_GET["title"];
        $this->svg = "/frontend/material-library/".$_GET["svg"].".svg";
        if (!is_file(".".$this->svg))
        {
            $this->svg = "/frontend/material-library/default.svg";
        }
        $this->content = "<div class='topic'><object data='$this->svg' type='image/svg+xml'></object><p>长按二维码打赏</p><img src='/frontend/common/reward-wechat.png' alt='打赏二维码'></div>";
    }
}

$topic = new Topic();
$topic->html();