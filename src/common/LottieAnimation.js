import React from 'react';
import Lottie from 'react-lottie';

const LottieAnimation = ({ animtion, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animtion,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie options={defaultOptions} width={width} height={height}/>
  );
};

export default LottieAnimation;
