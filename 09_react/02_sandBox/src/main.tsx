import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";

export type Users = {
  name: string;
  // age: number;
};

export type GetUserProp{
  // myUser: Users
  name: string;

}

export function GetUser({name}: GetUserProp) {
  return (
    <>
      <h1>my user is : {name} </h1>
      {/* <p> he is {myUser.age} yeard old</p> */}
    </>
  );
}

type TitreProps = {
  children: ReactNode
}


// function Titre ({children}:TitreProps){
  function Titre (children){

  return <h1>{children}</h1>
}

// const emile :Users ={ name : "Emile", age: 58}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>

<GetUser mame="jean luc"> </GetUser>



  </React.StrictMode>
);
