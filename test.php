<?php
// https://github.com/nagexiucai/website

function split_domain_r($s)
{
    $sarr = explode(".", $s);
    if (count($sarr) >= 2)
    {
        return $sarr[-2].".".$sarr[-1];
    }
    else
    {
        return $s;
    }
}

$ssss = "blur.www.sample.com";
$sss = "www.sample.com";
//$ss = "sample.com";
//$s = "com";

echo split_domain_r($ssss);
echo split_domain_r($sss);
//echo split_domain_r($ss);
//echo split_domain_r($s);