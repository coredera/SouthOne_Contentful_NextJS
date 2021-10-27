import React from 'react';
import Lottie from 'react-lottie';
import LottieControl from '../Lottie/index';
import AnimatedLogo from "./GDDesktopLogo.json"



const Logo = () => {
    return <LottieControl data={AnimatedLogo} />;
  };

export default Logo;
