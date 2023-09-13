import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './formulario.scss';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const Apikey = process.env.REACT_APP_EMAILJS_API_KEY;

const FormularioComponent = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({
    nombre: false,
    email: false,
    mensaje: false,
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Al cambiar el valor, establece que no hay errores para este campo.
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    if (value === '') {
      // Si el campo está vacío al hacer blur, establece el error.
      setErrors({
        ...errors,
        [name]: true,
      });
    }
  };

  const handleWhatsAppChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '') {
      setFormData({
        ...formData,
        whatsapp: value,
      });
    }
  };

  const isEmailValid = (email) => {
    // Utiliza una expresión regular simple para verificar la estructura básica del correo electrónico.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Comprobar si los campos obligatorios están llenos
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      // Mostrar un mensaje de error personalizado
      const customAlert = document.getElementById('custom-alert');
      customAlert.style.display = 'block';
      return;
    }

    // Validar el correo electrónico
    if (!isEmailValid(formData.email)) {
      alert('Debes ingresar un correo electrónico válido.');
      return;
    }

    const messageData = {
      to_name: formData.nombre,
      from_name: formData.email,
      message: formData.mensaje,
    };

    emailjs
      .send(
        serviceId,
        templateId,
        messageData,
        Apikey
      )
      .then((response) => {
        console.log('Correo electrónico enviado con éxito:', response);
        alert('Correo electrónico enviado con éxito.');
        setFormData({
          nombre: '',
          email: '',
          whatsapp: '',
          mensaje: '',
        });
        setShowAlert(true);
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
        alert(
          'Error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.'
        );
      });
  };

  return (
    <div className="form-bg-container">
      <div className="form-container animate__animated animate__fadeIn animate__faster">
        <form onSubmit={handleSubmit}>

          <div>
            <label
              htmlFor="nombre"
              id="nombre-label"
              className={errors.nombre ? 'error' : ''}
            >
              Nombre (obligatorio)
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              id="email-label"
              className={errors.email ? 'error' : ''}
            >
              Correo Electrónico (obligatorio)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              required

            />
            {errors.email && (
              <small className="error">Debes ingresar un correo electrónico válido.</small>
            )}
          </div>
          <div>
            <label htmlFor="whatsapp" id="whatsapp-label">
              WhatsApp (opcional)
            </label>
            <input
              type="text"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleWhatsAppChange}
              onBlur={handleInputBlur}
            />
            {!/^\d+$/.test(formData.whatsapp) && formData.whatsapp !== '' && (
              <span className="error">El número de WhatsApp debe contener solo números.</span>
            )}
          </div>
          <div>
            <label
              htmlFor="mensaje"
              id="mensaje-label"
              className={errors.mensaje ? 'error' : ''}
            >
              Mensaje (obligatorio)
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              required
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
        {showAlert && <div className="alert success">Mensaje enviado con éxito</div>}
      </div>
    </div>
  );
};

export default FormularioComponent;
