import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { Loading } from 'components/Loading';

const Card = ({ discogsID, cover, album, artist }) => (
    <li className="albumsList__albumCard albumCard">
        <Link to={`/album/${discogsID}`}>
            <LazyLoad offsetVertical={500}>
                <img
                    src={`https://res.cloudinary.com/dv8crhoof/image/upload/v1582858976/music/${cover}`}
                    alt={` ${artist} - ${album} cover artwork`}
                />
            </LazyLoad>
            <Loading />

            <hr className="albumCard__deco" />

            <div className="albumCard__overlay">
                <h2>{artist}</h2>
                <h3>{album}</h3>
            </div>
        </Link>
    </li>
);

export default Card;
