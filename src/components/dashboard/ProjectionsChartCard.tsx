'use client';
import { ChartConfig, ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { ProjectionData } from '@/data/sample-data';
import { Bar, BarChart, CartesianGrid, TooltipProps, XAxis, YAxis } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const chartConfig = {
  actual: {
    label: 'Actual',
    color: 'var(--chart-1)',
  },
  projection: {
    label: 'Projection',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

interface ProjectionsChartProps {
  data: ProjectionData[];
}

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  label?: string;
  indicator?: 'line' | 'dashed';
  hideLabel?: boolean;
}

const ProjectionsChartCard = ({ data }: ProjectionsChartProps) => {
  const MAX_VALUE = 30;

  const normalized = data.map((d: ProjectionData) => ({
    month: d.month,
    actual: Math.min(d.Actuals ?? 0, MAX_VALUE),
    projection: Math.min(d.Projections ?? 0, MAX_VALUE),
  }));

  return (
    <figure
      className="flex flex-col lg:gap-4 gap-6 p-6 rounded-lg bg-card w-full max-w-full max-h-[252px] h-full"
      aria-labelledby="proj-heading"
    >
      <h3
        id="proj-heading"
        className="text-sm font-semibold leading-5 text-primary space-y-3 w-full"
      >
        Projections vs Actuals
      </h3>
      <ChartContainer
        config={chartConfig}
        role="img"
        aria-label="Bar chart for projections vs actuals over months"
        aria-describedby="proj-desc"
        className=" w-full h-full pl-0 max-h-42"
      >
        <BarChart accessibilityLayer data={normalized}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={8}
            tick={{ color: 'var(--black-40)' }}
            fontSize={12}
            fontWeight={500}
            axisLine={true}
            stroke="var(--black-20)"
            strokeWidth={0.5}
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

          <ChartTooltip content={<CustomTooltipContent hideLabel />} />
          <Bar
            dataKey="actual"
            stackId="a"
            fill="var(--chart-5)"
            // radius={[0, 0, 4, 4]}
            maxBarSize={20}
          />
          <Bar
            dataKey="projection"
            stackId="a"
            fill="rgba(168, 197, 218, 0.5)"
            radius={[4, 4, 0, 0]}
            maxBarSize={20}
          />
        </BarChart>
      </ChartContainer>
    </figure>
  );
};

export default ProjectionsChartCard;

const CustomTooltipContent = ({ payload }: CustomTooltipProps) => {
  if (!payload || payload.length === 0) return null;

  return (
    <div
      aria-live="polite"
      role="tooltip"
      className=" bg-[#1C1C1CCC] shadow-xl py-1 px-3 rounded-lg backdrop-blur-sm space-y-1 dark:text-primary text-primary-foreground"
    >
      {payload.map((entry, index) => (
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
