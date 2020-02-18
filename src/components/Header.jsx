import React from 'react';
import { Link } from 'react-router-dom';
import { bool, string, func } from 'prop-types';

const Header = props => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <div>
        <input key="musicSearch" onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
        <button onClick={props.showAll}>Show all</button>
      </div>
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">Adrian&#39;s Music Collection</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  showAll: function noop() {},
  searchTerm: ''
};

Header.propTypes = {
  showSearch: bool,
  handleSearchTermChange: func,
  showAll: func,
  searchTerm: string
};

export default Header;