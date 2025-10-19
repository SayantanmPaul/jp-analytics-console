'use client';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { ProjectionData } from '@/data/sample-data';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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

const ProjectionsChartCard = ({ data }: ProjectionsChartProps) => {
  const MAX_VALUE = 30;

  const normalized = data.map((d: ProjectionData) => ({
    month: d.month,
    actual: Math.min(d.Actuals ?? 0, MAX_VALUE),
    projection: Math.min(d.Projections ?? 0, MAX_VALUE),
  }));

  return (
    <figure
      className="flex flex-col gap-4 lg:p-6 p-4 rounded-lg bg-card w-full max-w-full max-h-[252px] h-full"
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

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
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
