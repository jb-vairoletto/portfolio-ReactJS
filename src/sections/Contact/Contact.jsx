import styles from './ContactStyles.module.css'
import React from 'react'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contacto</h1>
        <form action="">
          <div className='formGroup'>
            <label htmlFor="name" hidden>
              Nombre
            </label>
            <input type="text" name="name" id="name" placeholder='Nombre' required/>
          </div>
          <div className='formGroup'>
            <label htmlFor="email" hidden>
              Email
            </label>
            <input type="text" name="email" id="email" placeholder='Correo electrónico' required/>
          </div>
          <div className='formGroup'>
            <label htmlFor="message" hidden>
                Mensaje
            </label>
            <textarea name="message" id="message" placeholder='Mensaje' required>
            </textarea>
          </div>
          <input type="submit" className='hover btn' value="Enviar"/>
        </form>
    </section>
  )
}

export default Contact