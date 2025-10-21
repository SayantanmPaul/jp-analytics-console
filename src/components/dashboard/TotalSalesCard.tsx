'use client';

import { ChartConfig, ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { sampleTotalSales } from '@/data/sample-data';

import { Cell, Pie, PieChart, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { useGetTotalSales } from '../../../api/apiClient';
import { Skeleton } from '../ui/skeleton';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  label?: string;
  indicator?: 'line' | 'dashed';
  hideLabel?: boolean;
}

const chartConfig = {
  direct: {
    label: 'Direct',
    color: 'var(--chart-1)',
  },
  affilliate: {
    label: 'Affilliate',
    color: 'var(--chart-4)',
  },
  sponsored: {
    label: 'Sponsored',
    color: 'var(--chart-2)',
  },
  email: {
    label: 'E-mail',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

const TotalSalesCard = () => {
  const { data: sampleTotalSales, loading } = useGetTotalSales();

  return (
    <div
      className={`flex flex-col ${loading ? 'space-y-4' : 'space-y-0 '} p-6 rounded-lg bg-stroke w-full h-full`}
      aria-labelledby="total-sales-card"
    >
      <h3
        id="total-sales-card"
        className="text-sm font-semibold leading-5 text-primary space-y-3 w-full"
      >
        Total Sales
      </h3>
      {loading ? (
        <Skeleton className="h-30 w-full rounded-md" />
      ) : (
        <ChartContainer
          config={chartConfig}
          className="w-full h-36 flex flex-col items-center justify-center relative"
        >
          <PieChart width={120} height={120}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              legendType="circle"
              data={sampleTotalSales}
              dataKey="value"
              nameKey="name"
              innerRadius={35}
              outerRadius={60}
              paddingAngle={-14}
              cornerRadius={20}
              startAngle={-300}
              endAngle={60}
              cx="50%"
              cy="50%"
              stroke="var(--stroke)"
              strokeWidth={4}
            >
              {sampleTotalSales.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      )}

      <div className="flex flex-col space-y-3">
        {loading
          ? Array(4)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="flex items-center justify-between w-full px-3 py-0.5">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-8" />
                </div>
              ))
          : sampleTotalSales.map((item, i) => (
              <div key={i} className="flex items-center py-0.5 pl-1">
                <span className="w-4 h-4 flex items-center justify-center " aria-hidden="true">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                </span>
                <span className="text-primary text-xs leading-5 space-x-2 font-normal whitespace-nowrap flex items-center justify-between w-full ">
                  <p>{item.name}</p>
                  <p className="w-13">${item.value}</p>
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default TotalSalesCard;

// get total sales value
const getTotalSalesValue = (): number => {
  return sampleTotalSales.reduce((acc, sale) => acc + sale.value, 0);
};

// custom tooltip
const ChartTooltipContent = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    const value = payload[0].value as number;

    const percentage = (value / getTotalSalesValue()) * 100;

    return (
      <div className="bg-[#1C1C1CCC] dark:text-primary text-white text-xs leading-5 space-y-2 py-1 px-2 rounded-md backdrop-blur-sm shadow-lg">
        {percentage.toFixed(1)}%
      </div>
    );
  }

  return null;
};
