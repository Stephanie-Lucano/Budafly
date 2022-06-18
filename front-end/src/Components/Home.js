import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ addItem }) => {
  const URL = "http://localhost:3333";
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${URL}/products/`);

      setProducts(res.data);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const allProducts = products.map((product, i) => {
    return (
      <div class="column is-4">
        <Link to={`/products/${product.id}`}>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  class="has-ratio"
                  width="96"
                  src={product.image}
                  alt={product.name}
                />
              </figure>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6">{product.name}</p>
                    <p class="subtitle is-6">${product.price}</p>
                  </div>
                </div>
                <div class="buttons">
                  <button
                    class="button is-link is-normal is-responsive"
                    onClick={() => addItem(product)}
                  >
                    <strong>Add To Cart</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div class="section is-centered">
      <div class="container">
        <div class="columns is-multiline is-desktop">{allProducts}</div>
      </div>
    </div>
  );
};

export default Home;
