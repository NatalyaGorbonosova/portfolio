import React from 'react';
import {ReactComponent as EmailIcon} from '../icons/mail_icon.svg';

import {ReactComponent as SkypeIcon} from '../icons/skype_icon.svg';
import {ReactComponent as TelegramIcon} from '../icons/telegram_icon.svg';
import {ReactComponent as GithubIcon} from '../icons/github_icon.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__left">
         <a href="mailto:gorbonosova.n@mail.ru" className="footer__left">
          <EmailIcon className='footer__icon email'/>
          </a>
          <a href="mailto:gorbonosova.n@mail.ru" className="footer__left">
          
          <p className="footer__text">gorbonosova@mail.ru</p>
          </a>
        </div>
        
        <div className="footer__right">
          <a href="https://t.me/Natalya_Gorbonosova"  target="_blank" className="footer__link"> <TelegramIcon className='footer__icon'/></a>
          <a href="https://github.com/NatalyaGorbonosova" className="footer__link" target='_blank'><GithubIcon className='footer__icon'/></a>
          <a href="https://join.skype.com/invite/IHcyeGZtMN1T" className="footer__link" target='_blank'><SkypeIcon className='footer__icon'/></a>
            
            
        </div>
    </footer>
  )
}

export default Footer