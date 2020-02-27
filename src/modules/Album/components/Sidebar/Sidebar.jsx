import React from 'react';
import { List } from 'components/List';
import { Loading } from 'components/Loading';

const Sidebar = ({
    cover,
    title,
    artists_sort,
    isLoading,
    formats,
    artist,
    community,
    released_formatted,
    styles,
    labels,
    identifiers
}) => (
    <aside className="albumWrapper__sidebar">
        <img
            src={`https://res.cloudinary.com/dv8crhoof/image/upload/c_scale,h_900,w_900/music/${cover}`}
            alt={` ${artists_sort} - ${title} cover artwork`}
        />
        {isLoading ? (
            <Loading />
        ) : (
            <div className="albumWrapper__content">
                <div>
                    <small>Artist</small>
                    <h2>{artist}</h2>
                </div>
                <div>
                    <small>Album</small>
                    <h3>{title}</h3>
                </div>
                <div className="albumWrapper__section">
                    <List
                        title={'Genre'}
                        array={styles}
                        listClass="genreList"
                    />
                </div>
                <div className="albumWrapper__section">
                    <small>Community Rating</small>
                    {community.rating.average} / 5
                </div>
                <div className="albumWrapper__section">
                    <List
                        title={'CD Format'}
                        array={formats[0].descriptions}
                        listClass="formatsList"
                    />
                </div>
                <div className="albumWrapper__section">
                    <small>Released</small>
                    {released_formatted}
                </div>
                <div className="albumWrapper__section">
                    <small>{identifiers[0].type}</small>
                    {identifiers[0].value}
                </div>
                <div className="albumWrapper__section">
                    <List
                        title={'Catalog Number'}
                        array={labels}
                        listClass="catalogList"
                        keys={['name', 'catno']}
                    />
                </div>
            </div>
        )}
    </aside>
);

export default Sidebar;
