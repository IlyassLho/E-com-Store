import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ThankYou.css';
import ReactPixel from 'react-facebook-pixel';

const getPriceValue = (priceString) => {
  try {
    const cleanedPrice = String(priceString)
      .replace("د.م", "")
      .replace("DH", "")
      .replace(/\./g, "")
      .replace(",", ".")
      .trim();

    const priceValue = parseFloat(cleanedPrice);
    return isNaN(priceValue) ? 0 : priceValue;
  } catch (e) {
    console.error("Failed to parse price:", e);
    return 0;
  }
};

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const variant = location.state?.selectedVariant;
  const mainProductName = location.state?.mainProductName;

  useEffect(() => {
    if (variant && mainProductName) {
      const priceValue = getPriceValue(variant.price);

      ReactPixel.track('Purchase', {
        content_name: mainProductName,
        content_ids: [variant.id],
        content_type: 'product',
        value: priceValue,
        currency: 'MAD'
      });

    } else {
      navigate('/');
    }

  }, [variant, mainProductName, navigate]);


  if (!variant || !mainProductName) {
    return null;
  }

  return (
    <div className="thank-you-container">
      <img
        src="/piic/thumbs-up.png"
        alt="Thank You"
        className="thank-you-icon"
      />

      <h1 className="thank-you-title">شكرا على طلبيتك!</h1>
      <p className="thank-you-text">
        تم تسجيل طلبك بنجاح. سنتصل بك قريباً لتأكيد الطلبية.
      </p>

      <Link to="/" className="thank-you-button">
        استمر في التسوق
      </Link>
    </div>
  );
};

export default ThankYou;