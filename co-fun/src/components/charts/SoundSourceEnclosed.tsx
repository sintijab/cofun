import { ApexOptions } from "apexcharts";
import { SoundTechnical } from "../../slices/soundFetch";
import { StackedSingleBar } from "@co-fun/ui";
import { useCallback } from "react";

export const SoundSourceEnclosed = ({ data }: { data: SoundTechnical[] }) => {
  const concert_hall = data.filter(sound => sound.enclosed_settings === 'concert_hall');
  const club_lounge = data.filter(sound => sound.enclosed_settings === 'club_lounge');
  const warehouse_factory = data.filter(sound => sound.enclosed_settings === 'warehouse_factory');
  const church_cathedral = data.filter(sound => sound.enclosed_settings === 'church_cathedral');
  const cafe_bistro = data.filter(sound => sound.enclosed_settings === 'cafe_bistro');
  const library_office = data.filter(sound => sound.enclosed_settings === 'library_office');
  const studio = data.filter(sound => sound.enclosed_settings === 'library_office');
  const residential_apartment = data.filter(sound => sound.enclosed_settings === 'library_office');
  const residential_historical = data.filter(sound => sound.enclosed_settings === 'residential_historical');
  const other_enclosed = data.filter(sound => sound.enclosed_settings === 'other_enclosed');

  const hasLength = (venue: SoundTechnical[]) => ['musical_instruments', 'fabricated_sources', 'hybrid_sources', 'environmental_sounds', 'synthetic_sources'].some(key => venue.filter(s => s.sound_source === key).length);

  const getSeries = useCallback((source: string) => {
    return [
      ...hasLength(concert_hall) ? [concert_hall.filter(s => s.sound_source === source).length] : [],
      ...hasLength(club_lounge) ? [club_lounge.filter(s => s.sound_source === source).length] : [],
      ...hasLength(warehouse_factory) ? [warehouse_factory.filter(s => s.sound_source === source).length] : [],
      ...hasLength(church_cathedral) ? [church_cathedral.filter(s => s.sound_source === source).length] : [],
      ...hasLength(cafe_bistro) ? [cafe_bistro.filter(s => s.sound_source === source).length] : [],
      ...hasLength(library_office) ? [library_office.filter(s => s.sound_source === source).length] : [],
      ...hasLength(studio) ? [studio.filter(s => s.sound_source === source).length] : [],
      ...hasLength(residential_apartment) ? [residential_apartment.filter(s => s.sound_source === source).length] : [],
      ...hasLength(residential_historical) ? [residential_historical.filter(s => s.sound_source === source).length] : [],
      ...hasLength(other_enclosed) ? [other_enclosed.filter(s => s.sound_source === source).length] : [],
    ].filter(Boolean)
  }, [concert_hall, club_lounge, warehouse_factory, church_cathedral, cafe_bistro, library_office, studio, residential_apartment, residential_historical, other_enclosed])

  const getCategories = useCallback(() => {
    return [
      ...hasLength(concert_hall) ? ['Concert Hall / Opera House / Theater'] : [],
      ...hasLength(club_lounge) ? ['Club / Lounge / Bar / Speakeasy'] : [],
      ...hasLength(warehouse_factory) ? ['Warehouse / Factory / Loft / Open Gallery'] : [],
      ...hasLength(church_cathedral) ? ['Church / Cathedral / Temple / Synagogue'] : [],
      ...hasLength(cafe_bistro) ? ['Cafe / Bistro / Restaurant'] : [],
      ...hasLength(library_office) ? ['Library / Open Office / Room'] : [],
      ...hasLength(studio) ? ['Sound Studio'] : [],
      ...hasLength(residential_apartment) ? ['Apartment / House / Cottage / Manor'] : [],
      ...hasLength(residential_historical) ? ['Historical Building (Museum, Castle, Fortress, Bunker)'] : [],
      ...hasLength(other_enclosed) ? ['Other'] : [],
    ].filter(Boolean)
  }, [concert_hall, club_lounge, warehouse_factory, church_cathedral, cafe_bistro, library_office, studio, residential_apartment, residential_historical, other_enclosed])

  const series: ApexOptions['series'] = [{
    name: 'Musical Instruments',
    data: [...getSeries('musical_instruments')]
  }, {
    name: 'Fabricated',
    data: [...getSeries('fabricated_sources')]
  }, {
    name: 'Hybrid',
    data: [...getSeries('hybrid_sources')]
  }, {
    name: 'Environmental',
    data: [...getSeries('environmental_sounds')]
  }, {
    name: 'Synthetic',
    data: [...getSeries('synthetic_sources')]
  }];
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            },
          },
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Streaming by Sound Source in Enclosed Settings'
    },
    xaxis: {
      categories: [...getCategories()]
    },
    yaxis: {
      title: {
        text: undefined
      },
      showForNullSeries: false,
    },
    tooltip: {
      y: {
        formatter: (val: any) => {
          return val !== 0 ? val : null
        }
      }
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