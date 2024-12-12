import React, { ReactNode } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  BoxProps,
} from '@chakra-ui/react'
import Slider from 'react-slick';
import { ArrowLeftIcon, ArrowRightIcon } from '../../foundations';

// Settings for the slider
const basicSettings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

interface ISettings {
  dots?: boolean;
  arrows?: boolean;
  fade?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  speed?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  slidesToScroll?: number;
}

interface ICards {
  title: string;
  text: string;
  image: string;
}

export const Carousel = ({ cards, settings, ...rest }: { cards: ICards[] | ReactNode[], settings?: ISettings } & BoxProps) => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'} {...rest}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <ArrowLeftIcon width="21px" height="21px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <ArrowRightIcon width="21px" height="21px" />
      </IconButton>
      {/* Slider */}
      <Slider {...basicSettings} {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            {...((card as ICards)?.image && {
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${(card as ICards).image})`
            })}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative" display="flex" justifyContent="center" alignItems="center" {...rest}>
              {!!(card as ICards).title && <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {(card as ICards).title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {(card as ICards).text}
                </Text>
              </Stack>}
              {!(card as ICards).title && !(card as ICards).text ? card as ReactNode : <></>}
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}