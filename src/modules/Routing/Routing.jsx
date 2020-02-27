import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Album } from 'modules/Album';
import { Home } from 'modules/Home';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import firebase from 'firebase.js';

class Routing extends Component {
    state = {
        searchTerm: '',
        dataLoaded: false,
        albumsList: {},
        redirect: false
    };

    setRedirectState = newState => {
        this.setState({ redirect: newState });
    };

    handleSearchInputChange = event => {
        const { value } = event.currentTarget;
        this.setState(
            {
                searchTerm: value
            },
            () => this.setRedirectState(true)
        );
    };

    clearSearchTerm = () => {
        this.setState({ searchTerm: '' }, () => this.setRedirectState(true));
    };

    componentDidMount = () => {
        this.firebaseRef = firebase.database().ref('/albums');

        this.firebaseCallback = this.firebaseRef.on('value', snap => {
            let albumData = snap.val();
            albumData.sort((a, b) => a.artist.localeCompare(b.artist));
            this.setState({ albumsList: albumData, dataLoaded: true });
        });
    };

    componentWillUnmount = () => {
        this.firebaseRef.off('value', this.firebaseCallback);
    };

    render() {
        const { searchTerm, albumsList, dataLoaded, redirect } = this.state;
        const {
            handleSearchInputChange,
            clearSearchTerm,
            setRedirectState
        } = this;
        return (
            <div className="appWrapper">
                <Header
                    clearSearchTerm={clearSearchTerm}
                    searchTerm={searchTerm}
                    handleSearchInputChange={handleSearchInputChange}
                />
                <main className="mainWrapper appWrapper_mainWrapper">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <Home
                                    redirect={redirect}
                                    setRedirectState={setRedirectState}
                                    clearSearchTerm={clearSearchTerm}
                                    albumsList={albumsList}
                                    searchTerm={searchTerm}
                                    {...props}
                                />
                            )}
                        />
                        <Route
                            path="/album/:id"
                            render={props => {
                                if (!dataLoaded) {
                                    return null;
                                }
                                return (
                                    <Album
                                        redirect={redirect}
                                        album={albumsList.find(
                                            album =>
                                                props.match.params.id ===
                                                album.discogsID
                                        )}
                                        {...props}
                                    />
                                );
                            }}
                        />
                        <Route component={Home} />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Routing;