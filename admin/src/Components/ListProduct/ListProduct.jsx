import React, { useEffect, useState } from 'react';
import './ListProduct.css';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    const response = await fetch('http://localhost:4000/allproducts');
    const data = await response.json();
    setAllProducts(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchInfo();
    };

    fetchData();
  }, []);

  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    });

    // After removing the product, you may want to fetch the updated data.
    await fetchInfo();
  };

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <div><i onClick={() => { remove_product(product.id) }} className="fa-solid fa-xmark listproduct-remove-icon"></i></div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
