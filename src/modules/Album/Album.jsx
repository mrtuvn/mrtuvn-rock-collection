import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';

class Album extends Component {
    state = {
        isLoading: true
    };

    updateAlbumState = data => {
        this.setState({ ...data, isLoading: false });
    };

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        const { match } = this.props;
        fetch(`https://api.discogs.com/releases/${match.params.id}`)
            .then(response => response.json())
            .then(this.updateAlbumState);
    }

    render() {
        const { album } = this.props;

        if (this.props.redirect) {
            return <Redirect to="/" />;
        }

        return (
            <div className="albumWrapper">
                <Sidebar {...this.state} {...album} />
                <Main {...this.state} {...album} />
            </div>
        );
    }
}

export default Album;
