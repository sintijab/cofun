import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";

export const RhythmicScaleContext = ({data}: {data: SoundTechnical[]}) => {
  if (!data) {
    return null;
  }
  const enclosed = data.filter(sound => sound.spatial_context === 'enclosed_settings');
  const open_air = data.filter(sound => sound.spatial_context === 'open_air');
  const natural_environments = data.filter(sound => sound.spatial_context === 'natural_environments');

  const filter = (arr: typeof data, source: string) => arr.filter(s => s.rhytmic_scale === source).length;
  const series: ApexOptions['series'] = [{
    name: 'Micro',
    data: [filter(enclosed, 'micro'), filter(open_air, 'micro'), filter(natural_environments, 'micro')]
  }, {
    name: 'Macro',
    data: [filter(enclosed, 'macro'), filter(open_air, 'macro'), filter(natural_environments, 'macro')]
  }, {
    name: 'Recursive',
    data: [filter(enclosed, 'recursive'),  filter(open_air, 'recursive'), filter(natural_environments, 'recursive')]
  }, {
    name: 'Fluid',
    data: [filter(enclosed, 'fluid'), filter(open_air, 'fluid'), filter(natural_environments, 'fluid')]
  }];
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Streaming by Rhytmic Scale in Spatial Context'
    },
    xaxis: {
      categories: ['Enclosed', 'Open Air', 'Natural Environments'],
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    fill: {
      opacity: 1
    },
    colors:['#FFA62F','#FFC96F', '#C7253E', '#FA4032','#FA812F'],
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
    dataLabels: {
      enabled: false
    }
  };
  return <StackedSingleBar options={options} series={series} />
}