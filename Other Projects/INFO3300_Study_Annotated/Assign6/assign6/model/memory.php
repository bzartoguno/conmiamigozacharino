<?php
// TIP: Defines a class: a blueprint used to create objects with related data and methods.
class Memory{
    private $question1, $question2, $outcome;
    // TIP: The constructor runs automatically when new ClassName(...) creates an object.
    public function __construct($question1, $question2, $outcome){
        $this->question1 = $question1;
        $this->question2 = $question2;
        $this->outcome = $outcome;
    }
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getQuestion1(){return $this->question1;}
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getQuestion2(){return $this->question2;}
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getOutcome(){return $this->outcome;}
    // TIP: Controls what PHP displays when an object is echoed or joined to a string.
    public function __toString(){
        return 'Question1: ' . $this->getQuestion1() . '<br>Question2: ' . $this->getQuestion2() . '<br>Outcome: ' . $this->getOutcome();    
    }
}