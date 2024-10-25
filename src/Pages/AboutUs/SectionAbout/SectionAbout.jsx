import React from 'react';
import frame from '../../../Img/Frame 14.png';
import "../Sass/AboutUs.sass";

export const About = () => {
  return (
     <section className="about container">
      <div className="about__box">
        <h2 className="about__heading2">О НАС</h2>
        <h3 className="about__heading3">
          <span className="about__h3-span">HAVAS </span>СЕТЬ ДИСКАУНТЕРОВ "У ДОМА"
        </h3>
        <p>
          Мы предлагаем нашим покупателям качественные продукты по выгодной
          цене. В наших магазинах представлены товары известных мировых и
          локальных брендов, а также товары собственного производства под
          торговой маркой HAVAS.
        </p>
      </div>
      <img src={frame} className="about__frame14" alt="frame" />
    </section>
  );
};


export default About;