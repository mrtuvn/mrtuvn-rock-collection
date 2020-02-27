import React from 'react';

const ShowAllCard = ({ clearSearchTerm }) => (
    <li
        className="albumsList__albumCard albumCard albumCard--extra"
        onClick={clearSearchTerm}
    >
        <div className="iconWrapper">
            <i className="fas fa-compact-disc" />
        </div>
        <hr className="albumCard__deco" />
        <div className="albumCard__overlay">
            <h2>Show all</h2>
            <h3>Discs In Collection</h3>
        </div>
    </li>
);

export default ShowAllCard;
