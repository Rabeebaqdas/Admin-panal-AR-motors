import { Link } from "react-router-dom";
import "./product.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const product = useSelector(state=>state.product.products.find(item=>item._id===productId));

  return (
    <><Sidebar /><div className="product">
          <div className="productTitleContainer">
              <h1 className="productTitle">Product</h1>
              <Link to="/newproduct">
                  <button className="productAddButton">Create</button>
              </Link>
          </div>
          <div className="productTop">
          
              <div className="productTopRight">
                  <div className="productInfoTop">
                      <img src={product.img} alt="" className="productInfoImg" />
                      <span className="productName">{product.title}</span>
                  </div>
                  <div className="productInfoBottom">
                      <div className="productInfoItem">
                          <span className="productInfoKey">id:</span>
                          <span className="productInfoValue">{product._id}</span>
                      </div>
                      <div className="productInfoItem">
                          <span className="productInfoKey">sales:</span>
                          <span className="productInfoValue">5123</span>
                      </div>
                      <div className="productInfoItem">
                          <span className="productInfoKey">in stock:</span>
                          <span className="productInfoValue">{product.inStock ? "true" : "false"}</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="productBottom">
              <form className="productForm">
                  <div className="productFormLeft">
                      <label>Product Name</label>
                      <input type="text" value={product.title} />
                      <label>Product Description</label>
                      <input type="text" value={product.desc} />
                      <label>Product Price</label>
                      <input type="text" value={`$ ${product.price}`} />
                      <label>Color</label>
                      <input type="text" value={` ${product.color}`} />
                      <label>Year</label>
                      <input type="text" value={` ${product.year}`} />
                      <label>Category</label>
                      <input type="text" value={` ${product.catagories}`} />

                  </div>
                  <div className="productFormRight">
                      <div className="productUpload">
                          <img src={product.img} alt="" className="productUploadImg" />
                        
                      </div>
               
                  </div>
              </form>
          </div>
      </div></>
  );
}
