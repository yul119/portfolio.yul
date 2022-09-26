import React, { useEffect, useRef, useState } from 'react';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const aboutContentRef = useRef();
  const countRef = useRef(0);
  const [content, setContent] = useState('');
  const [isVisible, setVisible] = useState();

  const text =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo accusamus itaque dolorem officia quisquam hic, est adipisci, reprehenderit aliquam placeat odio, atque blanditiis ab reiciendis ea sequi in? Quo. ';

  const typeWriter = () => {
    if (countRef.current < text.length) {
      setContent((prev) => (prev += text.charAt(countRef.current)));
      countRef.current++;
      setTimeout(typeWriter, 50);
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
        <a href='#' className='button botton-flex'>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
