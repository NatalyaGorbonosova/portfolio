import React from 'react';
import {ReactComponent as LinkIcon} from '../icons/link_icon.svg';
import {ReactComponent as GithubIcon} from '../icons/github_icon.svg';

const ProjectItem = ({ id, title, description, images, stack, link, linkGithub}) => {
  return (
    <section className='project'>
        <div className='project__left'>
          <img className='project__img' src={images[0]} alt='photo project'></img>
            
            <div className='project__links'>
                <a href={link} target='_blank'> 
                  <LinkIcon className='link_icon'/>
                   Ссылка на сайт
                </a>
                <a href={linkGithub} target='_blank'>
                  <GithubIcon className='link_icon'/>
                  Ссылка на Github
                </a>
            </div>
        </div>
        <div className='project__right'>
          <h2>{title}</h2>
          <h3>В рамках проекта:</h3>
         
            {description.map(item => (<li key={item} className='project__description'>{item}</li>))}
          
          <h3>Технологический стек:</h3>
          <p>{stack.map(item => (<span>{item}, </span>))}</p>
        </div>
    </section>
  )
}

export default ProjectItem