import { Progress } from "@chakra-ui/react"

export const Loader = () => {
  return (
    <Progress
      size='xs'
      height=".15rem"
      isIndeterminate
      isAnimated
      bgGradient="linear(primary.lightGrey, transparent)"
      sx={{ '& > div': { backgroundImage: "linear-gradient(to right,transparent 0%, #c4c4c4 50%, transparent 100%)" } }}
    />
  )
}