import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  const src = "/images/hero-img.jpg";
  return (
    <Wrapper>
      <Picture>
        <Source type="image/avif" srcSet={`${src.replace('.jpg', '.avif')} 1x, ${src.replace('.jpg', '@2x.avif')} 2x, ${src.replace('.jpg', '@3x.avif')} 3x`}/>
        <Source type="image/jpeg" srcSet={`${src} 1x, ${src.replace('.jpg', '@2x.jgp')} 2x, ${src.replace('.jpg', '@3x.jgp')} 3x`}/>
        <HeroImage src={src} alt="Cute cat - first image"/>
      </Picture>
      <Swoop src="/swoop.svg" alt="fist image background - black"/>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const Picture = styled.picture``;
const Source = styled.source``;
const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
