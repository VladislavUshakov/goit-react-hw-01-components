import styled from '@emotion/styled';

export const Item = styled.li`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${({ theme, children }) => theme.colors.isOnline[children]};
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
