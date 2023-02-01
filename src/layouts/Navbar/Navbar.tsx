import {
  NavLinksLogo,
  NavLinksLogoImg,
  NavbarButton,
  NavbarContainer,
  NavbarLinks,
  NavbarLinksContainer,
  NavbarMenu,
  NavbarMenuContainer,
  NavbarMenuLinksContainer,
  NavbarMenuParagraph,
  NavbarMenuSign,
  NavbarParagraph,
  NavbarSign,
} from "./NavbarElement";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import { Logo } from "../../assets";
import { useState } from "react";

const Menu = () => (
  <>
    <NavbarParagraph>
      <a href="#home">Home</a>
    </NavbarParagraph>
    <NavbarParagraph>
      <a href="#wgpt3">What is GPT3</a>
    </NavbarParagraph>
    <NavbarParagraph>
      <a href="#possibility">Open AI</a>
    </NavbarParagraph>
    <NavbarParagraph>
      <a href="#features">Case Studies</a>
    </NavbarParagraph>
    <NavbarParagraph>
      <a href="#blog">Library</a>
    </NavbarParagraph>
  </>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <NavbarContainer>
      <NavbarLinks>
        <NavLinksLogo>
          <NavLinksLogoImg src={Logo} alt="logo" />
        </NavLinksLogo>
        <NavbarLinksContainer>
          <Menu />
        </NavbarLinksContainer>
      </NavbarLinks>
      <NavbarSign>
        <NavbarParagraph> Sign In </NavbarParagraph>
        <NavbarButton>Sign Up</NavbarButton>
      </NavbarSign>
      <NavbarMenu>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <NavbarMenuContainer>
            <NavbarMenuLinksContainer>
              <Menu />
            </NavbarMenuLinksContainer>
            <NavbarMenuSign>
              <NavbarMenuParagraph> Sign In </NavbarMenuParagraph>
              <NavbarButton>Sign Up</NavbarButton>
            </NavbarMenuSign>
          </NavbarMenuContainer>
        )}
      </NavbarMenu>
    </NavbarContainer>
  );
};
