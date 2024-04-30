import React from 'react';
import './ProductCarousel.css'; // Import the stylesheet

// Define type for Product
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="product-carousel">
      <h2>Products</h2>
      <div className="carousel">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
