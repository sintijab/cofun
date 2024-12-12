import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";
import { useCallback } from "react";


export const TempoComplexityContext = ({data}: {data: SoundTechnical[]}) => {
  const enclosed = data.filter(sound => sound.spatial_context === 'enclosed_settings');
  const open_air = data.filter(sound => sound.spatial_context === 'open_air');
  const natural_environments = data.filter(sound => sound.spatial_context === 'natural_environments');

  const hasLength = (venue: SoundTechnical[]) => ['constant', 'modulating', 'metric_modulation', 'polytemporal'].some(key => venue.filter(s => s.tempo_complexity === key).length);

  const getSeries = useCallback((source: string) => {
    return [
      ... hasLength(enclosed) ? [enclosed.filter(s => s.tempo_complexity === source).length] : [],
      ... hasLength(open_air) ? [open_air.filter(s => s.tempo_complexity === source).length] : [],
      ... hasLength(natural_environments) ? [natural_environments.filter(s => s.tempo_complexity === source).length] : [],
    ]
  }, [enclosed, open_air, natural_environments])


  const getCategories = useCallback(() => {
    return [
      ... hasLength(enclosed) ? ['Enclosed'] : [],
      ... hasLength(open_air) ? ['Open Air'] : [],
      ... hasLength(natural_environments) ? ['Natural Environments'] : [],
    ]
  }, [enclosed, open_air, natural_environments])


  const series: ApexOptions['series'] = [{
    name: 'Constant',
    data: getSeries('constant')
  }, {
    name: 'Modulating',
    data: getSeries('modulating')
  }, {
    name: 'Metric Modulation',
    data: getSeries('metric_modulation')
  }, {
    name: 'Polytemporal',
    data: getSeries('polytemporal')
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
      text: 'Streaming by Tempo and Spatial Context Complexity'
    },
    xaxis: {
      categories: getCategories()
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