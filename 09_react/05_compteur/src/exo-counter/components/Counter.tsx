import { ReactNode, useState } from "react";
import { SyntheticEvent } from "react";
import car from "../image/image1.jpg"
import {
  MyButton,
  MyContainer,
  MyP,
  ResetContainer,
} from "../style/Counter.style";
/**
 * play area CounterContainer
 * setup area  IncrementContainer
 */

export default function Counter() {
  const [value, setValue] = useState<number>(0);
  const [incValue, setIncValue] = useState<number>(1);

  function plus() {
    setValue(value + incValue);
  }
  function minus() {
    setValue(value - incValue >= 0 ? value - incValue : 0);
  }

  function reset() {
    setValue(0);
    setIncValue(1);
  }

  function inc() {
    setIncValue(incValue + 1);
  }

  function dec() {
    setIncValue(incValue - 1 >= 1 ? incValue - 1 : 1);
  }

  return (
    <>
      <MyContainer>
        <MyButton onClick={minus}><i className="fa-solid fa-minus"></i></MyButton>
        <MyP>{value}</MyP>
        <MyButton onClick={plus}>
          <i className="fa-solid fa-plus"></i>
        </MyButton>
        </MyContainer>
      <MyContainer>
        <img src={car} alt="image car" />
      </MyContainer>
      <MyContainer>

      <MyButton onClick={reset}><i className="fa-solid fa-recycle"></i></MyButton>
      </MyContainer>
      <MyContainer>
        <MyButton onClick={dec}><i className="fa-solid fa-arrow-down"></i></MyButton>
        <MyP>{incValue}</MyP>
        <MyButton onClick={inc}><i className="fa-solid fa-arrow-up"></i></MyButton>
      </MyContainer>
    </>
  );
}

//--------------------------------------------------------------------
