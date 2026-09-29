<?php
class Memory{
    private $question1, $question2, $outcome;
    public function __construct($question1, $question2, $outcome){
        $this->question1 = $question1;
        $this->question2 = $question2;
        $this->outcome = $outcome;
    }
    public function getQuestion1(){return $this->question1;}
    public function getQuestion2(){return $this->question2;}
    public function getOutcome(){return $this->outcome;}
    public function __toString(){
        return 'Question1: ' . $this->getQuestion1() . '<br>Question2: ' . $this->getQuestion2() . '<br>Outcome: ' . $this->getOutcome();    
    }
}