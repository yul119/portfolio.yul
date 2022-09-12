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
            <h1 className='home__title'>Dang Long</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
