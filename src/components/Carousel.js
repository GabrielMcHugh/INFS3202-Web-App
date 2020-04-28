import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import camera2 from '../images/camera2.jpeg';
import camera4 from '../images/camera4.jpeg';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={3}
      >
        <Slider>
          <Slide className='bg-washed-red' index={0}>I am the first Slide.
          <img src={camera2} alt='camera2'height='150px'/> </Slide>
          <Slide className='bg-light-blue'index={1}>I am the second Slide.
          <img src={camera4} alt='camera4'height='150px'/> </Slide>
          <Slide className='bg-white'index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}