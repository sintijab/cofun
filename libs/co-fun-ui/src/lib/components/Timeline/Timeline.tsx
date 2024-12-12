import { Box, TextProps } from "@chakra-ui/react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { VerticalScroll } from "./VerticalScroll";
import { Fade } from "react-awesome-reveal";
import { TextBase } from "../../foundations";
import { useParallax } from 'react-scroll-parallax';

const TimelineEvent = ({ text, alignment, color, content, pt }: { text: string; alignment: 'left' | 'right'; color: string; content: string, pt: string }) => (
  
  <Box position="relative" width="100%" pt={pt}>
    <Parallax translateY={[50, -10]}>
      <Figure text={text} {...(alignment === "right" ? { right: "0", left: "auto" } : { left: "0", right: "auto" })} />
    </Parallax>
    <Fade cascade>
      <Box
        w="40%"
        float={alignment}
        textStyle="background-review"
        color={color}
      >
        {content}
      </Box>
    </Fade>
  </Box>
);

export const Timeline = ({ data }: { data: { text: string; alignment: 'left' | 'right'; color: string; content: string }[] }) => {
  return (
    <ParallaxProvider>
      <Box background="linear-gradient(#000 10%, #283048 60%, #55679a 70%, rgba(255, 255, 255, 0))" position="relative" pb="25em">
        <VerticalScroll />
        {data.map((data, index) => (
          <TimelineEvent
            pt={index === 0 ? "25rem" :  "30rem"}
            key={index}
            text={data.text}
            alignment={data.alignment}
            color={data.color}
            content={data.content}
          />
        ))}
      </Box>
    </ParallaxProvider>
  );
};


const Figure = ({ text, ...rest }: { text: string } & TextProps) => {
  const { ref } = useParallax<HTMLDivElement>({ speed: 10 });

  return (
    <figure ref={ref}>
      <TextBase textStyle="background-text" position="absolute" left="0" top="0" {...rest}>
        {text}
      </TextBase>
    </figure>
  )
}
