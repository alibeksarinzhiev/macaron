import React from "react";
import "./RecipeCards.scss";
import recipelogo from "../../../Img/recipelogo.svg";
import surpa from "../../../Img/surpa.svg";
import plov from "../../../Img/uzbekskiyplov.svg";
import manty from "../../../Img/manty.svg";
import pirog from "../../../Img/myasnoipirog.svg";
import okroshka from "../../../Img/okroshka.svg";
import pelmeni from "../../../Img/pelmeni.svg";

const RecipeCards = () => {
  return (
    <section className="cards">
      <div className="container">
        <img src={recipelogo} alt="Рецепты" />
        <div className="cards__category">
          <h4>Выберите категорию:</h4>
          <h3>15 минут и готово</h3>
        </div>
        <div className="cards__content">
          {/* <div className="cards__menu">
            <div className="cards__club">
              <p>все рецепты </p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>15 минут и готово</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>3 шага и готово</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>30 минут и готово</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>60 минут и готово</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>десерты</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>завтраки</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>ланч</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>салаты</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>здоровая пища</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>национальная кухня</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>летние рецепты</p>
              <span>20</span>
            </div>
            <div className="cards__club">
            <p>соусы</p>
              <span>20</span>
            </div>
          </div> */}
          <div className="cards__boxes">
            <div className="cards__boxs">
              <img src={surpa} alt="Шурпа" />
              <h5>Шурпа</h5>
              <p>
                Вам понадобится:
                <br />
                <br />
                рис 400 гр;
                <br />
                <br />
                мясо 400 гр;
                <br />
                <br />
                морковь 300 гр;
                <br />
                <br />
                лук 1 бол...
              </p>
              <button className="cards__btn">Подробнее...</button>
            </div>
            <div className="cards__boxs">
              <img src={plov} alt="Шурпа" />
              <h5>Узбексикй плов</h5>
              <p>
                Вам понадобится:
                <br />
                <br />
                рис 400 гр;
                <br />
                <br />
                мясо 400 гр;
                <br />
                <br />
                морковь 300 гр;
                <br />
                <br />
                лук 1 бол...
              </p>
              <button className="cards__btn">Подробнее...</button>
            </div>
            <div className="cards__boxs">
              <img src={manty} alt="Шурпа" />
              <h5>Манты</h5>
              <p>
                Вам понадобится:
                <br />
                <br />
                рис 400 гр;
                <br />
                <br />
                мясо 400 гр;
                <br />
                <br />
                морковь 300 гр;
                <br />
                <br />
                лук 1 бол...
              </p>
              <button className="cards__btn">Подробнее...</button>
            </div>
            <div className="cards__boxs">
              <img src={pirog} alt="Шурпа" />
              <h5>Мясной пирог</h5>
              <p>
                Вам понадобится:
                <br />
                <br />
                рис 400 гр;
                <br />
                <br />
                мясо 400 гр;
                <br />
                <br />
                морковь 300 гр;
                <br />
                <br />
                лук 1 бол...
              </p>
              <button className="cards__btn">Подробнее...</button>
            </div>
            <div className="cards__boxs">
              <img src={okroshka} alt="Шурпа" />
              <h5>Окрошка</h5>
              <p>
                Вам понадобится:
                <br />
                <br />
                рис 400 гр;
                <br />
                <br />
                мясо 400 гр;
                <br />
                <br />
                морковь 300 гр;
                <br />
                <br />
                лук 1 бол...
              </p>
              <button className="cards__btn">Подробнее...</button>
            </div>
            <div className="cards__boxs">
              <img src={pelmeni} alt="Шурпа" />
              <h5>Пельмени</h5>
              <p>
                Вам понадобится: <br />
                <br />
                рис 400 гр; <br />
                <br />
                мясо 400 гр;
                <br />
                <br />
                морковь 300 гр;
                <br />
                <br />
                лук 1 бол...
              </p>
              <button className="cards__btn">Подробнее...</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeCards;
