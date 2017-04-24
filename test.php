<?php
// https://github.com/nagexiucai/website

/*
// include "./backend/blog/blog.php";
// include "./backend/ebiz/ebiz.php";
// include "./backend/tech/tech.php";
// include "./backend/tour/tour.php";
// include "./backend/official/official.php";
exit();

class Root {
    public $name = "/";
    function __construct()
    {
        print_r($this->name);
        print_r(self::class);
    }
}
class Home extends Root
{
    function __construct()
    {
        parent::__construct();
        print_r(self::class);
        $this->name = "home";
        print_r($this->name);
    }
}

print_r("FILE IS ".__FILE__."\n");
print_r("NAMESPACE IS ".__NAMESPACE__."\n");
print_r("CLASS IS ".__CLASS__."\n");
print_r("DIR IS ".__DIR__."\n");
print_r("FUNCTION IS ".__FUNCTION__."\n");
print_r("LINE IS ".__LINE__."\n");
print_r("METHOD IS ".__METHOD__."\n");
print_r("TRAIT IS ".__TRAIT__."\n");
$home = new Home();

function test_array_slice(){
    $ssss = "blur.www.sample.com";
    $sss = "www.sample.com";
    $ss = "sample.com";
    $s = "com";

    echo implode(".", array_slice(explode(".", $ssss), -2)) . "<br/>";
    echo implode(".", array_slice(explode(".", $sss), -2)) . "<br/>";
    echo implode(".", array_slice(explode(".", $ss), -2)) . "<br/>";
    echo implode(".", array_slice(explode(".", $s), -2)) . "<br/>";
}
*/
?>
<html>
<head>
<title>Fractal Tree</title>
</head>
<body>
<canvas id="canvas" width="600" height="500"></canvas>
 
<script type="text/javascript">
var elem = document.getElementById('canvas');
var context = elem.getContext('2d');
 
context.fillStyle = '#000';
context.lineWidth = 1;
 
var deg_to_rad = Math.PI / 180.0;
var depth = 9;
 
function drawLine(x1, y1, x2, y2, brightness){
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
}
 
function drawTree(x1, y1, angle, depth){
  if (depth !== 0){
    var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 10.0);
    var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 10.0);
    drawLine(x1, y1, x2, y2, depth);
    drawTree(x2, y2, angle - 20, depth - 1);
    drawTree(x2, y2, angle + 20, depth - 1);
  }
}
 
context.beginPath();
drawTree(300, 500, -90, depth);
context.closePath();
context.stroke();
</script>
 
</body>
</html>