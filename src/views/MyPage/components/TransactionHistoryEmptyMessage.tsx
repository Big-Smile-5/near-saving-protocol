import styled from 'styled-components';

export interface TransactionHistoryEmptyMessageProps {
  className?: string;
}

function TransactionHistoryEmptyMessageBase({
  className,
}: TransactionHistoryEmptyMessageProps) {
  return (
    <div className={className}>
      <h3>No transaction history</h3>
      <p>Looks like you haven't made any transactions yet.</p>
    </div>
  );
}

export const TransactionHistoryEmptyMessage = styled(
  TransactionHistoryEmptyMessageBase,
)`
  height: 80px;
  display: grid;
  place-content: center;
  text-align: center;

  h3 {
    font-size: 18px;
    font-weight: 500;

    margin-bottom: 8px;
  }

  p {
    font-size: 13px;
    color: ${({ theme }) => theme.dimTextColor};
  }
`;
