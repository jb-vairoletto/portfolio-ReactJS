import React from 'react'
import styles from './HeroStyles.module.css'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import lightkedinIcon from '../../assets/linkedin-light.svg'
import darkedinIcon from '../../assets/linkedin-dark.svg'
import lighthubIcon from '../../assets/github-light.svg'
import darkhubIcon from '../../assets/github-dark.svg'

import heroImg from '../../assets/heroImg.png'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? lightkedinIcon : darkedinIcon;
  const githubIcon = theme === 'light' ? lighthubIcon : darkhubIcon;

  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} 
        src={heroImg} 
        alt="foto de perfil de Rodrigo Mendez" />
        <img className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon" 
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rodrigo <br />Mendez
        </h1>
        <h2>Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/mendez-rodrigo/" target="_blank">
            <img src={linkedinIcon} alt="Icono de Linkedin" />
          </a>
        </span>
        <span>
          <a href="https://github.com/jb-vairoletto" target="_blank">
            <img src={githubIcon} alt="Icono de Github" />
          </a>
        </span>
        <p className={styles.description}> 
          Mis amigos me dicen Vairo. <br />Me gustan los desafíos y disfruto crear soluciones que marquen la diferencia. ¡Trabajemos juntos!
        </p>
        <a href={CV} download>
          <button className='hover'>
            Currículum
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero