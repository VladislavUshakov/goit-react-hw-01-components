import styled from '@emotion/styled';

export const User = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  margin: 0 auto 25px;
  font-size: 16px;
  width: ${({ theme }) => theme.sizes.sectionWidth};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Description = styled.div`
  padding: 25px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Avatar = styled.img`
  width: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
`;

export const Tag = styled.p`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;

  list-style: none;
  background-color: ${({ theme }) => theme.colors.localBg};

  & li {
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    width: calc(100% / 3);

    border: 1px solid ${({ theme }) => theme.colors.mainBg};
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
`;

export const Quantity = styled.p`
  font-weight: bold;
`;
