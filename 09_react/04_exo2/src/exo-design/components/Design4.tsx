import { ReactNode } from "react";
import { Main } from "../style/design2.style";
import { Circle, Footer, Header } from "../style/design3.style";
import { SubBox, Rectangle, Sticker } from "../style/design4.style";

export default function Design4() {
  return (
    <>
      <Header>
        <Circle />
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
        <Circle />
      </Footer>
    </>
  );
}
