import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/212783337550"
      className="whatsapp_float" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img 
        src="/piic/wtsp.png"
        alt="WhatsApp" 
        className="whatsapp_image_icon"
      />
    </a>
  );
};

export default WhatsAppButton;