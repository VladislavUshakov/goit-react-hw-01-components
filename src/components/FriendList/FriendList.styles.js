import styled from '@emotion/styled';

export const FriendCollection = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0 auto 25px;
  padding: 5px 10px;
  width: ${({ theme }) => theme.sizes.sectionWidth};
`;
