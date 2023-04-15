import { getRandomColor } from '../../utils/getRandomColor';
import styled from '@emotion/styled';

export const Section = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  margin: 0 auto 25px;
  font-size: 16px;
  width: ${({ theme }) => theme.sizes.sectionWidth};

  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Title = styled.h2`
  background-color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey};
  padding: 40px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;

  color: ${({ theme }) => theme.colors.white};
`;

export const Item = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  width: calc(100% / 4);
  background-color: ${getRandomColor};
`;

export const Percentage = styled.p`
  font-size: 25px;
`;
