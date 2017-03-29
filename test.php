<?php
// https://github.com/nagexiucai/website

//include "./backend/blog/blog.php";
//include "./backend/ebiz/ebiz.php";
//include "./backend/tech/tech.php";
//include "./backend/tour/tour.php";
include "./backend/official/official.php";
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