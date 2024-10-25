import React from 'react';
import "../Sass/AboutUs.sass";
import grocery from "../../../Img/groceryAboutUs.svg";
import percent from "../../../Img/GroupAboutUs.svg";
import vector from "../../../Img/VectorAboutUs.svg";
import location from "../../../Img/locationAboutUs.svg";

export const group = () => {
  return (
      <section className="group container">
        <div className="group__box">
          <div className="col">
            <img src={grocery} alt="grocery" />
            <p>
              Дискаунтер - это выгодный для потребителей формат магазинов, в
              котором продаются товары по цене ниже обычной.
            </p>
          </div>
          <div className="col">
            <img src={percent} alt="percent" />
            <p>
              В дискаунтере низкие цены достигаются за счет снижения издержек,
              многофункциональности персонала и лучших условий с поставщиками
            </p>
          </div>
          <div className="col">
            <img src={vector} alt="vector" />
            <p>
              Для удобства посетителей, ассортимент подбирается таким образом,
              что на полках всегда можно найти все самое необходимое
            </p>
          </div>
          <div className="col">
            <img src={location} alt="location" />
            <p>
              Для удобства посетителей, ассортимент подбирается таким образом,
              что на полках всегда можно найти все самое необходимое
            </p>
          </div>
        </div>
      </section>
  );
};

export default group;