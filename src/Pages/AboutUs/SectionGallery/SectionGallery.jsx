import React from 'react';
import "../Sass/AboutUs.sass";
import frame15 from "../../../Img/Frame 15.png";
import frame16 from "../../../Img/Frame 16.png";
import frame17 from "../../../Img/Frame 17.png";
import frame18 from "../../../Img/Frame 18.png";
import frame19 from "../../../Img/Frame 19.png";
import frame20 from "../../../Img/Frame 20.png";

const Gallery = () => {
  const galleryData = [
    { id: 1, imgSrc: frame15 },
    { id: 2, imgSrc: frame16 },
    { id: 3, imgSrc: frame17 },
    { id: 4, imgSrc: frame18 },
    { id: 5, imgSrc: frame19 },
    { id: 6, imgSrc: frame20 },
  ];
  return (
    <section className="galery container">
      <div className="innerGal">
        {galleryData.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img
              src={image.imgSrc}
              className="gallery-image"
              alt={`gallery-${image.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;