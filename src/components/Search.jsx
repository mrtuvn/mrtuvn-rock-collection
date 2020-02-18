import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = props => (
  <div className="search">
    <Header
      showAll={props.showAll}
      handleSearchTermChange={props.handleSearchTermChange}
      searchTerm={props.searchTerm}
      showSearch
    />
    <div>
      {props.albums
        .filter(album => `${album.artist} ${album.album}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(album => <ShowCard key={album.discogsID} album={album} />)}
    </div>
  </div>
);

Search.defaultProps = {
  handleSearchTermChange: function noop() {},
  showAll: function noop() {},
  searchTerm: ''
};

Search.propTypes = {
  handleSearchTermChange: func,
  showAll: func,
  searchTerm: string,
  albums: arrayOf(
    shape({
      cover: string.isRequired,
      album: string.isRequired,
      artist: string.isRequired,
      discogsID: string.isRequired,
      YoutubeVideoID: string.isREquired,
    })
  ).isRequired
};

export default Search;