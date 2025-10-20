import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useGetCityRevenueData } from '../../../api/apiClient';
import { Progress } from '../ui/progress';
import { Skeleton } from '../ui/skeleton';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const GlobalRevenueMap = () => {
  const { data: sampleCityRevenue, loading } = useGetCityRevenueData();
  return (
    <figure
      className="flex flex-col space-y-4 lg:p-6 p-4 rounded-lg bg-card w-full h-fit"
      aria-labelledby="revenue-map-heading"
    >
      <h3
        id="revenue-map-heading"
        className="text-sm font-semibold leading-5 text-primary space-y-3 w-full"
      >
        Revenue by Location
      </h3>
      {loading ? (
        <div className="w-full h-22 rounded-md overflow-hidden" role="status">
          <Skeleton className="w-full h-full" />
        </div>
      ) : (
        <ComposableMap
          className="w-auto h-22"
          projection="geoMercator"
          projectionConfig={{ scale: 200, center: [0, 36] }}
          aria-label="World map with revenue"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: 'var(--chart-5)',
                      stroke: 'var(--background)',
                      strokeWidth: 1.5,
                    },
                    hover: { fill: '#70a1d7' },
                  }}
                />
              ))
            }
          </Geographies>
          {sampleCityRevenue.map((city) => (
            <Marker key={city.city} coordinates={city.coordinates}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <g
                    role="button"
                    tabIndex={0}
                    aria-label={`${city.city}, ${city.revenue}K revenue`}
                  >
                    <Dot />
                  </g>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="text-xs leading-5 text-primary-foreground dark:text-primary dark:bg-[#1C1C1CCC] shadow-2xl backdrop-blur-sm"
                >
                  <p className="font-semibold">{city.city}</p>
                  <p>{city.revenue}K Revenue</p>
                </TooltipContent>
              </Tooltip>
            </Marker>
          ))}
        </ComposableMap>
      )}

      {loading
        ? Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2" aria-hidden="true">
              <div className="w-full flex items-center justify-between">
                <Skeleton className="w-1/3 h-3" />
                <Skeleton className="w-6 h-3" />
              </div>
              <Skeleton className="w-full h-1" />
            </div>
          ))
        : sampleCityRevenue.map((item) => (
            <CityRevenue key={item.city} city={item.city} revenue={item.revenue} />
          ))}
    </figure>
  );
};

export default GlobalRevenueMap;

const CityRevenue = ({ city, revenue }: { city: string; revenue: number }) => {
  return (
    <div className="">
      <span className="flex items-center w-full justify-between text-xs leading-5 space-y-2 text-primary font-normal">
        {city}
        <p>{revenue}K</p>
      </span>
      <Progress value={revenue} className="w-full h-0.5" aria-label={`Revenue progress ${city}`} />
    </div>
  );
};

const Dot = () => (
  <circle
    r={24}
    fill="currentColor"
    className="text-black dark:text-chart-1 z-10 shadow-2xl"
    stroke="white"
    strokeWidth={12}
    aria-hidden="true"
  />
);
