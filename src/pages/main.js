import { baza } from "../data/data";
import { PizzaCard } from "../components/pizzaCard";
import "./css/main.css";

export const Main = () => {
  return (
    <div>
      <div className="main-select">
        <div className="select">
          <button className="btn btn-light">Все</button>
          <button className="btn btn-light">Мясные</button>
          <button className="btn btn-light">Вегетарианская</button>
          <button className="btn btn-light">Гриль</button>
          <button className="btn btn-light">Острые</button>
          <button className="btn btn-light">Закрытые</button>
        </div>
        <div className="filters">
          <select
            className="form-select"
            defaultValue={"DEFAULT"}
            aria-label="Default select example"
          >
            <option value="DEFAULT">сортировка по:</option>
            <option value="1">популярности</option>
            <option value="2">по цене</option>
            <option value="3">по алфавиту</option>
          </select>
        </div>
      </div>
      <div className="pizza">
        <h1>Все пиццы</h1>
        <div className="pizza-cards">
          {baza.map((item, i) => {
            return <PizzaCard data={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};
