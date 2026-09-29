<?php
class Career{

    private $dentist_score, $doctor_score, $pharamcist_score, $career;

    public function __construct($dentist_score, $doctor_score, $pharamcist_score, $career){
        $this->dentist_score = $dentist_score;
        $this->doctor_score = $doctor_score;
        $this->pharamcist_score = $pharamcist_score;
        $this->career = $career;
    }

    public function getDentistScore(){return $this->dentist_score;}
    public function getDoctorScore(){return $this->doctor_score;}
    public function getPharmacistScore(){return $this->pharamcist_score;}
    public function getCareer(){return $this->career;}
    public function __toString(){ 
        return $this->getDentistScore() . $this->getDoctorScore() . $this->getPharmacistScore() . ' = ' . $this->getCareer();
    }
}