import React, { useState } from 'react';
import './header.css';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    if (this.scrollY >= 200) header.classList.add('header-scroll');
    else header.classList.remove('header-scroll');
  });

  const [isOpen, setMenu] = useState(false);
  const [isActive, setIsActive] = useState('home');

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          .yul
        </a>

        <div className={isOpen ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a
                href='#home'
                onClick={() => setIsActive('home')}
                className={
                  isActive === 'home' ? 'nav__link avtive-link' : 'nav__link'
                }
              >
                <i className='uil uil-estate nav__icon'></i>Home
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#about'
                onClick={() => setIsActive('about')}
                className={
                  isActive === 'about' ? 'nav__link avtive-link' : 'nav__link'
                }
              >
                <i className='uil uil-user nav__icon'></i>About
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#skills'
                onClick={() => setIsActive('skills')}
                className={
                  isActive === 'skills' ? 'nav__link avtive-link' : 'nav__link'
                }
              >
                <i class='uil uil-clipboard-alt nav__icon'></i>
                Skills
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#portfolio'
                onClick={() => setIsActive('portfolio')}
                className={
                  isActive === 'portfolio'
                    ? 'nav__link avtive-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-browser nav__icon'></i>Portfolio
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#contact'
                onClick={() => setIsActive('contact')}
                className={
                  isActive === 'contact' ? 'nav__link avtive-link' : 'nav__link'
                }
              >
                <i className='uil uil-message nav__icon'></i>Contact
              </a>
            </li>
          </ul>

          <i
            class='uil uil-times nav__close'
            onClick={() => setMenu(false)}
          ></i>
        </div>

        <div className='nav__toggle' onClick={() => setMenu(true)}>
          <i class='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
