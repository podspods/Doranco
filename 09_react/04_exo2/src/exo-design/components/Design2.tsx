import { ReactNode } from "react";
import { Footer, Header } from "../style/design1.style";
import { Main, Rectangle } from "../style/design2.style";

export default function Design2() {
  return (
    <>
      <Header />
      <Main>
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </Main>

      <Footer />
    </>
  );
}
