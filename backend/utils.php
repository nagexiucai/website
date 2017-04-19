<?php

function get_domain() {
    return implode(".", array_slice(explode(".", $_SERVER["HTTP_HOST"]), -2));
}