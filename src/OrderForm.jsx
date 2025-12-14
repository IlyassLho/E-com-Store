import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const errorStyle = { color: '#e74c3c', fontSize: '0.85rem', marginTop: '5px' };
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

function OrderForm({ mainProduct, selectedVariant }) { 
  
  const navigate = useNavigate(); 
  
  const [smiya, setSmiya] = useState('');
  const [tilifon, setTilifon] = useState('');
  const [lmdina, setLmdina] = useState('');
  const [l3onwan, setL3onwan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [smiyaError, setSmiyaError] = useState('');
  const [tilifonError, setTilifonError] = useState('');
  const [lmdinaError, setLmdinaError] = useState('');
  const [l3onwanError, setL3onwanError] = useState('');
  const [globalError, setGlobalError] = useState('');

  const validatePhone = (phone) => { if (!phone) { setTilifonError('رقم الهاتف مطلوب'); return false; } if (!phone.startsWith('06') && !phone.startsWith('07')) { setTilifonError('يجب إدخال 07 أو 06 في البداية'); return false; } if (phone.length !== 10) { setTilifonError('يجب إدخال 10 أرقام'); return false; } setTilifonError(''); return true; };
  const validateRequired = (value, setError, message) => { if (!value.trim()) { setError(message); return false; } setError(''); return true; };
  const handleNameChange = (e) => { setSmiya(e.target.value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, '')); };
  const handleCityChange = (e) => { setLmdina(e.target.value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, '')); };
  const handleAddressChange = (e) => { setL3onwan(e.target.value); };
  const handlePhoneChange = (e) => { const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10); setTilifon(value); validatePhone(value); };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateRequired(smiya, setSmiyaError, 'الاسم الكامل مطلوب') || !validatePhone(tilifon) || !validateRequired(lmdina, setLmdinaError, 'المدينة مطلوبة') || !validateRequired(l3onwan, setL3onwanError, 'العنوان الكامل مطلوب')) { return; }
    
    setIsSubmitting(true);
    setGlobalError('');
    
    const formData = new FormData();
    formData.append('Name', smiya);
    formData.append('Number', tilifon);
    formData.append('Ville', lmdina);
    formData.append('Address', l3onwan);
    formData.append('Product', mainProduct.name); 
    formData.append('Prix', selectedVariant.price);
    formData.append('Qte', selectedVariant.qte);

    fetch(SCRIPT_URL, { method: 'POST', body: formData })
    .then(response => response.json())
    .then(data => {
      if (data.result === "success") {
        navigate('/thank-you', { 
          state: { 
            mainProductName: mainProduct.name,
            selectedVariant: selectedVariant
          } 
        }); 
      } else { throw new Error("Submission failed"); }
    })
    .catch(err => {
      setIsSubmitting(false);
      setGlobalError("عفواً، وقع شي مشكل. عاود حاول.");
      console.error(err);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="order-form" noValidate>
      <div className="form-group">
        <input type="text" id="smiya" placeholder="الاسم الكامل" value={smiya} onChange={handleNameChange} onBlur={() => validateRequired(smiya, setSmiyaError, 'الاسم الكامل مطلوب')} required />
        {smiyaError && <p style={errorStyle}>{smiyaError}</p>}
      </div>
      <div className="form-group">
        <input type="tel" id="tilifon" placeholder="رقم الهاتف" value={tilifon} onChange={handlePhoneChange} onBlur={() => validatePhone(tilifon)} maxLength="10" required />
        {tilifonError && <p style={errorStyle}>{tilifonError}</p>}
      </div>
      <div className="form-group">
        <input type="text" id="lmdina" placeholder="المدينة" value={lmdina} onChange={handleCityChange} onBlur={() => validateRequired(lmdina, setLmdinaError, 'المدينة مطلوبة')} required />
        {lmdinaError && <p style={errorStyle}>{lmdinaError}</p>}
      </div>
      <div className="form-group">
        <textarea id="l3onwan" placeholder="العنوان الكامل" value={l3onwan} onChange={handleAddressChange} onBlur={() => validateRequired(l3onwan, setL3onwanError, 'العنوان الكامل مطلوب')} required></textarea>
        {l3onwanError && <p style={errorStyle}>{l3onwanError}</p>}
      </div>
      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? "جاري إرسال الطلب..." : "أطلب الآن"}
      </button>
      {globalError && <p style={{...errorStyle, textAlign: 'center', marginTop: '10px'}}>{globalError}</p>}
    </form>
  );
}

export default OrderForm;