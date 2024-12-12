import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";
import { useCallback } from "react";

export const SoundSourceOpenAir = ({ data }: { data: SoundTechnical[] }) => {
  const public_plaza = data.filter(sound => sound.open_air === 'public_plaza');
  const rooftop_pier = data.filter(sound => sound.open_air === 'rooftop_pier');
  const playground_park = data.filter(sound => sound.open_air === 'playground_park');
  const outdoors = data.filter(sound => sound.open_air === 'outdoors');
  const other_open_air = data.filter(sound => sound.open_air === 'other_open_air');

  const hasLength = (venue: SoundTechnical[]) => ['musical_instruments', 'fabricated_sources', 'hybrid_sources', 'environmental_sounds', 'synthetic_sources'].some(key => venue.filter(s => s.sound_source === key).length);


  const getSeries = useCallback((source: string) => {
    return [
      ... hasLength(public_plaza) ? [public_plaza.filter(s => s.sound_source === source).length] : [],
      ... hasLength(rooftop_pier) ? [rooftop_pier.filter(s => s.sound_source === source).length] : [],
      ... hasLength(playground_park) ? [playground_park.filter(s => s.sound_source === source).length] : [],
      ... hasLength(outdoors) ? [outdoors.filter(s => s.sound_source === source).length] : [],
      ... hasLength(other_open_air) ? [other_open_air.filter(s => s.sound_source === source).length] : [],
    ]
  }, [public_plaza, rooftop_pier, playground_park, outdoors, other_open_air])

  const getCategories = useCallback(() => {
    return [
      ... hasLength(public_plaza) ? ['Public Plaza / Market Square / Urban Alley'] : [],
      ... hasLength(rooftop_pier) ? ['Rooftop / Pier / Harbor / Train Yard'] : [],
      ... hasLength(playground_park) ? ['Playground / Park / Botanical Garden'] : [],
      ... hasLength(outdoors) ? ['Festival Grounds / Outdoor Stage / Pavilion'] : [],
      ... hasLength(other_open_air) ? ['Other'] : [],
    ]
  }, [public_plaza, rooftop_pier, playground_park, outdoors, other_open_air])

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