import styled, { css } from "styled-components";

export const BlogSection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;

  gap: 50px;
  padding: 2rem 6rem;
`;

export const BlogGradientHeader = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
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
      line-height: 32px;
    }

    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      font-size: 32px;
      line-height: 42px;
    }
  `}
`;

export const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  gap: 2rem;

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

export const BlogGroupA = styled.div`
  width: 100%;
  height: 100%;
  flex: 0.5;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BlogGroupB = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 2rem;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;
