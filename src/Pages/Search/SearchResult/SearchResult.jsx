import React from 'react';
import './SearchResult.scss'

const SearchResult = ({title, text, img, date}) => {
    return (
        <div className="search__card">
            <img src={img} alt="" />
            <div className="search__card__text">
                <p className='search__card__text__date'>{date}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <button>Читать подробнее...</button>
            </div>
        </div>
    );
};

export default SearchResult;