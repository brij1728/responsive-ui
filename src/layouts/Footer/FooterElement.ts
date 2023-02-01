import styled, { css } from "styled-components";

export const FooterSection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  gap: 50px;
  padding: 2rem 6rem;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      gap: 30px;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      gap: 30px;
    }
  `}
`;

export const FooterHeadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  gap: 30px;
`;

export const FooterHeading = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  font-weight: 800;
  font-size: 62px;
  line-height: 75px;

  text-align: center;
  letter-spacing: -0.04em;

  background: linear-gradient(
    89.97deg,
    ${({ theme }) => theme.primaryColors.primaryGradientText} 1.84%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientText} 102.67%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 22px;
      line-height: 35px;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      font-size: 32px;
      line-height: 45px;
    }
  `}
`;

export const FooterButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const FooterButton = styled.button`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  font-size: 18px;
  line-height: 21px;

  border: none;
  outline: none;

  color: ${({ theme }) => theme.primaryColors.primary_01};
  background: ${({ theme }) => theme.primaryColors.primaryFooter};
  border-radius: 10px;

  cursor: pointer;
`;

export const FooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 30px;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
      justify-content: space-between;
      align-items: flex-start;

      margin-top: 20px;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      flex-flow: row wrap;
      justify-content: space-between;

      align-items: flex-start;
    }
  `}
`;

export const FooterContainerLogo = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;

  gap: 30px;
`;
export const FooterLogo = styled.img`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FooterLogoText = styled.p`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 12px;
  line-height: 14px;

  color: ${({ theme }) => theme.primaryColors.primary_01};
`;

export const FooterLinks = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 20px;
`;

export const FooterCompany = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const FooterAddress = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const FooterSubHeading = styled.h4`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  font-size: 14px;
  line-height: 16px;

  color: ${({ theme }) => theme.primaryColors.primary_01};
`;

export const FooterText = styled.p`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  font-size: 12px;
  line-height: 14px;

  color: ${({ theme }) => theme.primaryColors.primary_01};
`;

export const FooterCopyRight = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;
