import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SimpleSlider from './SimpleSlider';

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <section className='skills section' id='portfolio'>
      <h2 data-aos='fade-right' className='section__title'>
        Portfolio
      </h2>
      <span data-aos='fade-right' className='section__subtitle'>
        My Projects
      </span>

      <div className='portfolio__container container grid'>
        <div className='portfolio__wrapper-content'>
          <div
            data-aos='fade-right'
            className='portfolio__content'
            style={{ marginBottom: '2rem' }}
          >
            <h2>Chat app - Messenger.yul</h2>
            <div className='portfolio__slider'>
              <SimpleSlider src='https://res.cloudinary.com/dorbkvmvo/image/upload/v1665988798/portfolio/ezgif.com-gif-maker_1_o5uahf.gif' />
            </div>
            <a
              href='https://github.com/yul119/messenger.yul'
              className='button portfolio__button'
            >
              Source
            </a>
          </div>
        </div>

        <div className='portfolio__wrapper-content'>
          <div data-aos='fade-left' className='portfolio__content'>
            <h2>Movie app - Netflix.yul</h2>
            <div className='portfolio__slider'>
              <SimpleSlider src='https://res.cloudinary.com/dorbkvmvo/image/upload/v1665989452/portfolio/ezgif.com-gif-maker_2_tmy4yh.gif' />
            </div>
            <a
              href='https://github.com/yul119/netflix.yul'
              className='button portfolio__button'
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
