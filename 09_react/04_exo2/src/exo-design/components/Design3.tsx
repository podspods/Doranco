import { ReactNode } from "react";
import { Main, Rectangle } from "../style/design2.style";
import { Circle, Footer, Header } from "../style/design3.style";

export default function Design3() {
  return (
    <>
      <Header>
        <Circle />
      </Header>
      <Main>
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </Main>

      <Footer>
        <Circle />
      </Footer>
    </>
  );
}
