<?php
//  Defines a class: a blueprint used to create objects with related data and methods.
class User{
    //  These are public object properties: the data each object stores.
    public $username, $waiver_filled;

    //  The constructor runs automatically when new ClassName(...) creates an object.
    public function __construct($username, $waiver_filled){
        $this->username = $username;
        $this->waiver_filled = $waiver_filled;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getUsername(){
        return $this->username;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getWaiverFilled(){
        if($this->waiver_filled){
            return "YES";
        } else{
            return "NO";
        }
    }

    //  Setter method: changes one piece of data stored in the object.
    public function setWaiverFilled($value){
        $this->waiver_filled = $value;
    }

    //  Controls what PHP displays when an object is echoed or joined to a string.
    public function __toString(){
        return 'Username: ' . $this->getUsername() .
               ' | Waiver filled out: ' . $this->getWaiverFilled();
    }
}