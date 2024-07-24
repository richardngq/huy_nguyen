import Spline from '@splinetool/react-spline';
import { FC } from 'react';

interface Props {
  scene: string
}

const SplineWrapper: FC<Props> = ({ scene }) => {
  // return <Spline scene="https://prod.spline.design/AJx1xBJwBzUdNuPV/scene.splinecode" />
  return <Spline scene={scene} />
};

export default SplineWrapper;
