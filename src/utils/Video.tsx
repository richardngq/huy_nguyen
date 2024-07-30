import { FC } from "react";

type TVideo = {
  video?: any
  classNames?: string
  autoplay?: boolean
  loop?: boolean
  type?: string
}

const PlayVideo: FC<TVideo> = ({ autoplay = true, loop = true, video, classNames = '', type = 'video/webm' }) => {
  return (
    <video autoPlay={autoplay} loop={loop} muted width="100%" height="100%" preload="auto" className={`${classNames}`}>
      <source src={video} type={type} />
    </video>
  );
};
export default PlayVideo;
