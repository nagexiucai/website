<?php

$domain = $_GET["target"];

$RETURN = "
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset='UTF-8'>
        <title>那个秀才|华丽转身</title>
        <link rel='icon' type='image/x-icon' href='/frontend/common/favicon.ico'>
        <style rel='stylesheet' type='text/css'>
            body {
                font-size: xxlarge;
            }
        </style>
        <script type='text/javascript'>
            setTimeout(function () {
                window.location.href = $domain;
            }, 3000);
        </script>
    </head>
    <body>
        稍后跳往精彩页面……
    </body>
</html>
";

echo $RETURN;