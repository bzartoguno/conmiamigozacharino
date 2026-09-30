<?php
// TIP: Defines a class: a blueprint used to create objects with related data and methods.
class Fortune{
    private $relationships, $money, $fame, $lucky_number;
    // TIP: The constructor runs automatically when new ClassName(...) creates an object.
    public function __construct($relationships, $money, $fame, $lucky_number){
        $this->relationships = $relationships;
        $this->money = $money;
        $this->fame = $fame;
        $this->lucky_number = $lucky_number;
    }
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getRelationships() {return $this->relationships;}
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getMoney(){return $this->money;}
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getFame(){return $this->fame;}
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getLuckyNumber(){return $this->lucky_number;}

    // TIP: Controls what PHP displays when an object is echoed or joined to a string.
    public function __toString(){
        return 'Relationships: ' . $this->getRelationships() . '<br>Wealth: ' . $this->getMoney() . '<br>Fame: ' . $this->getFame() . '<br>Lucky Number: ' . $this->getLuckyNumber();
    }
}