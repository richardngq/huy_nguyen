import { FC } from "react"
import PlayVideo from "./Video"

export const Loading: FC = () => {
  return (
    <div className="absolute bg-black flex flex-col justify-center items-center inset-0">
      <PlayVideo video={`./assets/video/jitter.webm`} loop={false} classNames='w-2/5' />
    </div>
  )
}