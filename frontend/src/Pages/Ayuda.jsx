import React from 'react'
import '../Pages/css/Ayuda.css'
import { useState } from 'react'

export const Ayuda = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || text.trim() === '') {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    try {
      const response = await fetch('URL_DE_TU_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, text }),
      });
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      
    }
  };




  return (
    <div className="ayuda">
      <h1>Aquí estamos, ¿Necesitas ayuda?</h1>
        <div className="ayuda-container">
            <div className="ayuda-fields">
                <input type="text" placeholder="Name" value={name} onChange={handleNameChange} required/>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Cuéntanos aquí" value={text} onChange={handleTextChange} required></textarea>

            </div>
            <button type="submit">Home</button>
        </div>
    </div>
  )
}
