import { ApexOptions } from 'apexcharts';
import { ApexChart } from './ApexChart';

export const StackedSingleBar = ({ series, options, width, height }: { series: ApexOptions['series'], options: ApexOptions, width?: number, height?: number}) => (
  <ApexChart options={options} series={series} type="bar" width={width || 450} height={height || 320} />
);

export const SimpleBubble = ({ series, options, width, height }: { series: ApexOptions['series'], options: ApexOptions, width?: number, height?: number}) => (
  <ApexChart options={options} series={series} type="bubble" width={width || 450} height={height || 320} />
);