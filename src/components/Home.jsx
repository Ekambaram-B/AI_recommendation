import React from "react";
import { Link } from "react-router-dom";
import './style/Home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to AI Shop</h1>
      <div className="product-list">
        {/* {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))} */}
        Home Page.
      </div>
    </div>
  );
};

export default Home;
