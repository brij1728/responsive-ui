import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  @media screen and(max-width: 700px) {
    padding: 2rem 4rem;
  }

  @media screen and(max-width: 550px) {
    padding: 2rem;
  }
`;

export const NavbarLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLinksLogo = styled.div`
  margin-right: 2rem;
`;

export const NavLinksLogoImg = styled.img`
  width: 62.56px;
  height: 16.02px;
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavbarSign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const NavbarParagraph = styled.p`
  color: #fff;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;
  margin: 0 1rem;
  cursor: pointer;
`;

export const NavbarButton = styled.button`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.primaryColors.primary_01};
  font-family: var(--font-family);
  left: 1153px;
  top: 55px;
  background: ${({ theme }) => theme.secondaryColors.secondaryBackground};
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  border: 0;
  outline: none;
  cursor: pointer;
`;
export const NavbarMenu = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;
export const NavbarMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  background: var(--color-footer);
  padding: 2rem;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  position: absolute;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 550px) {
    top: 20px;
  }
`;

export const NavbarMenuImg = styled.svg`
  cursor: pointer;
`;

export const NavbarMenuParagraph = styled.p`
  margin: 1rem 0;
`;

export const NavbarMenuSign = styled.div`
  display: none;

  @media screen and (max-width: 550px) {
    display: block;
  }
`;

export const NavbarMenuLinksContainer = styled.div``;
