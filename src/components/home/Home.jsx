import React from 'react';
import './home.css';
import Social from './Social';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />

          <div className='home__img'></div>

          <div className='home__info'>
            <p>Hello. My name is</p>
            <h1 className='home__name'>Dang Long</h1>
            <div className='home__title'>
              <p>
                I'm a <span>Front-End Developer</span>
              </p>
            </div>
            <div className='contact-button'>
              <a href='#contact' className='button button-flex'>
                Contact me !
              </a>
            </div>
          </div>
        </div>
        <div className='home__arrow'>
          {/* <i class='uil uil-angle-double-down arrow-down'></i> */}
          <div className='arrow-down'>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
