import { useState } from "react";
import { useDispatch } from "react-redux";
import { getOrderPizza } from "../redux/actionCreator";
import "./css/pizza.css";

export const PizzaCard = (props) => {
  const { id, img, name, size, type, price } = props.data;

  const typeNames = ["традиционное", "тонкое"];

  const [pizzaorder, setPizzaorder] = useState(1);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [priceAction, setPriceAction] = useState(price);

  let dispatch = useDispatch();

  const counIncrement = () => {
    setPizzaorder(pizzaorder + 1);
    dispatch(getOrderPizza(setSelected));
  };

  const changePriceOfSize = (i) => {
    if (i == 0) {
      setPriceAction(price);
    }

    if (i == 1) {
      setPriceAction(price + 10);
    }

    if (i == 2) {
      setPriceAction(price + 20);
    }
    return setPriceAction, setActiveSize(i);
  };

  let setSelected = {
    id: id,
    name: name,
    img: img,
    dough: activeType,
    size: activeSize,
    count: 1,
    price: priceAction,
  };

  return (
    <div className="cards" style={{ width: 18 + "rem" }} key={id}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
      </div>
      <div className="block-kids">
        <ul className="size-dough">
          {type.map((el, i) => {
            return (
              <li
                key={i}
                onClick={() => setActiveType(el)}
                className={activeType === el ? "active" : ""}
              >
                {typeNames[el]}
              </li>
            );
          })}
        </ul>
        <ul className="size-pizza">
          {size.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => changePriceOfSize(i)}
                className={activeSize === i ? "active" : ""}
              >
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="price">
        <h4>от {priceAction} грн.</h4>
        <button
          className="btn btn-outline-danger"
          key={id}
          onClick={() => counIncrement()}
        >
          + Добавить {pizzaorder - 1}
        </button>
      </div>
    </div>
  );
};
