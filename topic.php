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
        $this->content = "
<div class='fullscreen'>
<div class='logo-in-wechat'>
    <img src='/frontend/common/logo.jpg'>
</div>
<div class='topic'>
    <style type='text/css'>
        .logo-in-wechat {
            display:none;
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
    </style>
    <p>长按二维码关注</p>
    <img src='/frontend/common/public-wechat.jpg' alt='关注二维码'>
    <object data='$this->svg' type='image/svg+xml'></object>
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