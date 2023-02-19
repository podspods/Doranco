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

export default function Design5() {
  return (
    <>
      <Header>
        <Circle />
        <BoxHead />
      </Header>
      <Main>
        <Rectangle />
        <Rectangle />
        <Rectangle>
          <SubBox />
          <SubBox />
          <SubBox />
          <Sticker />
        </Rectangle>
      </Main>

      <Footer>
        <BoxFootLeft />
        
          <Circle />
        
      </Footer>
    </>
  );
}
