<?php 

include_once $_SERVER['DOCUMENT_ROOT']. '/class/CClass.php';
class CFichier extends CClass
{

    private $nom;
    
//----------------------------------------------------------------------------------------------
// Getter ****  Setter
//----------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------
    function GetNom() {  return $this->nom ; }
    function SetNom($value) { $this->nom = $value ;  }


    //-------------------------------------------------------------------------------------------
    function fonction1()
    {
        $status = 0;
        return $status ;
                            
    } 

     //-----------------------------------------------------
    
     public static function  FonctionStatique()
     {
        $status = 0;
        return $status ;
     }
}


?>
