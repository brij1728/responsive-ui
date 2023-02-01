import styled, { css } from "styled-components";

export const PossibilitySection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  gap: 50px;
  padding: 2rem 6rem;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      flex-flow: column wrap;
      gap: 25px;
    }

    @media only screen and (min-width: ${theme.breakpoints.md}) {
      flex-flow: row wrap;
    }
  `}
`;

export const PossibilityImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const PossibilityImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  transition: 1s;

  :hover {
    transform: scale(1.2);
  }

  cursor: pointer;
`;

export const PossibilityContent = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;

  gap: 20px;
`;

export const PossibilitySubtext = styled.h4`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.secondaryColors.secondarySubtext};
`;

export const PossibilityGradientText = styled.h1`
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

export const PossibilityText = styled.p`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primaryText};

  margin-top: 1rem;
`;

export const PossibilitySubHeading = styled.h2`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primarySubtext};
`;
