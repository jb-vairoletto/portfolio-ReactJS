import React from 'react'

function ProjectCard({ src, title, description, link }) {
  return (
    <a href={link} target='_blank'>
        <img className='hover' src={src} alt={`Imagen de ${title}`} />
        <h3>{title}</h3>
        <p>{description}</p>
    </a>
  )
}

export default ProjectCard