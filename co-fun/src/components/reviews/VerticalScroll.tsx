import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";

export const VerticalScroll = () => {

  const VerticalLineStyle = styled.div`
  .vertical-line {
    width: 8px;
    background-color: #FFFFFF;
    height: 1000px;
    transform: scaleY(0);
    margin: 0 auto;
    transform-origin: top;
    margin-bottom: 100px;
  }
`;
  return (
    <VerticalLineStyle>
    <Controller>
      <Scene triggerElement="#line-trigger" duration={1000}>
        {(progress: any) => (
          <Tween
            to={{
              transform: "scaleY(1)"
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <div className="vertical-line" />
          </Tween>
        )}
      </Scene>
    </Controller>
  </VerticalLineStyle>
  )
}