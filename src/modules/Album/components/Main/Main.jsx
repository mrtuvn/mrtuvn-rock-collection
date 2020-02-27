import React from 'react';
import { Loading } from 'components/Loading';
import { List } from 'components/List';

const Main = ({
    YoutubeVideoID,
    artists_sort,
    isLoading,
    title,
    tracklist,
    extraartists
}) => (
    <section className="albumWrapper__main">
        <div className="videoWrapper">
            <Loading />
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${YoutubeVideoID}?rel=0&amp;controls=0;showinfo=0;modestbranding=1;fs=0;`}
                modestbranding="1"
                showinfo="0"
                controls="0"
                frameBorder="0"
                fs="0"
                title={`Music Video for a song from ${artists_sort} - ${title}`}
            />
        </div>
        {isLoading ? (
            <Loading />
        ) : (
            <div className="albumWrapper__content">
                <div className="albumWrapper__section">
                    <List
                        title={'Tracklist'}
                        array={tracklist}
                        listClass={'trackList'}
                        keys={['position', 'title', 'duration']}
                    />
                </div>
                <div className="albumWrapper__section">
                    <List
                        title={'Credits'}
                        array={extraartists}
                        listClass="artistList"
                        keys={['name', 'role']}
                    />
                </div>
            </div>
        )}
    </section>
);

export default Main;