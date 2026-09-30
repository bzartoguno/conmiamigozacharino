<?php
// TIP: Defines a class: a blueprint used to create objects with related data and methods.
class Career{

    private $dentist_score, $doctor_score, $pharamcist_score, $career;

    // TIP: The constructor runs automatically when new ClassName(...) creates an object.
    public function __construct($dentist_score, $doctor_score, $pharamcist_score, $career){
        $this->dentist_score = $dentist_score;
        $this->doctor_score = $doctor_score;
        $this->pharamcist_score = $pharamcist_score;
        $this->career = $career;
    }

    // TIP: Getter method: returns one piece of data stored in the object.
    public function getDentistScore(){return $this->dentist_score;}
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getDoctorScore(){return $this->doctor_score;}
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getPharmacistScore(){return $this->pharamcist_score;}
    // TIP: Getter method: returns one piece of data stored in the object.
    public function getCareer(){return $this->career;}
    // TIP: Controls what PHP displays when an object is echoed or joined to a string.
    public function __toString(){ 
        return $this->getDentistScore() . $this->getDoctorScore() . $this->getPharmacistScore() . ' = ' . $this->getCareer();
    }
}