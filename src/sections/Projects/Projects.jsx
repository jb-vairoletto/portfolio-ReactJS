import React from 'react'
import styles from './ProjectsStyles.module.css'
import workinprogress from '../../assets/wip.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Proyectos</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={workinprogress}
            title="Sarasa DB_"
            link="https://equipo6-23026.github.io/tpo1/"
            description="Web construida con HTML/CSS/JAVASCRIPT"
            />
            <ProjectCard 
            src={workinprogress}
            title="Gestion de inventario"
            link="https://github.com/jb-vairoletto/stockMgmt-C"
            description="Aplicacion CLI hecha en C"
            />
            <ProjectCard 
            src={workinprogress}
            title="Arctic Tours"
            link="https://github.com/jb-vairoletto/arcticTours-reactApp"
            description="Web construida con React"
            />
            <ProjectCard 
            src={workinprogress}
            title="Real Time Chat"
            link="https://github.com/jb-vairoletto/realTimeChat-NodeJS"
            description="Web construida con NodeJS"
            />
        </div>
    </section>
  )
}

export default Projects