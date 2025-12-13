import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import OrderForm from '../../OrderForm';
import './ProductDetails.css';
import ReactPixel from 'react-facebook-pixel';
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import NotFound from '../NotFound/NotFound';

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

const ProductDetails = () => {
  const { id } = useParams(); 
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  const [selectedVariant, setSelectedVariant] = useState(product ? product.variants[0] : null);
  const [selectedImage, setSelectedImage] = useState(product ? product.image : '');

  useEffect(() => {
    if (selectedVariant && product) {
      ReactPixel.track('ViewContent', {
        content_name: `${product.name} - ${selectedVariant.name}`,
        content_ids: [selectedVariant.id],
        content_type: 'product',
        value: getPriceValue(selectedVariant.price),
        currency: 'MAD'
      });
    }
  }, [selectedVariant, product]);


  if (!product) {
    return (
      <NotFound 
        title="عفواً!"
        subtitle="المنتج غير موجود"
        text="هذا المنتج غير متوفر حالياً أو تم حذفه. المرجو العودة للصفحة الرئيسية."
      />
    );
  }

  const allImages = [product.image, ...product.gallery];

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    
    ReactPixel.track('AddToCart', {
      content_name: `${product.name} - ${variant.name}`,
      content_ids: [variant.id],
      content_type: 'product',
      value: getPriceValue(variant.price),
      currency: 'MAD'
    });
  };

  const handleInitiateCheckout = () => {
    ReactPixel.track('InitiateCheckout', {
      content_name: `${product.name} - ${selectedVariant.name}`,
      content_ids: [selectedVariant.id],
      value: getPriceValue(selectedVariant.price),
      currency: 'MAD'
    });
    
    document.getElementById('variants-container').scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <div className="product-details-page">
      
      <div className="product-gallery">
        <img 
          src={selectedImage} 
          alt={product.name} 
          className="main-image" 
        />
        <div className="thumbnail-images">
          {allImages.map((imgSrc, index) => (
            <img 
              key={index} 
              src={imgSrc} 
              alt={`thumbnail ${index}`} 
              className={selectedImage === imgSrc ? 'active' : ''}
              onClick={() => setSelectedImage(imgSrc)}
            />
          ))}
        </div>
      </div>

      <div className="product-info-and-form">
        <h1>{product.name}</h1>
        
        <div className="price-container-inline" style={{justifyContent: 'flex-start'}}>
          <span className="new-price">{selectedVariant.price}</span>
        </div>
        
        {product.rating && (
          <div className="review-container">
            <div style={{justifyContent: 'flex-start'}}> 
              {Array.from({ length: product.rating }, (_, index) => (
                <span className="stars-rating" key={index}>&#9733;</span>
              ))}
            {product.reviewCount && (
              <span className="review-count"> ({product.reviewCount} تقييم)</span>
            )}
            </div>
          </div>
        )}

        <div className="product-description">
          <h3>الوصف:</h3>
          <ul>
            {product.description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>

        <button 
          className="cta-button" 
          onClick={handleInitiateCheckout}
        >
          أطلب الآن والدفع عند الإستلام
        </button>

        <div id='variants-container' className="variants-container">
          <label className="variants-label">اختر العرض الذي يناسبك :</label>
          {product.variants.map((variant) => (
            <div 
              key={variant.id} 
              className={`variant-option ${selectedVariant.id === variant.id ? 'selected' : ''}`}
              onClick={() => handleVariantChange(variant)}
            >
              <input type="radio" name="product-variant" id={variant.id} checked={selectedVariant.id === variant.id} readOnly />
              <label htmlFor={variant.id}>{variant.name}</label>
            </div>
          ))}
        </div>

        <div id="order-form-section" className="form-container">
          <h3>لاستلام طلبكم في أسرع وقت،المرجو ملأ الأستمارة بشكل مفصل</h3>
          <OrderForm mainProduct={product} selectedVariant={selectedVariant} />
        </div>
      </div>
    </div>
    
    <FeaturesSection /> 
    </>
  );
};

export default ProductDetails;