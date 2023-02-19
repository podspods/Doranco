import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MyLink, MyNav } from "../styles/Menu.style";

type menuProps={
  children: ReactNode
}

export default function Menu({ children }: menuProps) {
  return (
    <>
      <MyNav className={children}>
        <MyLink to="/"  >Accueil</MyLink>
        <MyLink to="/contact">Nous contacter</MyLink>
        <MyLink to="/about">about</MyLink>
      </MyNav>
    </>
  );
}
