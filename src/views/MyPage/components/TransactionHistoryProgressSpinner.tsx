import { CircleSpinner } from 'react-spinners-kit';
import styled, { useTheme } from 'styled-components';

export interface TransactionHistoryProgressSpinnerProps {
  className?: string;
  size: 'small' | 'large';
}

function TransactionHistoryProgressSpinnerBase({
  className,
  size,
}: TransactionHistoryProgressSpinnerProps) {
  const theme = useTheme();

  return (
    <div className={className} style={{ height: size === 'small' ? 50 : 200 }}>
      <CircleSpinner
        size={size === 'small' ? 20 : 40}
        color={theme.textColor}
      />
    </div>
  );
}

export const TransactionHistoryProgressSpinner = styled(
  TransactionHistoryProgressSpinnerBase,
)`
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.textColor};
`;
