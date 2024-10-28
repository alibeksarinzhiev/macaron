import React from 'react';
import "../Sass/AboutUs.sass";
import shoper from "../../../Img/shopper.svg";
import person from "../../../Img/person.svg";
import food from "../../../Img/food.svg";

export const AboutInfo = () => {
  return (
    <section className="about__info container">
      <div className="info__left">
        <h2>Немного о нас</h2>
        <p>
          Дискаунтер — формат розничной торговли, предоставляющий потребителю
          качественную продукцию по максимально низким ценам, работающий в
          формате «магазин у дома». Один из примечательных аспектов сети Havas —
          низкая цена на всю продукцию, комфортные условия в магазинах, а также
          близость к дому. Сегодня Havas есть во всех районах Ташкента, что
          помогает жителям столицы покупать товары в удобных для них магазинах,
          не тратя на это много времени и сил. Но все успехи сети дискаунтера —
          это результат любви и доверия покупателей к Havas. В свою очередь
          команда Havas благодарит всех покупателей и клиентов сети. Именно они
          вдохновляют команду Havas и побуждают к созданию новых удобств и
          возможностей.
        </p>
        <span>
          В ближайшие годы сеть Havas планирует открыть свои удобные, доступные
          и комфортные магазины во всех городах и районах Узбекистана.
        </span>
      </div>
      <div className="info__right">
        <div className="right__box">
          <img src={shoper} alt="" />
          <p>55 Магазинов</p>
        </div>
        <div className="right__box">
          <img src={person} alt="" />
          <p>530 Сотрудников по всей сети магазинов</p>
        </div>
        <div className="right__box">
          <img src={food} alt="" />
          <p>1200 Разновидностей продовольственных товаров</p>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;