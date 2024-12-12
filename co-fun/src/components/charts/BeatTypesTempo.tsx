import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";
import { useCallback } from "react";

export const BeatTypesTempo = ({ data }: { data: SoundTechnical[] }) => {
  const constant = data.filter(sound => sound.tempo_complexity === 'constant');
  const modulating = data.filter(sound => sound.tempo_complexity === 'modulating');
  const metric_modulation = data.filter(sound => sound.tempo_complexity === 'metric_modulation');
  const polytemporal = data.filter(sound => sound.tempo_complexity === 'polytemporal');

  const hasLength = (venue: SoundTechnical[]) => ['even', 'syncopation', 'complex', 'dissonant'].some(key => venue.filter(s => s.beat_types === key).length);

  const getSeries = useCallback((source: string) => {
    return [
      ... hasLength(constant) ? [constant.filter(s => s.beat_types === source).length] : [],
      ... hasLength(modulating) ? [modulating.filter(s => s.beat_types === source).length] : [],
      ... hasLength(metric_modulation) ? [metric_modulation.filter(s => s.beat_types === source).length] : [],
      ... hasLength(polytemporal) ? [polytemporal.filter(s => s.beat_types === source).length] : [],
    ]
  }, [constant, modulating, metric_modulation, polytemporal])

  const getCategories = useCallback(() => {
    return [
      ... hasLength(constant) ? ['Constant'] : [],
      ... hasLength(modulating) ? ['Modulating'] : [],
      ... hasLength(metric_modulation) ? ['Metric Modulation'] : [],
      ... hasLength(polytemporal) ? ['Polytemporal'] : [],
    ]
  }, [constant, modulating, metric_modulation, polytemporal])

  const series: ApexOptions['series'] = [{
    name: 'Even',
    data: getSeries('even')
  }, {
    name: 'Syncopation',
    data: getSeries('syncopation')
  }, {
    name: 'Complex',
    data: getSeries('complex')
  }, {
    name: 'Dissonant',
    data: getSeries('dissonant')
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
      text: 'Streaming by Beat Types and Tempo Complexity'
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
    colors: ['#79C94F', '#C80036', '#B5DC82', '#2C7865'],
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