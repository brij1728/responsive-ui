import styled, { css } from "styled-components";

export const CTASection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  gap: 50px;
  margin: 6rem;
  padding: 2rem;

  background: linear-gradient(
    89.97deg,
    ${({ theme }) => theme.primaryColors.primaryGradientText} 1.84%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientText} 102.67%
  );
  border: 1px solid ${({ theme }) => theme.primaryColors.primary_04};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10.7236px;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.md}){
        flex-flow: column wrap;
        gap; 25px
    };

    @media only screen and (min-width: ${theme.breakpoints.md}){
        flex-flow: row wrap;
    }
  `}
`;

export const CTAContent = styled.div`
  flex: 2.5;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;

  row-gap: 20px;

  margin-top: 2rem;
`;

export const CTAParagraph = styled.p`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 30px;

  color: ${({ theme }) => theme.secondaryColors.secondary_03};
`;

export const CTAHeading = styled.h3`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  font-weight: 800;
  font-size: 24px;
  line-height: 45px;

  color: ${({ theme }) => theme.primaryColors.primary_04};

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 18px;
      line-height: 32px;
    }
  `}
`;

export const CTAButtonContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const CTAButton = styled.button`
  min-width: 150px;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;

  color: ${({ theme }) => theme.primaryColors.primary_01};
  background: ${({ theme }) => theme.primaryColors.primary_04};
  border-radius: 40px;

  cursor: pointer;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 14px;
      line-height: 28px;
    }
  `}
`;
