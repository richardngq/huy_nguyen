import { FC } from "react";

type TVideo = {
  video?: any
  classNames?: string
  autoplay?: boolean
  loop?: boolean
  type?: string
}

const PlayVideo: FC<TVideo> = ({ autoplay = true, loop = true, video, classNames = '', type }) => {
  const sourceType = type ?? (video?.endsWith('.webm') ? 'video/webm' : 'video/mp4');

  return (
    <video autoPlay={autoplay} loop={loop} muted width="100%" height="100%" preload="auto" className={`${classNames}`}>
      <source src={video} type={sourceType} />
    </video>
  );
};
export default PlayVideo;
