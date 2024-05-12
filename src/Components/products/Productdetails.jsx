import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Assets/data";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Pic1 from "../../Assets/img/first.png";
import Pic2 from "../../Assets/img/new.png";
import Pic3 from "../../Assets/img/new1.png";
import Pic4 from "../../Assets/img/new5.png";

const Productdetails = ({details, setDetails}) => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // console.log(product)

  useEffect(() => {
    let result = data.find((item) => item.id === parseInt(id));
    // console.log(result);
    if (result) {
      setProduct(result);
    }
  }, []);

  return (
    <>

      <section class="section product-detail">
        <div class="details container" key={product.key}>
          <div class="left image-container">
            <div class="main">
              <img src={product.url} id="product-image" alt="" />
            </div>
          </div>
          <div class="right">
            <span>Home/T-shirt</span>
            <h1 id="product-name">{product.title}</h1>
            <div class="price" id="product-price">
              ${product.price}
            </div>

            <div id="product-form">
              <div>
                <select id="sizeSelector" data-price="50">
                  <option value="Select Size">Select Size</option>
                  <option value="1">32</option>
                  <option value="2">42</option>
                  <option value="3">52</option>
                  <option value="4">62</option>
                </select>
                <span></span>
              </div>
            </div>

            <div class="form">
              <input type="number"  id="quantityInput" />  
              <button
              className="addtocart"
                onClick={() => {
                  setDetails([...details, product]);
                }}
              >
                Add To Cart
              </button>
            </div>
            <h3>Product Detail</h3>
            <p>{product.descripation}</p>
          </div>
        </div>
      </section>
      {/* letest Product */}
      <section class="section featured">
        <div class="top container">
          <h1>Latest Products</h1>
          <a href="#" class="view-more">
            View more
          </a>
        </div>
        <div class="product-center container">
          <div class="product-item">
            <div class="overlay">
              <a href="" class="product-thumb">
                <img src={Pic1} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="">Concepts Solid Pink Men’s Polo</a>
              <h4>$150</h4>
            </div>
            <ul class="icons">
              <li>
                <FaRegHeart />
              </li>
              <li>
                <IoMdSearch />
              </li>
              <li>
                <FaShoppingCart />
              </li>
            </ul>
          </div>
          <div class="product-item">
            <div class="overlay">
              <a href="" class="product-thumb">
                <img src={Pic2} alt="" />
              </a>
              <span class="discount">40%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="">Concepts Solid Pink Men’s Polo</a>
              <h4>$150</h4>
            </div>
            <ul class="icons">
              <li>
                <FaRegHeart />
              </li>
              <li>
                <IoMdSearch />
              </li>
              <li>
                <FaShoppingCart />
              </li>
            </ul>
          </div>
          <div class="product-item">
            <div class="overlay">
              <a href="" class="product-thumb">
                <img src={Pic3} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="">Concepts Solid Pink Men’s Polo</a>
              <h4>$150</h4>
            </div>
            <ul class="icons">
              <li>
                <FaRegHeart />
              </li>
              <li>
                <IoMdSearch />
              </li>
              <li>
                <FaShoppingCart />
              </li>
            </ul>
          </div>
          <div class="product-item">
            <div class="overlay">
              <a href="" class="product-thumb">
                <img src={Pic4} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="">Concepts Solid Pink Men’s Polo</a>
              <h4>$150</h4>
            </div>
            <ul class="icons">
              <li>
                <FaRegHeart />
              </li>
              <li>
                <IoMdSearch />
              </li>
              <li>
                <FaShoppingCart />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productdetails;
