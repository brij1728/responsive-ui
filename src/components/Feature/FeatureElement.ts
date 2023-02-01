import styled, { css } from "styled-components";

export const FeatureSection = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  gap: 20px;
  row-gap: 20px;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
    }

    @media only screen and (max-width: ${theme.breakpoints.md}) {
      flex-flow: column wrap;
    }

    @media only screen and (max-width: ${theme.breakpoints.lg}) {
      flex-flow: row wrap;
    }
  `}
`;
export const FeatureTitleContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: sp;
  /* align-items: flex-start; */
  align-self: flex-start;
`;

export const FeatureTitleBar = styled.div`
  flex: 1;
  display: flex;
  width: 38px;
  height: 3px;
  background: linear-gradient(
      103.22deg,
      ${({ theme }) => theme.primaryColors.primaryGradientText} -13.86%,
      ${({ theme }) => theme.secondaryColors.secondaryGradientText} 99.55%
    ),
    ${({ theme }) => theme.primaryColors.primary_02};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.25rem;
`;
export const FeatureTitle = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-self: flex-start;
  text-align: left;

  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.primaryColors.primary_01};
`;

export const FeatureText = styled.p`
  flex: 2;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  /* align-items: flex-start; */
  align-self: flex-start;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primaryText};

  ::selection {
    background: #e11d74;
    color: white;
  }
`;
