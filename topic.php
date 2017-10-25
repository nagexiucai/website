<?php

include "./backend/bra.php";
include "./backend/parsedown.php";

class Topic extends Bra {
    public function __construct()
    {
        $this->title = $this->title."|".$_GET["title"];
        // TODO: 根据海报后缀类型参数路由

        if (isset($_GET["svg"]))
        {
            $this->svg = "/frontend/material-library/".$_GET["svg"].".svg";
            if (!is_file(".".$this->svg))
            {
                $this->svg = "/frontend/material-library/default.svg";
            }
            $this->poster = "<object data='$this->svg' type='image/svg+xml'></object>";
        }
        elseif (isset($_GET["md"]))
        {
            $this->md = "./frontend/material-library/".$_GET["md"].".md";
            if (!is_file($this->md))
            {
                $this->md = "./frontend/material-library/default.md";
            }
            $parsedown = new Parsedown();
            //读取二进制文件需要将第二个参数设置成'rb'
            $handle = fopen($this->md, "r");
            //通过filesize获得文件大小并将整个文件一下子读到一个字符串中
            $this->poster = "<div class='markdown'>".$parsedown->text(fread($handle, filesize($this->md)))."</div>";
            fclose($handle);
        }
        else
        {
            $this->poster = "<br/><h1>链接有损！</h1><br/>";
        }

        $this->content = "
<div class='fullscreen'>
<div class='logo'>
    <img src='/frontend/material-library/logo-raw-alternative-plus.png'>
</div>
<div class='topic'>
    <style type='text/css'>
        .logo {
            display:block;
        }
        li {
            list-style-type:none;
        }
        textarea {
            width:100%;
            display:block;
        }
        button {
            display:block;
            margin-left:auto;
            margin-right:auto;
            font-size:25px;
            height:40px;
        }
        p {
            font-size:35px;
            margin-top:5px;
            margin-bottom:5px;
        }
        .home {
            text-decoration-line: none;
            background-color: #CDDC39;
            color: #03A9F4;
            font-size: 26px;
            border: 1px solid #2196F3;
            border-radius: 5px;
            line-height: 26px;
            border-bottom: 20px solid black;
        }
        .markdown {
            text-align: left;
            padding: 0 20px;
        }
        .markdown p a {
            text-decoration-line: none;
        }
    </style>
    <p>长按二维码关注</p>
    <img src='/frontend/common/public-wechat.jpg' alt='关注二维码'>
    $this->poster
    <div id='amount'></div>
    <p>长按二维码打赏</p>
    <img src='/frontend/common/reward-wechat.png' alt='打赏二维码'>
    <div>
        <textarea id='customer' style='display:none;'>限200字</textarea>
        <button id='order' type='button' name='review' value='false' onclick='review(this);'>留言</button>
        <ul id='recommendations'>
        </ul>
        <a class='home' href='/topic.html'>返回话题列表</a>
    </div>
    <script type='text/javascript'>
        var customer = document.getElementById('customer');
        var order = document.getElementById('order');
        var amount = document.getElementById('amount');
        amount.innerHTML = '第' + '10000' + '位阅读';
        customer.oninput = function() {
            if (this.value.length > 200) {
                order.innerHTML = '超200字';
                order.setAttribute('disabled', 'disabled');
            }
            else {
                order.innerHTML = '发送';
                order.removeAttribute('disabled');
            }
        }
        function review(me) {
            if (me.value == 'false') {
                me.setAttribute('value', 'true');
                customer.style = 'display:block;';
                me.innerHTML = '发送';
                customer.focus();
                // var a = document.createElement('a');
                // a.setAttribute('href', '#customer');
                // a.click();
                customer.scrollIntoView();
            }
            else {
                me.setAttribute('value', 'false');
                customer.style = 'display:none;';
                me.innerHTML = '留言';
                // upload by ajax
                customer.value = '限200字';
            }
        }
        function interest(evt) {
            if (Math.abs(document.body.scrollHeight - (document.body.scrollTop + document.body.clientHeight)) < 20) {
                window.removeEventListener('scroll', interest);
                // download by ajax then insert into recommendations
            }
        }
        window.addEventListener('scroll', interest);
    </script>
</div>
</div>";
    }
}

$topic = new Topic();
$topic->html();