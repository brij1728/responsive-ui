import styled from "styled-components";

export const GPT3Section = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
  padding: 2rem 6rem;

  background: ${({ theme }) => theme.primaryColors.primaryFooter};
`;

export const GPT3Feature = styled.div`
  flex: 1;
  display: flex;
  /* flex-flow: column wrap; */
  justify-content: space-between;
  align-items: center;
`;

export const GPT3Heading = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const GradientTextHeading = styled.h1`
  flex: 2;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  font-weight: 800;
  font-size: 32px;

  letter-spacing: -0.04em;

  background: linear-gradient(
    89.97deg,
    ${({ theme }) => theme.primaryColors.primaryGradientText} 1.84%,
    ${({ theme }) => theme.secondaryColors.secondaryGradientText} 102.67%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const GPT3HeadingParagraph = styled.p`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primarySubtext};

  cursor: pointer;
`;

export const GPT3Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  gap: 50px;
`;
