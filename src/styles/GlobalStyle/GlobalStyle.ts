import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;


}
html {
  background: ${({ theme }) => theme.primaryColors.primaryBackground};
  scroll-behavior: smooth;

}
body {
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.primaryColors.primaryBackground};
    /* gradient-text: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  gradient-bar: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%); */
  background: -moz-radial-gradient(
    circle at 3% 25%,
    ${({ theme }) => theme.primaryColors.primaryGradientBackground} 0%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientBackground} 100%
  );

  background: -webkit-radial-gradient(
    circle at 3% 25%,
    ${({ theme }) => theme.primaryColors.primaryGradientBackground} 0%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientBackground} 100%
  );

  background: -o-radial-gradient(
    circle at 3% 25%,
    ${({ theme }) => theme.primaryColors.primaryGradientBackground} 0%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientBackground} 100%
  );

  background: -ms-radial-gradient(
    circle at 3% 25%,
    ${({ theme }) => theme.primaryColors.primaryGradientBackground} 0%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientBackground} 100%
  );

  background: radial-gradient(
    circle at 3% 25%,
    ${({ theme }) => theme.primaryColors.primaryGradientBackground} 0%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientBackground} 100%
  );
 ;
  
}

::-webkit-scrollbar {
  width: 0.25em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.primaryColors.primaryBackground};

}
 
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 8px;
  outline: 1px solid ${({ theme }) => theme.primaryColors.primaryBackground}9d;
}
`;
