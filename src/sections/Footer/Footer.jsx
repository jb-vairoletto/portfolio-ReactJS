import styles from './FooterStyles.module.css'

import React from 'react'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2025 Rodrigo Méndez. <br />
        Todos los derechos reservados.</p>
    </section>
  )
}

export default Footer