import React, { useEffect, useRef, useState } from 'react';
import './about.css';
import CV from '../../assets/Dang_Thanh_Long_Web_Developer.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const aboutContentRef = useRef();
  const countRef = useRef(0);
  const [content, setContent] = useState('');
  const [isVisible, setVisible] = useState();

  const text =
    'Hi there 👋, My name is Long, and I am a student at Hanoi University Of Industry. I had a strong passion for Web Development since my second year.\n \n I love to building web application. Whenever possible, I also put my love of creating things using Node.js and Modern Javascript Library/Frameworks like ReactJS and VueJS ';

  const typeWriter = () => {
    if (countRef.current < text.length) {
      setContent((prev) => (prev += text.charAt(countRef.current)));
      countRef.current++;
      setTimeout(typeWriter, 40);
    }
  };
  if (isVisible) {
    aboutContentRef.current.innerText = content;
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) typeWriter();
    });

    observer.observe(aboutContentRef.current);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <section className='about section' id='about'>
      <h2 data-aos='fade-right' className='section__title'>
        About me
      </h2>
      <span data-aos='fade-right' className='section__subtitle'>
        My introduction
      </span>

      <div className='about__content'>
        <p>
          <span ref={aboutContentRef} class='typed-text'></span>
          <span class='cursor'>&nbsp;</span>
        </p>
      </div>
      <div className='download-button'>
        <a href={CV} download='' className='button botton-flex'>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
