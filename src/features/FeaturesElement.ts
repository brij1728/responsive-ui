import styled, { css } from "styled-components";

export const FeaturesSection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  gap: 20px;
  padding: 2rem 6rem;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
    }

    @media only screen and (min-width: ${theme.breakpoints.md}) {
      flex-flow: column wrap;
    }

    @media only screen and (min-width: ${theme.breakpoints.lg}) {
      flex-flow: row wrap;
    }
  `}
`;

export const FeaturesHeading = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;

  row-gap: 20px;
  margin-right: 5rem;

  text-align: left;
`;

export const FeaturesGradientText = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 800;
  font-size: 34px;
  line-height: 45px;

  background: linear-gradient(
    103.22deg,
    ${({ theme }) => theme.primaryColors.primaryGradientText} -13.86%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientText} 99.55%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FeaturesText = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primarySubtext};

  margin-top: 2rem;
`;

export const FeaturesContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  row-gap: 20px;
`;
