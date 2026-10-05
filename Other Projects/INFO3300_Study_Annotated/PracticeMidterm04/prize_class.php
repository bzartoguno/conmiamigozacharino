<?php
// NEW: This file is ONLY the blueprint for a Prize object.
// It should not contain HTML, session_start(), redirects, or random prize logic.
class Prize{
    // You already had these three properties.
    public $user_name;
    public $prize_type;
    public $prize;
    // NEW: The constructor runs automatically when we say:
    // new Prize($name, $prize_type, $ActualPrize)
    
    // WHY: It gives the new object all of its starting information.
    public function __construct($user_name, $prize_type, $prize){
        // $this means "this particular Prize object".
        $this->user_name = $user_name;
        $this->prize_type = $prize_type;
        $this->prize = $prize;
    }
    // NEW: Getter methods return information stored inside the object.
    public function getUserName(){return $this->user_name;}
    public function getPrizeType(){ return $this->prize_type;}
    public function getPrize(){return $this->prize;}
    // NEW: __toString() controls what appears if we echo the whole object.

    // Zach won Cotton Candy in the Food category.
    public function __toString(){
        return $this->getUserName() . ' won ' .
               $this->getPrize() . ' in the ' .
               $this->getPrizeType() . ' category.';
               }
}
?>
