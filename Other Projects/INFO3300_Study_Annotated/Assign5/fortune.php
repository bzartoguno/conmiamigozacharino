<?php
//  Defines a class: a blueprint used to create objects with related data and methods.
class Fortune{
    //  These are public object properties: the data each object stores.
    public $relationships, $money, $fame, $lucky_number;

    //  The constructor runs automatically when new ClassName(...) creates an object.
    public function __construct($rel, $mon, $fame, $lucky){
        $this->relationships = $rel;
        $this->money = $mon;
        $this->fame = $fame;
        $this->lucky_number = $lucky;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getRelationships(){
        return $this->relationships;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getMoney(){
        return $this->money;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getFame(){
        return $this->fame;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getLuckyNumber(){
        return $this->lucky_number;
    }

    //  Controls what PHP displays when an object is echoed or joined to a string.
    public function __toString(){
        return 'Relationships: ' . $this->getRelationships() . '<br>' .
               'Wealth: ' . $this->getMoney() . '<br>' .
               'Fame: ' . $this->getFame() . '<br>' .
               'Lucky Number: ' . $this->getLuckyNumber();
    }
}