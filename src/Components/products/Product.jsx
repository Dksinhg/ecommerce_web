import React, { useState } from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { data } from "../../Assets/data";
import { Link } from "react-router-dom";

const Product = ({ cart, setCart }) => {
  const [product, setProduct] = useState(data);

  return (
    <>
      <section class="section all-products" id="products">
        <div class="top container">
          <h1>All Products</h1>
          <form>
            <select>
              <option value="1">Defualt Sorting</option>
              <option value="2">Sort By Price</option>
              <option value="3">Sort By Popularity</option>
              <option value="4">Sort By Sale</option>
              <option value="5">Sort By Rating</option>
            </select>
            <span>
              <i class="bx bx-chevron-down"></i>
            </span>
          </form>
        </div>
        <div class="product-center container">
          {product.map((item) => (
            <div class="product-item">
              <div class="overlay">
                <a href="" class="product-thumb">
                  <img src={item.url} alt="" />
                </a>
                <span class="discount">10%</span>
              </div>
              <div class="product-info">
                <span>{item.title}</span>
                <Link to={`Productdetails/${item.id}`}>
                  {item.descripation}
                </Link>
                <h4> ₹ {item.price}</h4>
              </div>
              <ul class="icons">
                <li>
                  <FaRegHeart />
                </li>
                <li>
                  <IoMdSearch />
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCart([...cart, item]);
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section class="pagination">
        <div class="container">
          <span>1</span> <span>2</span> <span>3</span> <span>4</span>
          <span>
            <FaArrowRight />
          </span>
        </div>
      </section>
    </>
  );
};

export default Product;
