import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax"

export const BearAnimation = () => {
  return (
    <ParallaxProvider>
    <ParallaxBanner
      style={{ aspectRatio: '1 / 1', overflow: 'visible' }}
      layers={[
        {
          image: "./bg1.png",
          translateY: [10, 20],
          shouldAlwaysCompleteAnimation: true,
          expanded: false
        },
        {
          image: "./bg2.png",
          translateY: [15, 20],
          shouldAlwaysCompleteAnimation: true,
          expanded: false
        },
        {
          image: "./bg3.png",
          translateY: [20, 20],
          shouldAlwaysCompleteAnimation: true,
          expanded: false
        },
      ]}
    />
    </ParallaxProvider>
  )
}