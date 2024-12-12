import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";
import { useCallback } from "react";

export const TempoRangeModulation = ({data}: {data: SoundTechnical[]}) => {
  const accelerando = data.filter(sound => sound.tempo_modulation === 'accelerando');
  const ritardando = data.filter(sound => sound.tempo_modulation === 'ritardando');
  const rubato = data.filter(sound => sound.tempo_modulation === 'rubato');
  const static_tempo = data.filter(sound => sound.tempo_modulation === 'static_tempo');

  const hasLength = (venue: SoundTechnical[]) => ['slow', 'medium', 'fast'].some(key => venue.filter(s => s.tempo_range === key).length);

  const getSeries = useCallback((source: string) => {
    return [
      ... hasLength(accelerando) ? [accelerando.filter(s => s.tempo_range === source).length] : [],
      ... hasLength(ritardando) ? [ritardando.filter(s => s.tempo_range === source).length] : [],
      ... hasLength(rubato) ? [rubato.filter(s => s.tempo_range === source).length] : [],
      ... hasLength(static_tempo) ? [static_tempo.filter(s => s.tempo_range === source).length] : [],
    ]
  }, [accelerando, ritardando, rubato, static_tempo])

  const getCategories = useCallback(() => {
    return [
      ... hasLength(accelerando) ? ['Accelerando'] : [],
      ... hasLength(ritardando) ? ['Ritardando'] : [],
      ... hasLength(rubato) ? ['Rubato'] : [],
      ... hasLength(static_tempo) ? ['Static'] : [],
    ]
  }, [accelerando, ritardando, rubato, static_tempo])

  const series: ApexOptions['series'] = [{
    name: 'Slow',
    data: getSeries('slow')
  }, {
    name: 'Medium',
    data: getSeries('medium')
  }, {
    name: 'Fast',
    data: getSeries('fast')
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
      text: 'Streaming by Tempo Tange in Tempo Modulation'
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
    colors:['#90D26D','#C80036', '#D9EDBF'],
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