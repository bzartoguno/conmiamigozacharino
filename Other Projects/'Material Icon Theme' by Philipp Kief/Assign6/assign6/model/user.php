<?php
class User{
    public $username, $waiver_filled;
    public function __construct($username, $waiver_filled){
        $this->username = $username;
        $this->waiver_filled = $waiver_filled;
    }
    public function getUsername(){return $this->username;  }
    public function setWaiverFilled($value){$this->waiver_filled = $value;}
    public function getWaiverFilled(){
        if ($this->waiver_filled){return "YES";}else{return "NO";}
    }
    public function __toString(){
        return 'Username: ' . $this->getUsername() . ' | Waiver filled out: ' . $this->getWaiverFilled(); 
    } 
}