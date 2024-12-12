import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";
import { useCallback } from "react";

export const TempoRhythmicScale = ({ data }: { data: SoundTechnical[] }) => {
  const micro = data.filter(sound => sound.rhytmic_scale === 'micro');
  const macro = data.filter(sound => sound.rhytmic_scale === 'macro');
  const recursive = data.filter(sound => sound.rhytmic_scale === 'recursive');
  const fluid = data.filter(sound => sound.rhytmic_scale === 'fluid');

  const hasLength = (venue: SoundTechnical[]) => ['constant', 'modulating', 'metric_modulation', 'polytemporal'].some(key => venue.filter(s => s.tempo_complexity === key).length);

  const getSeries = useCallback((source: string) => {
    return [
      ... hasLength(micro) ? [micro.filter(s => s.tempo_complexity === source).length] : [],
      ... hasLength(macro) ? [macro.filter(s => s.tempo_complexity === source).length] : [],
      ... hasLength(recursive) ? [recursive.filter(s => s.tempo_complexity === source).length] : [],
      ... hasLength(fluid) ? [fluid.filter(s => s.tempo_complexity === source).length] : [],
    ]
  }, [micro, macro, recursive, fluid])

  const getCategories = useCallback(() => {
    return [
      ... hasLength(micro) ? ['Micro'] : [],
      ... hasLength(macro) ? ['Macro'] : [],
      ... hasLength(recursive) ? ['Recursive'] : [],
      ... hasLength(fluid) ? ['Fluid'] : [],
    ]
  }, [micro, macro, recursive, fluid])
  
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
      text: 'Streaming by Tempo in Rhythmic Scale'
    },
    xaxis: {
      categories: getCategories(),
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    fill: {
      opacity: 1
    },
    colors: ['#79C94F', '#2C7865', '#C80036', '#B5DC82'],
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