import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";

export const SoundSourceContext = ({data}: {data: SoundTechnical[]}) => {
  if (!data) {
    return null;
  }
  const enclosed = data.filter(sound => sound.spatial_context === 'enclosed_settings');
  const open_air = data.filter(sound => sound.spatial_context === 'open_air');
  const natural_environments = data.filter(sound => sound.spatial_context === 'natural_environments');

  const filter = (arr: typeof data, source: string) => arr.filter(s => s.sound_source === source).length;
  const series: ApexOptions['series'] = [{
    name: 'Musical Instruments',
    data: [filter(enclosed, 'musical_instruments'), filter(open_air, 'musical_instruments'), filter(natural_environments, 'musical_instruments')]
  }, {
    name: 'Fabricated',
    data: [filter(enclosed, 'fabricated_sources'), filter(open_air, 'fabricated_sources'), filter(natural_environments, 'fabricated_sources')]
  }, {
    name: 'Hybrid',
    data: [filter(enclosed, 'hybrid_sources'),  filter(open_air, 'hybrid_sources'), filter(natural_environments, 'hybrid_sources')]
  }, {
    name: 'Environmental',
    data: [filter(enclosed, 'environmental_sounds'), filter(open_air, 'environmental_sounds'), filter(natural_environments, 'environmental_sounds')]
  }, {
    name: 'Synthetic',
    data: [filter(enclosed, 'synthetic_sources'), filter(open_air, 'synthetic_sources'), filter(natural_environments, 'synthetic_sources')]
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
      text: 'Streaming by Sound Source in Spatial Context'
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
      offsetX: 40
    },
    dataLabels: {
      enabled: false
    }
  };
  return <StackedSingleBar options={options} series={series} />
}