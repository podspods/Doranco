import { StrictMode, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppGlobalStyle, MenuBurger } from "../styles/App.style";
import About from "./About";
import Accueil from "./Accueil";
import Contact from "./Contact";
import Menu from "./Menu";
/**
 * main component for the application
 * @returns
 *
 */

export default function App() {

  const [isHide, setDisplayState] = useState<boolean>(true)

function ToggleDisplayMode() {
  setDisplayState(!isHide);

}

  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <MyNav className="hide"> */}
     <Menu>{isHide ? "hide" : null}</Menu>

           {/* <MyNav className={isHide ? "hide" : null}> */}

      </BrowserRouter>
      <MenuBurger onClick={ToggleDisplayMode}>
        <i className="fa-solid fa-bars"></i>
        </MenuBurger>
    </StrictMode>
  );
}
