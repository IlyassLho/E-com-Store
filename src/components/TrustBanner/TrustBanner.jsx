import './TrustBanner.css';
import { FaTruck, FaMoneyBillWave } from 'react-icons/fa';

const TrustBanner = () => {
  return (
    <div className="trust-banner" dir="rtl">
      <div className="trust-banner-content">
        
        <div className="banner-item">
          <FaMoneyBillWave className="banner-icon" />
          <span>الدفع عند الاستلام</span>
        </div>
        <span>+</span>
        <div className="banner-item">
          <FaTruck className="banner-icon" />
          <span>توصيل لجميع المدن</span>
        </div>
        
      </div>
    </div>
  );
};

export default TrustBanner;