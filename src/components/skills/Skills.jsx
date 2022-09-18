import React, { useEffect } from 'react';
import './skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SkillsTag from './SkillsTag';

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <section className='skills section' id='skills'>
      <h2 data-aos='fade-right' className='section__title'>
        Skills
      </h2>
      <span data-aos='fade-right' className='section__subtitle'>
        My technical skills
      </span>

      <div className='skills__container container grid'>
        <SkillsTag
          aos='right'
          title='Frontend'
          skills={[
            'HTML',
            'CSS/SCSS',
            'Javascript',
            'ReactJS',
            'Redux/Redux Toolkit',
            'Bootstrap',
            'Material UI',
            '...',
          ]}
        />
        <SkillsTag
          aos='left'
          title='Backend'
          skills={['NodeJS', 'ExpressJS', 'MongoDB', 'SocketIO', 'JWT', '...']}
        />
        <SkillsTag
          aos='right'
          title='Javascript Advanced'
          skills={[
            'ES6+',
            'Hoisting',
            'Bind/Call/Apply',
            'Event bubbling/capturing',
            'Async/Await function',
            '...',
          ]}
        />
        <SkillsTag
          aos='left'
          title='Other'
          skills={['Github', 'OOP', 'Linux', '...']}
        />
      </div>
    </section>
  );
};

export default Skills;
