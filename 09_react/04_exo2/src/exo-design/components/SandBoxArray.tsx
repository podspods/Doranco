import { ReactNode } from "react";
import { Main } from "../style/design2.style";
import { Circle } from "../style/design3.style";
import { SubBox, Rectangle, Sticker } from "../style/design4.style";
import {
  BoxFootLeft,
  BoxFootRight,
  BoxHead,
  Footer,
  Header,
} from "../style/design5.style";

const vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
const wordArray = [
  "Il",
  "circule",
  "des",
  "centaines",
  "de",
  "versions",
  "différentes",
  "du ",
  "lorem",
  "ipsum",
];


export  function test1(){
  
  const resultArray = wordArray.map((word, index)=> (1)
   

  )

  return resultArray;

}

export  function test2(){
  
  const resultArray = wordArray.filter((word, index)=> ( word.length%2 !==0)
   

  )

  return resultArray;

}


// const result2 = test1() ;
const result2 = test2() ;

export default function SandBoxArray() {

  return (
    <>
      <ul>
       

        {result2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
