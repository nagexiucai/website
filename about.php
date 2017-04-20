<?php
// https://github.com/nagexiucai/website

require "./backend/bra.php";

class About extends Bra {
    public function __construct() {
        $this->link = "<link rel='stylesheet' type='text/css' href='/frontend/about.css'>";
        $this->hscript = "<script type='text/javascript' src='/frontend/common/utils.js'></script>";
        $this->content = $this->contentgen();
        $this->bscript = "<script type='text/javascript' src='/frontend/about.js'></script>";
    }
    protected function contentgen() {
        $contentx = "About";
        $target = $_GET["target"];
        switch ($target) {
            case "official":
                $contentx = "
<div id='lace'><!-- 占位 --></div>
<div id='introduction'>
    <p id='introduction-title'>简介</p>
    <p id='introduction-content'>IT技术初学者之友。</p>
</div>
<div id='milestone'>
    <p id='milestone-title'>大事记</p>
    <p id='milestone-content'>
        <a href='#miit'>2017-03-23，通过ICP备案！</a>
    </p>
</div>
<div id='friend'>
    <p id='friend-title'>友站</p>
    <p id='friend-content'>
        <a href='http://hongnong.wang/'>弘农王</a>
        <a href='http://thisstack.com/'>此栈</a>
        <a href='http://pahuashan.com/'>爬华山</a>
        <a href='http://zhouguoqiang.cn/'>柳东</a>
    </p>
</div>
                ";
                break;
            case "blog":
            break;
            case "tech":
            break;
            case "ebiz":
            break;
            case "tour":
            break;
            default:
        }
        return "<div class='fullscreen'>".$contentx."</div>";
    }
}

$about = new About();
$about->html();