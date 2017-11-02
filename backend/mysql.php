<?php
// https://github.com/nagexiucai/website

class MySQL {
    public $MYSQL = null;
    public $result = null;
    public function __construct()
    {
        $this->MYSQL = mysqli();
    }
    public function __destruct()
    {
    }
    public function __debugInfo()
    {
    }
    public function query($sql) {
        $this->result = $this->MYSQL->query($sql);
    }
    public function achieve($fields) {
        if ($this->result->num_rows > 0) {
            while ($row = $this->result->fetch_assoc()) {
                echo count($fields);
                echo $row;
            }
        }
        else {
            echo "nothing";
        }
    }
}

$mysql = new MySQL();