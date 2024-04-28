import { FC } from "react";

type TVideo = {
  video?: any
  classNames?: string
  autoplay?: boolean
  loop?: boolean
}

const PlayVideo: FC<TVideo> = ({ autoplay = true, loop = true, video, classNames = '' }) => {
  return (
    <video autoPlay={autoplay} loop={loop} muted width="100%" height="100%" preload="auto" className={`${classNames}`}>
      <source src={video} type="video/webm" />
    </video>
  );
};
export default PlayVideo;
