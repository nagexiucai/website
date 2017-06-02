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
<div class='topic'>
    <style type='text/css'>
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
    </style>
    <p>长按二维码关注</p>
    <img src='/frontend/common/public-wechat.png' alt='关注二维码'>
    <object data='$this->svg' type='image/svg+xml'></object>
    <div id='amount'></div>
    <p>长按二维码打赏</p>
    <img src='/frontend/common/reward-wechat.png' alt='打赏二维码'>
    <div>
        <textarea id='customer' style='display:none;'>限200字</textarea>
        <button id='order' type='button' name='review' value='false' onclick='review(this);'>留言</button>
        <ul id='recommendations'>
        </ul>
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
</div>";
    }
}

$topic = new Topic();
$topic->html();