import { Box } from "@chakra-ui/react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

export const VerticalScroll = ({ color }: { color?: string }) => {
  return (
    <>
    <Controller>
      <Scene triggerElement="#line-trigger" duration={1000} offset="800px">
        {(progress: any) => (
          <Tween
            to={{
              transform: "scaleY(1)"
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <Box w="8px" backgroundColor={color || "#FFFFFF"} h="1000px" transform="scaleY(0)" margin="0 auto" transformOrigin="top" mb="100px"/>
          </Tween>
        )}
      </Scene>
    </Controller>
  </>
  )
}