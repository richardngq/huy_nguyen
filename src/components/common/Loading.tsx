import { FC } from "react"
import PlayVideo from "@/utils/Video"

export const Loading: FC = () => {
  return (
    <div className="absolute bg-black hidden md:flex flex-col justify-center items-center inset-0 z-[999]">
      <PlayVideo video={`./assets/video/loading.webm`} loop={false} classNames='w-1/3 max-w-[480px]' />
    </div>
  )
}