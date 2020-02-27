import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ handleSearchInputChange, searchTerm, clearSearchTerm }) => (
    <header className="header">
        <div className="container header__container">
            <div className="header__section">
                <Link to="/">
                    <h1>Mrtuvn's Music Collection</h1>
                </Link>
            </div>
            <div className="header__section search">
                <label className="search__label display--hidden">
                    Search Collection
                </label>
                <input
                    type="text"
                    className="search__input"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    placeholder="Search Collection"
                />
                {searchTerm.length > 0 ? (
                    <button onClick={clearSearchTerm} class="search__button">
                        Show all
                    </button>
                ) : null}
            </div>
        </div>
    </header>
);

export default Header;
