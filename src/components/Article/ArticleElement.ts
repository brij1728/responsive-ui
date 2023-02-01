import styled from "styled-components";

export const ArticleSection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  background: ${({ theme }) => theme.primaryColors.primaryFooter}; ;
`;

export const ArticleImage = styled.img`
  height: 100%;
  width: 100%;

  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ArticleContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;

  row-gap: 20px;
  padding: 1rem 1.5rem;
`;

export const ArticleDate = styled.p`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
  font-size: 11.649px;
  line-height: 35px;

  color: ${({ theme }) => theme.primaryColors.primary_01};
`;

export const ArticleTitle = styled.h3`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 800;
  font-size: 19.3154px;
  line-height: 30px;

  color: ${({ theme }) => theme.primaryColors.primary_01};

  cursor: pointer;
`;

export const ArticleLink = styled.p`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
  font-size: 11.649px;
  line-height: 35px;

  color: ${({ theme }) => theme.primaryColors.primary_01};

  cursor: pointer;
`;
