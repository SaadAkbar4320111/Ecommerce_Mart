import { useState } from "react";

function ProductCard({ product, addToCart }) {

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="single-product-container">

      {showPopup && (
        <div className="cart-popup">
          {product.name} added to cart 🛒
        </div>
      )}

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3>{product.name}</h3>

      <p className="price">Rs. {product.price}</p>

      <button
        className="product-card-button"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;