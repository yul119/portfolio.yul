import React from 'react';

const SkillsTag = ({ skills, title, aos }) => {
  return (
    <div className='skills__wrapper-content'>
      <div data-aos={`zoom-in-${aos}`} className='skills__content'>
        {/* <div data-aos='' className='skills__content'> */}
        <h2 className='skills__title'>{title}</h2>

        <div className='skills__wrapper-skills'>
          {skills.map((skill) => (
            <div className='skills__skill-name'>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTag;
