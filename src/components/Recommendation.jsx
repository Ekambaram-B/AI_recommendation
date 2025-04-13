import React, { useEffect, useState } from "react";
import '../components/style/Recommendation.css';

const Recommendation = () => {
  //const [recommendedProducts, setRecommendedProducts] = useState([]);

  // useEffect(() => {
  //   const fetchRecommendations = async () => {
  //     try {
  //       const userHistory = JSON.parse(localStorage.getItem("userHistory")) || [];
  //       const recommended = products.filter((p) => userHistory.includes(p.category));
  //       setRecommendedProducts(recommended);
  //     } catch (error) {
  //       console.error("Error fetching recommendations", error);
  //     }
  //   };
  //   fetchRecommendations();
  // }, []);

  return (
    <div>
      <h1>Recommended for You</h1>
      {/* <div className="product-list">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Recommendation;
