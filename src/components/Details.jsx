import React, { Component } from 'react';
import axios from 'axios';
import { shape, string } from 'prop-types';
import Spinner from './Spinner';
import Header from './Header';

class Details extends Component {
  state = {
    apiData: { tracklist: '', extraartists:'', styles:'', releasedFormatted:'', rating: '', barcode: '' }
  };

  componentDidMount() {
    axios.get(`https://api.discogs.com/releases/${this.props.albums.discogsID}`).then(response => {
      this.setState({ apiData: {
        tracklist:response.data.tracklist,
        extraartists: response.data.extraartists, 
        styles: response.data.styles, 
        releasedFormatted: response.data.released_formatted, 
        rating: response.data.community.rating.average,
        barcode: response.data.identifiers[0].value,
        format: response.data.formats[0].name,
        label: response.data.companies[0].name,
          } });
    });
  }

  render() {
    const { artist,album, cover, YoutubeVideoID } = this.props.albums;
    let infoComponent
    let detailsComponent;

    if (this.state.apiData.tracklist) {
      infoComponent = (
        <div>
        <p><strong>Genre: </strong>{this.state.apiData.styles[0]}</p>
        <p><strong>Release Date (of this release): </strong>{this.state.apiData.releasedFormatted}</p>
        <p><strong>Discogs Rating: </strong>{this.state.apiData.rating} / 5</p>
        <p><strong>Format: </strong>{this.state.apiData.format}</p>
        <p><strong>Label: </strong>{this.state.apiData.label}</p>
        <p><strong>Identifier (Barcode): </strong>{this.state.apiData.barcode}</p>
          </div>
      );

      detailsComponent = (
        <div className="tracklist">
          <h3>Tracklist: </h3>
          <ul>
      {this.state.apiData.tracklist.map((track) => {
        let element = '';
        /* eslint-disable no-underscore-dangle */
        if (track.type_=== "track") {element = (<li key={track.position}>{track.position}. {track.title} ({track.duration})</li>)}
        else {element = (<li key={track.position}><strong>{track.title}: </strong></li>)};
        return element;
      })}
          </ul>
          </div>
      );
    } else {
      infoComponent = <Spinner />;
      detailsComponent = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <img src={`/public/img/cover/${cover}`} alt={`Poster for ${artist} - ${album}`} />
          <div className="infoComponent">
          <div>
          <h1>{artist}</h1>
            <h2>{album}</h2>
            <hr />
            <div>{infoComponent}</div>
          </div>
          </div>
        </section>
        <div className="ribbon">
            <section>{detailsComponent}</section>
        </div>
        <section>
          <div className="video-wrapper"> 

          <iframe
            src={`https://www.youtube-nocookie.com/embed/${YoutubeVideoID}?rel=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Music Video for one of the songs from ${artist} - ${album}`}
          />
          </div>
        </section>
      </div>
    );
  }
}

Details.propTypes = {
  albums: shape({
    cover: string.isRequired,
    album: string.isRequired,
    artist: string.isRequired,
    discogsID: string.isRequired,
    YoutubeVideoID: string.isREquired,
  }).isRequired
};

export default Details;