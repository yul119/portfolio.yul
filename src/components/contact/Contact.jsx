import React, { useEffect } from 'react';
import './contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className='contact section' id='contact'>
      <h2 data-aos='fade-right' className='section__title'>
        Contact me
      </h2>
      <span data-aos='fade-right' className='section__subtitle'>
        Get in touch
      </span>
      <div className='contact__container container grid'>
        <div className='contact__wrapper-content'>
          <div data-aos='fade-up' className='contact__content'>
            <i className='bx bxl-messenger contact__icon'></i>
            <h3 className='contact__title'>Messenger</h3>
            <a
              href='https://www.facebook.com/messages/t/yul119'
              className='contact__button'
            >
              Write me{' '}
              <i className='bx bx-right-arrow-alt contact__button-icon'></i>
            </a>
          </div>
        </div>
        <div className='contact__wrapper-content'>
          <div data-aos='fade-up' className='contact__content'>
            <i className='bx bxl-gmail contact__icon'></i>
            <h3 className='contact__title'>Gmail</h3>
            <a
              href='mailto:danglong.yul119@gmail.com'
              className='contact__button'
            >
              Write me{' '}
              <i className='bx bx-right-arrow-alt contact__button-icon'></i>
            </a>
          </div>
        </div>
        <div className='contact__wrapper-content'>
          <div data-aos='fade-up' className='contact__content'>
            <i className='bx bxl-github contact__icon'></i>
            <h3 className='contact__title'>Github</h3>
            <a href='https://github.com/yul119' className='contact__button'>
              Write me{' '}
              <i className='bx bx-right-arrow-alt contact__button-icon'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
