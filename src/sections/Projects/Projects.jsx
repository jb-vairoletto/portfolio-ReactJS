import React from 'react'
import styles from './ProjectsStyles.module.css'
import workinprogress from '../../assets/wip.png'
import sarasaimg from '../../assets/projectsimgs/sarasa.png'
import gestorimg from '../../assets/projectsimgs/gestor_c.png'
import bookecommimg from '../../assets/projectsimgs/bookecomm.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Proyectos</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={sarasaimg}
            title="Sarasa DB_"
            link="https://equipo6-23026.github.io/tpo1/"
            description="Web construida con HTML/CSS/JAVASCRIPT"
            />
            <ProjectCard 
            src={gestorimg}
            title="Gestion de inventario"
            link="https://github.com/jb-vairoletto/stockMgmt-C"
            description="Aplicacion CLI hecha en C"
            />
            <ProjectCard 
            src={bookecommimg}
            title="Tienda de libros"
            link="https://github.com/jb-vairoletto/Ecommerce-Mern"
            description="Web construida con Express/React/MongoDB"
            />
        </div>
    </section>
  )
}

export default Projects