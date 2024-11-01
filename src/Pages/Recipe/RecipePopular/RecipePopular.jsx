import React from "react";
import "./RecipePopular.scss";
import pelmen from "../../../Img/pelmen.svg";
import apelsin from "../../../Img/apelsin.svg";

const RecipePopular = () => {
  return (
    <section className="popular">
      <div className="container">
        <h3>Популярные рецепты:</h3>
        <div className="popular__content">
          <div className="popular__left">
            <img src={pelmen} alt="Пельмени по домашнему" />
            <h5>Пельмни по домашнему</h5>
            <p>
              Вам понадобится:
              <br />
              <br />
              рис 400 гр; <br /> <br />
              мясо 400 гр; <br />
              <br />
              морковь 300 гр; <br />
              <br />
              лук 1 бол...
            </p>
            <button className="popular__btn">Подробнее...</button>
          </div>
          <div className="popular__right">
            <img src={apelsin} alt="Апельсиноый сок" />
            <h5>Апельсиновый сок</h5>
            <p>
              Вам понадобится:
              <br />
              <br />
              рис 400 гр; <br /> <br />
              мясо 400 гр; <br />
              <br />
              морковь 300 гр; <br />
              <br />
              лук 1 бол...
            </p>
            <button className="popular__btn">Подробнее...</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipePopular;
