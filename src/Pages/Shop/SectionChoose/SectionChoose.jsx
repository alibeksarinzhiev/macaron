import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

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

        <div className="choose__map__right">
            <YMaps query={{ apikey: '30676071-86db-4ef1-b543-0d4e04ef5dc5' }}>
                <div style={{ width: '1200px', height: '450px' }}>
                  <Map 
                    defaultState={{ center: [42.875985, 74.603672], zoom: 10 }} 
                    width="100%" 
                    height="100%"
                  >
                    <Placemark geometry={[55.751244, 37.618423]} />
                  </Map>
                </div>
            </YMaps>
        </div>

        <h4 >Не удалось найти близжайший магазин? Попробуйте проложить маршрут:
        ПРОЛОЖИТЬ МАРШРУТ</h4>
        
      </div>
    </section>
  );
};

export default SectionChoose;
