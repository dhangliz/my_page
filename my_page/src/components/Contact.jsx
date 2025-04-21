// src/components/Contact.jsx
import React from 'react';

const Contact = () =>{
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact 
