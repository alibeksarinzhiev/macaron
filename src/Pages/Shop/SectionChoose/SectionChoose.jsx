import React from "react";

const SectionChoose = () => {
  return (
    <section className="choose">
      <div className="container">
        <h1>НАШИ МАГАЗИНЫ</h1>
        <h2>Выберите район:</h2>
        <ul>
          <div className="district-one">
            <li>
              <a href="#">Все районы</a>
            </li>
            <li>Мирзо-Улугбекский район</li>
            <li>Юнусабадский район</li>
          </div>
          <div className="dictrict-two">
            <li>Алмазарский район</li>
            <li>Сергелийский район</li>
            <li>Яккасарайский район</li>
          </div>
          <div className="district-three">
            <li>Бектемирский район</li>
            <li>Учтепинский район</li>
            <li>Яшнабадский район</li>
          </div>
          <div className="disctrict-four">
            <li>Зангиотинский район</li>
            <li>Шайхантахурский район</li>
          </div>
          <div className="district-five">
            <li>Мирабадский район</li>
            <li>Чиланзарский район</li>
          </div>
        </ul>
        <h4>Не удалось найти близжайший магазин? Попробуйте проложить маршрут:
        ПРОЛОЖИТЬ МАРШРУТ</h4>
        
      </div>
    </section>
  );
};

export default SectionChoose;
