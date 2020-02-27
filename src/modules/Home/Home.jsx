import React, { Component } from 'react';
import { Card, ShowAllCard } from 'components/Card';
import { Loading } from 'components/Loading';
import { BackToTop } from 'components/BackToTop';

class Home extends Component {
    componentDidUpdate() {
        if (this.props.redirect) {
            this.props.setRedirectState(false);
        }
    }

    componentDidMount() {
        this.props.setRedirectState(false);
    }

    render = () => {
        const { searchTerm, albumsList, clearSearchTerm } = this.props;

        if (Object.keys(albumsList).length === 0) {
            return <Loading />;
        }

        return (
            <div className="main--wrapper">
                <ul className="container albumsList">
                    {albumsList
                        .filter(
                            album =>
                                `${album.artist} ${album.album}`
                                    .toUpperCase()
                                    .indexOf(searchTerm.toUpperCase()) >= 0
                        )
                        .map(album => (
                            <Card key={album.discogsID} {...album} />
                        ))}
                    {searchTerm.length > 0 ? (
                        <ShowAllCard clearSearchTerm={clearSearchTerm} />
                    ) : null}
                </ul>
                <BackToTop scrollStepInPx="50" delayInMs="16.66" />
            </div>
        );
    };
}

export default Home;