import { Area, CartesianGrid, ComposedChart, Line, TooltipProps, XAxis, YAxis } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { useSampleReveneueLineChartData } from '../../../api/apiClient';
import { ChartConfig, ChartContainer, ChartTooltip } from '../ui/chart';
import { Skeleton } from '../ui/skeleton';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  label?: string;
  indicator?: 'line' | 'dashed';
  hideLabel?: boolean;
}

const chartConfig = {
  actual: {
    label: 'Actual',
    color: 'var(--chart-1)',
  },
  projection: {
    label: 'Projection',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig;

const RevenueForecastChart = () => {
  const { data: revenueLineChartData, loading } = useSampleReveneueLineChartData();

  return (
    <figure
      className="w-full h-full rounded-2xl bg-card flex flex-col space-y-4 p-6"
      aria-labelledby="chart-heading"
    >
      <Header
        currentWeekRevenueAmount={revenueLineChartData?.currentWeekRevenueAmount || ''}
        previousWeekRevenueAmount={revenueLineChartData?.previousWeekRevenueAmount || ''}
        isLoading={loading}
      />
      {loading ? (
        <Skeleton className="w-full h-[232px]" />
      ) : (
        <ChartContainer
          role="img"
          aria-label="Line chart for projections vs actuals over months"
          config={chartConfig}
          className="w-full h-full pl-0 max-h-[232px]"
        >
          <ComposedChart accessibilityLayer data={revenueLineChartData?.data || []}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={16}
              fontSize={12}
              tickCount={4}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(val) => (val === 0 ? `${val}` : `${val}M`)}
              width={44}
            />
            <ChartTooltip
              cursor={false}
              wrapperStyle={{ outline: 'none' }}
              content={<ChartTooltipContent />}
            />

            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-5)" stopOpacity={0.3} />
                <stop offset="56%" stopColor="var(--chart-5)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              key="area-projection"
              type="natural"
              dataKey="_areaFill"
              stroke="none"
              fill="url(#colorUv)"
              fillOpacity={1}
            />

            <Line
              key="line-projection-line"
              dataKey="projection"
              type="natural"
              stroke="var(--chart-5)"
              strokeWidth={3}
              dot={false}
            />

            <Line
              dataKey="actual"
              type="natural"
              stroke="var(--chart-1)"
              strokeWidth={3}
              filter="url(#glow)"
              dot={false}
            />

            <Line
              dataKey="actualDotted"
              type="natural"
              stroke="var(--chart-1)"
              strokeWidth={3}
              strokeDasharray="2 10"
              strokeLinecap="round"
              dot={false}
            />
          </ComposedChart>
        </ChartContainer>
      )}
    </figure>
  );
};

export default RevenueForecastChart;

// custom tooltip content filtering out _areaFill entries
const ChartTooltipContent = ({ payload, label, hideLabel }: CustomTooltipProps) => {
  if (!payload || payload.length === 0) return null;

  const filteredPayload = payload.filter((entry) => entry.dataKey !== '_areaFill');

  return (
    <div
      aria-live="polite"
      role="tooltip"
      className=" bg-[#1C1C1CCC] shadow-xl py-1 px-3 rounded-lg backdrop-blur-sm space-y-1 dark:text-primary text-primary-foreground"
    >
      {!hideLabel && <div className="tooltip-label text-xs mb-0.5 font-semibold">{label}</div>}
      {filteredPayload.map((entry, index) => (
        <div key={`item-${index}`} className="tooltip-item flex items-center space-x-2">
          <span
            className="tooltip-indicator w-3 h-3 rounded"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs">
            {entry.name || entry.dataKey}: {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const Header = ({
  currentWeekRevenueAmount,
  previousWeekRevenueAmount,
  isLoading,
}: {
  currentWeekRevenueAmount: string;
  previousWeekRevenueAmount: string;
  isLoading: boolean;
}) => {
  return (
    <div className="flex items-center gap-4">
      <h3 id="chart-heading" className="text-sm font-semibold leading-5 text-primary space-y-3">
        Revenue
      </h3>
      <p className="text-sm font-normal leading-5 text-black-20 space-y-3">|</p>
      <WeekRevenue
        label="Current Week"
        amount={currentWeekRevenueAmount}
        colorClass="bg-chart-1"
        isLoading={isLoading}
      />
      <WeekRevenue
        label="Previous Week"
        amount={previousWeekRevenueAmount}
        colorClass="bg-chart-5"
        isLoading={isLoading}
      />
    </div>
  );
};

// week revenue with loading state
const WeekRevenue = ({
  label,
  amount,
  colorClass,
  isLoading,
}: {
  label: string;
  amount: string;
  colorClass: string;
  isLoading: boolean;
}) => (
  <div className="flex items-center py-0.5 pl-1 pr-2">
    <span className="w-4 h-4 flex items-center justify-center" aria-hidden="true">
      <span className={`w-1.5 h-1.5 rounded-full ${colorClass}`} />
    </span>
    <span className="text-primary text-xs leading-5 space-x-2 font-normal whitespace-nowrap flex items-center">
      {label}{' '}
      {isLoading ? (
        <Skeleton className="w-12 h-4 inline-block ml-1.5" />
      ) : (
        <span className="font-semibold ml-1">{amount}</span>
      )}
    </span>
  </div>
);
