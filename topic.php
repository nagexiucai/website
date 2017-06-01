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
    <object data='$this->svg' type='image/svg+xml'></object>
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
    <div>第<span id='amount'></span>位阅读</div>
    <p>长按二维码打赏</p>
    <img src='/frontend/common/reward-wechat.png' alt='打赏二维码'>
    <div>
        <textarea id='customer' style='display:none;'>限200字</textarea>
        <button id='order' type='button' name='review' value='false' onclick='review(this);'>留言</button>
        <div id='tip'></div>
        <ul id='recommendations'>
        </ul>
    </div>
    <script type='text/javascript'>
        var customer = document.getElementById('customer');
        var order = document.getElementById('order');
        var amount = document.getElementById('amount');
        amount.innerHTML = '10000';
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
                // customer.innerHTML // upload by ajax
                customer.value = '限200字';
            }
        }
        // TODO: scroll to bottom of page then update
    </script>
</div>";
    }
}

$topic = new Topic();
$topic->html();