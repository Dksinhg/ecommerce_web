import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Pic1 from "../../Assets/img/first.png";
import Pic2 from "../../Assets/img/new.png";
import Pic3 from "../../Assets/img/new1.png";
import Pic4 from "../../Assets/img/new5.png";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, details, setDetails }) => {
  console.log(cart);
  return (
    <>
      {/* <!--cart--> */}
      <div class="container cart">
        <table id="cartTable">
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {details.map((item) => (
            <>
              <tr>
                <td class="product">
                  <span class="hello">
                    <img src={item.url} alt="Product 1" />
                    <p> {item.title}</p>
                  </span>
                </td>
                <td class="Quantity">
                  <input type="number" min="0" />
                </td>
                <td class="subtotal"> ₹ {item.price}</td>
                <td>
                  <Link href="#" class="action-icon">
                    <MdOutlineDelete />
                  </Link>
                </td>
              </tr>
            </>
          ))}
          {cart.map((item) => (
            <>
              <tr>
                <td class="product">
                  <span class="hello">
                    <img src={item.url} alt="Product 1" />
                    <p>{item.title}</p>
                  </span>
                </td>
                <td class="Quantity">
                  <input type="number" min="0" />
                </td>
                <td class="subtotal"> ₹ {item.price}</td>
                <td>
                  <Link href="#" class="action-icon">
                    <MdOutlineDelete />
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </table>
        <div class="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td id="subtotal">₹ 0.00</td>
            </tr>
          </table>
          <Link to="payment" class="checkout btn">
            Proceed To Checkout
          </Link>
        </div>
      </div>

      {/* <!-- Latest Products --> */}
      <section class="section featured">
        <div class="top container">
          <h1>Latest Products</h1>
          <Link href="#" class="view-more">
            View more
          </Link>
        </div>
        <div class="product-center container">
          <div class="product-item">
            <div class="overlay">
              <Link href="" class="product-thumb">
                <img src={Pic1} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link href="">Concepts Solid Pink Men’s Polo</Link>
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
              <Link href="" class="product-thumb">
                <img src={Pic2} alt="" />
              </Link>
              <span class="discount">40%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link href="">Concepts Solid Pink Men’s Polo</Link>
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
              <Link href="" class="product-thumb">
                <img src={Pic3} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link href="">Concepts Solid Pink Men’s Polo</Link>
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
              <Link href="" class="product-thumb">
                <img src={Pic4} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link href="">Concepts Solid Pink Men’s Polo</Link>
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

export default Cart;
