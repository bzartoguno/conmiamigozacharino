<?php
//  Defines a class: a blueprint used to create objects with related data and methods.
class Career{
    //  These are public object properties: the data each object stores.
    public $dentist_score, $doctor_score, $pharmacist_score, $career;
    //  The constructor runs automatically when new ClassName(...) creates an object.
    public function __construct($dentist_score, $doctor_score, $phar_score, $career){
        $this->dentist_score = $dentist_score;
        $this->doctor_score = $doctor_score;
        $this->pharmacist_score = $phar_score;
        $this->career = $career;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getDentistScore(){
        return $this->dentist_score;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getDoctorScore(){
        return $this->doctor_score;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getPharmacistScore(){
        return $this->pharmacist_score;
    }

    //  Getter method: returns one piece of data stored in the object.
    public function getCareer(){
        return $this->career;
    }

    //  Controls what PHP displays when an object is echoed or joined to a string.
    public function __toString(){
        return $this->getDentistScore() .
               $this->getDoctorScore() .
               $this->getPharmacistScore() . ' = ' . $this->getCareer();
    }
}