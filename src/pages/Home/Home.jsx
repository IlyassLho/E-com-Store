import { PRODUCTS } from '../../products';
import { Link } from 'react-router-dom';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="features-title-container">
        <h2 className="features-title">تخفيضات حصرية</h2>
        <p className="features-subtitle">اكتشف أفضل العروض قبل نفاذ الكمية</p>
      </div>
      <div className="product-list">

        {PRODUCTS.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product-card-link"
          >
            <div className="product-card">
              <img src={product.image} alt={product.name} />

              {product.oldPrice && <span className="sale-badge">تخفيض!</span>}

              <div className="product-details">
                <h3 className="product-title">{product.name}</h3>

                {product.rating && (
                  <div className="stars-rating">
                    {Array.from({ length: product.rating }, (_, index) => (
                      <span key={index}>&#9733;</span>
                    ))}
                  </div>
                )}

                <div className="price-container-inline">
                  <span className="new-price">{product.price}</span>
                  {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                </div>

              </div>
            </div>
          </Link>

        ))}
      </div>
      <FeaturesSection />
    </>
  );
};

export default Home;