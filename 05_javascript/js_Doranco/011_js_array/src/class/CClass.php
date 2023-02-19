<?php
include_once $_SERVER['DOCUMENT_ROOT']. '/class/CConstant.php';


Class CClass
{
   
    private $id ;
    private $message ;
    private $order;

    private $modifDate;
    private $creaDate;
    private $valide;

    protected $mysqli ;
    function __construct()
    {
        CDebug::PIci(__LINE__,__FILE__);
        
        $this->InitMySqli();
        CDebug::PIci(__LINE__,__FILE__);
    }
    
  
    
     
    protected function InitMySqli()
    {
        CDebug::PIci(__LINE__,__FILE__);
        $this->mysqli = new mysqli       (CConstant::MYSQL_HOST,CConstant::MYSQL_USER, CConstant::MYSQL_PASS,CConstant::MYSQL_BASE);
        $this->message = CConstant::EMPTY_TEXT;
        return $this->mysqli->errno;
        
        
        
    }
    
    //-------------------------------------------------------------------------------------------
    public function ToString()
    {
        
        $strRetour = "" ;
        $strRetour = sprintf("%s Class : %s  Msg : %s", $strRetour, get_class($this), $this->GetMessage() );
        return $strRetour; 
    }   
    
    //-------------------------------------------------------------------------------------------
    public function  SetId ($value)  {  $this->id = $value;   }
    //-------------------------------------------------------------------------------------------
    public function GetId () {  return $this->id  ;  }
    //-------------------------------------------------------------------------------------------
    public function  SetMessage ($value)  {  $this->message = $value;   }
    public function AddMessage ($value) {$this->message = sprintf("[%s]<br>[%s]",$this->message,$value);}
//-------------------------------------------------------------------------------------------
    public function GetMessage () {  return $this->message  ;  }
    //-------------------------------------------------------------------------------------------
    function GetOrder() {  return $this->order ; }
    function SetOrder($value) { $this->order = $value ;  }

    function GetValide() {  return $this->valide ; }
    function SetValide($value) { $this->valide = $value ;  }

    function GetModifDate() {  return $this->modifDate ; }
    function SetModifDate ($value) { $this->modifDate = $value ;  }

    function GetCreaDate() {  return $this->creaDate ; }
    function SetCreaDate($value) { $this->creaDate = $value ;  }


    public function Save () {  
        
        // CDebug::PTrace(__LINE__,get_class($this)." Save",__FILE__);
        $this->AddMessage("save") ;
        if ($this->GetId() != CConstant::ID_INIT)
        {
            $this->AddMessage("Update") ;
            $this->Update();
        }else
        {
            $this->AddMessage("Insert") ;
            $this->Insert();
        }   
    }
    //-------------------------------------------------------------------------------------------
    
}
