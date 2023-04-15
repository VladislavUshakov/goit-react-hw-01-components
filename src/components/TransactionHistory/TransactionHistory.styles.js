import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  margin: 0 auto;
  width: ${({ theme }) => theme.sizes.sectionWidth};
  box-shadow: ${({ theme }) => theme.shadow};

  border-collapse: collapse;
  border-style: hidden;

  th,
  td {
    padding: 6px 10px;
    border: 1px solid ${({ theme }) => theme.colors.table.rowBg};
  }

  & thead {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.table.headBg};
  }

  & tbody {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightText};
    tr {
      background-color: ${({ theme }) => theme.colors.table.rowBg};
    }

    tr:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
