import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = ({
  title = "404",
  subtitle = "الصفحة غير موجودة",
  text = "عفواً، الرابط الذي تبحث عنه غير موجود أو تم حذفه."
}) => {
  
  return (
    <div className="not-found-container" dir="rtl">
      
      <h1 className="not-found-title">{title}</h1>
      <h2 className="not-found-subtitle">{subtitle}</h2>
      <p className="not-found-text">{text}</p>
      
      <Link to="/" className="not-found-button">
        الرجوع للصفحة الرئيسية
      </Link>
    </div>
  );
};

export default NotFound;