import React from 'react';
import './FeaturesSection.css';
import { BsShieldCheck, BsPinMapFill, BsTruck } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';

const featuresData = [
  {
    icon: <BsShieldCheck />,
    title: "منتجات عالية الجودة",
    text: "كل المنتجات سليمة وعالية الجودة"
  },
  {
    icon: <BsPinMapFill />,
    title: "الدفع عند الاستلام",
    text: "لن تدفع شيء حتى يصلك الطلب"
  },
  {
    icon: <BsTruck />,
    title: "شحن سريع ومجاني",
    text: "الشحن مجاني في جميع أنحاء المملكة"
  },
  {
    icon: <FaHandshake />,
    title: "استبدال المنتجات",
    text: "يمكنك استبدال اي منتج في حال وقوع أي عطب"
  }
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      
      <div className="features-title-container">
        <h2 className="features-title">لماذا نحن الأفضل ؟</h2>
        <p className="features-subtitle">ببساطة</p>
      </div>
      
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon-wrapper">
              {feature.icon}
            </div>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;