import React from 'react';
import Lottie from 'react-lottie';

const LottieControl = ({ data }): JSX.Element => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <a href="/" title="Guide Dogs home page">
        <Lottie options={defaultOptions} height={74}
              width={162}/>
      </a>
    </div>
  );
};

export default LottieControl;
