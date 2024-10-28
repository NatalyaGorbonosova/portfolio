import React from 'react';
import {ReactComponent as EmailIcon} from '../icons/mail_icon.svg';
import {ReactComponent as VKIcon} from '../icons/vk_icon.svg';
import {ReactComponent as SkypeIcon} from '../icons/skype_icon.svg';
import {ReactComponent as TelegramIcon} from '../icons/telegram_icon.svg';
import {ReactComponent as GithubIcon} from '../icons/github_icon.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__left">
            <EmailIcon className='footer__icon email'/>
            <p className="footer__text">gorbonosova@mail.ru</p>
        </div>
        <div className="footer__right">
            <TelegramIcon className='footer__icon'/>
            <VKIcon className='footer__icon'/>
            <GithubIcon className='footer__icon'/>
            <SkypeIcon className='footer__icon'/>
        </div>
    </footer>
  )
}

export default Footer