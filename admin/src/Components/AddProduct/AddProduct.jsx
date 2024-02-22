import React from "react";
import './AddProduct.css'
const AddProduct = () => {
    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input type="text" name="name" placeholder="type here" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type="text" name="old_price" placeholder="Type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input type="text" name="new_price" placeholder="Type here" />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select name="category" className="add-product-selector" >
                    <option value="robotica">Robótica</option>
                    <option value="dispositivos">Dispositivos</option>
                    <option value="outlet">Outlet</option>
                </select>
            </div>
            <div className="addprouduct-itemfield">
                <label htmlFor="file-input">
                    <img src="{upload_area}" className="addproduct-thumnail-img" />
                </label>
                <input type="file" name="image" id="file-input" hidden />
            </div>
            <button className="addproduct-btn"> ADD</button>
        </div>
    )
}

export default AddProduct