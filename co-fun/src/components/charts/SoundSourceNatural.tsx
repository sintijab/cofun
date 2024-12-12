import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";
import { useCallback } from "react";

export const SoundSourceNatural = ({ data }: { data: SoundTechnical[] }) => {
  const hydro_acoustics = data.filter(sound => sound.natural_environments === 'hydro_acoustics');
  const environmental = data.filter(sound => sound.natural_environments === 'environmental');
  const forest = data.filter(sound => sound.natural_environments === 'forest');
  const mountain = data.filter(sound => sound.natural_environments === 'mountain');
  const weather_conditions = data.filter(sound => sound.natural_environments === 'weather_conditions');
  const animal_sounds = data.filter(sound => sound.natural_environments === 'animal_sounds');

  const hasLength = (venue: SoundTechnical[]) => ['musical_instruments', 'fabricated_sources', 'hybrid_sources', 'environmental_sounds', 'synthetic_sources'].some(key => venue.filter(s => s.sound_source === key).length);

  const getSeries = useCallback((source: string) => {
    return [
      ... hasLength(hydro_acoustics) ? [hydro_acoustics.filter(s => s.sound_source === source).length] : [],
      ... hasLength(environmental) ? [environmental.filter(s => s.sound_source === source).length] : [],
      ... hasLength(forest) ? [forest.filter(s => s.sound_source === source).length] : [],
      ... hasLength(mountain) ? [mountain.filter(s => s.sound_source === source).length] : [],
      ... hasLength(weather_conditions) ? [weather_conditions.filter(s => s.sound_source === source).length] : [],
      ... hasLength(animal_sounds) ? [animal_sounds.filter(s => s.sound_source === source).length] : [],
    ]
  }, [hydro_acoustics, environmental, forest, mountain, weather_conditions, animal_sounds])

  const getCategories = useCallback(() => {
    return [
      ... hasLength(hydro_acoustics) ? ['Hydro-Acoustics'] : [],
      ... hasLength(environmental) ? ['Environmental'] : [],
      ... hasLength(forest) ? ['Forest'] : [],
      ... hasLength(mountain) ? ['Mountain'] : [],
      ... hasLength(weather_conditions) ? ['Weather Conditions'] : [],
      ... hasLength(animal_sounds) ? ['Animal Sounds'] : [],
    ]
  }, [hydro_acoustics, environmental, forest, mountain, weather_conditions, animal_sounds])

  const series: ApexOptions['series'] = [
  {
    name: 'Musical Instruments',
    data: getSeries('musical_instruments')
  }, {
    name: 'Fabricated',
    data: getSeries('fabricated_sources')
  }, {
    name: 'Hybrid',
    data: getSeries('hybrid_sources')
  }, {
    name: 'Environmental',
    data: getSeries('environmental_sounds')
  }, {
    name: 'Synthetic',
    data: getSeries('synthetic_sources')
  }];
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      width: 400,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: false,
          },
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Streaming by Sound Source in Open Air Spaces'
    },
    xaxis: {
      categories: getCategories(),
      labels: {
        formatter: (val: any) => {
          return val || ''
        }
      },
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    fill: {
      opacity: 1
    },
    colors: ['#FFA62F', '#FFC96F', '#C7253E', '#FA4032', '#FA812F'],
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