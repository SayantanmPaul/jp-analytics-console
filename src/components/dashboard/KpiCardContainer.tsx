import { Icons } from '@/assets/icons';
import { KpiCardProps } from '@/data/sample-data';
import { cn } from '@/lib/utils';
import { useGetSampleKPIs } from '../../../api/apiClient';
import { NumberTicker } from '../ui/number-ticker';
import { Skeleton } from '../ui/skeleton';

const KpiCardContainer = () => {
  const { data, loading } = useGetSampleKPIs();
  return (
    <div className="grid grid-cols-2 lg:gap-7 gap-3">
      {loading
        ? Array.from({ length: 4 }).map((_, i) => <KpiCardSkeleton key={i} />)
        : data.map((kpi: KpiCardProps, i: number) => <KpiCard key={i} {...kpi} />)}
    </div>
  );
};

export default KpiCardContainer;

const KpiCard = ({
  label,
  value,
  animationStartValue,
  decimalPlace,
  growth,
  color,
}: KpiCardProps) => {
  return (
    <div
      className={`h-28  rounded-2xl flex items-center text-primary ${!color ? 'bg-card' : ' dark:text-primary-foreground'}`}
      style={color ? { backgroundColor: color } : undefined}
      role="group"
      aria-label={`${label} KPI`}
    >
      <div className="flex flex-col space-y-2 lg:p-6 p-4  w-full">
        <h3 className={`text-sm leading-5 space-y-3 font-semibold w-full`}>{label}</h3>
        <div className="flex items-center w-full lg:gap-7 gap-2 justify-between">
          <NumberTicker
            value={value}
            startValue={animationStartValue || 0}
            decimalPlaces={decimalPlace || 0}
            className={`lg:text-2xl text-xl font-semibold leading-9 tracking-tighter space-y-[18px] whitespace-pre-wrap text-primary  ${!color ? '' : ' dark:text-primary-foreground'}`}
          />
          <span className="flex items-center gap-1">
            <p className="lg:text-sm text-xs font-normal leading-5 space-y-2 ">{growth}</p>
            {growth.toString().includes('+') ? (
              <Icons.arrowRise className="lg:size-4 size-3" aria-hidden />
            ) : (
              <Icons.arrowRise className="lg:size-4 size-3 rotate-180" aria-hidden />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export const KpiCardSkeleton = () => {
  return (
    <div className={cn('h-28 rounded-2xl flex items-center bg-black-5')} aria-hidden>
      <div className="flex flex-col space-y-2 lg:p-6 p-4 w-full">
        <Skeleton className="h-4 w-20 rounded-md" />

        <div className="flex items-center w-full lg:gap-7 gap-2 justify-between">
          <Skeleton className="h-7 w-24 rounded-md" />

          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-4 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
