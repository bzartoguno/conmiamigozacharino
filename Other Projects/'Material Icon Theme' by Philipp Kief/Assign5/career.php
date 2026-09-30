<?php
class Career{
    public $dentist_score, $doctor_score, $pharmacist_score, $career;
    public function __construct($dentist_score, $doctor_score, $phar_score, $career){
        $this->dentist_score = $dentist_score;
        $this->doctor_score = $doctor_score;
        $this->pharmacist_score = $phar_score;
        $this->career = $career;
    }

    public function getDentistScore(){
        return $this->dentist_score;
    }

    public function getDoctorScore(){
        return $this->doctor_score;
    }

    public function getPharmacistScore(){
        return $this->pharmacist_score;
    }

    public function getCareer(){
        return $this->career;
    }

    public function __toString(){
        return $this->getDentistScore() .
               $this->getDoctorScore() .
               $this->getPharmacistScore() . ' = ' . $this->getCareer();
    }
}