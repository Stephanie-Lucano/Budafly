import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ addItem }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3333/products/`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products.map((product) => {
    return (
      <div className="wrapper" key={product.id}>
        <article>
          <img src={product.image} />
          <h3>{product.name}</h3>
          <h5>{product.cannabinoid}</h5>
          <p>${product.price}</p>
          <Link className="item-link" to={`/products/${product.id}`}>
            {" "}
            More details
          </Link>
          <br></br>
          <button onClick={() => addItem(product)}>Add To Cart</button>
        </article>
      </div>
    );
  });
};

export default Home;
