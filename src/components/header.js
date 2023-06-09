import logo from "../img/Group 1.png";
import "./css/header.css";
import basket from "../img/basket.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const pizza = useSelector((state) => state.order.orderPizza);

  let price = pizza.reduce((sum, item) => {
    return item.price + sum;
  }, 0);

  let count = pizza.reduce((sum, item) => {
    return item.count + sum;
  }, 0);

  return (
    <div className="header">
      <div className="header-logo">
        <NavLink to="/">
          <img src={logo} alt="/" />
        </NavLink>
      </div>
      <div className="btn-blog">
        <NavLink to="/blog">
          <button className="btn btn-primary">Blog</button>
        </NavLink>
      </div>
      <div className="basket">
        <NavLink to="/basket" className="navl">
          <button className="btn-bt">
            <span>{price} грн</span>
            {" | "}
            <img src={basket} alt="/" /> <span>{count}</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
