import { useMemo } from 'react';
import { DoughnutChart } from './DoughnutChart';

export interface TotalValueLockedDoughnutChartProps {
    totalDeposit: string;
    totalCollaterals: string;
    totalDepositColor: string;
    totalCollateralsColor: string;
}

export const TotalValueLockedDoughnutChart = (
    props: TotalValueLockedDoughnutChartProps,
): JSX.Element => {
    const descriptors = useMemo(() => {
        return [
            {
                label: 'Total Deposit',
                color: '#000000',
                value: props.totalDeposit
                    ? Number(props.totalDeposit)
                    : 10000,
            },
            {
                label: 'Total Collateral',
                color: '#FBD85D',
                value: Number(props.totalCollaterals),
            },
        ];
    }, [props.totalCollaterals, props.totalDeposit]);

    return <DoughnutChart descriptors={descriptors} />;
};
