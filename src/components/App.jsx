import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Search';
import Details from './Details';
import preload from '../../data/rocksData.json';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  // Init state
  state = {
    searchTerm: ''
  };

  showAll = () => {
    this.setState({ searchTerm: '' });
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Search
                  handleSearchTermChange={this.handleSearchTermChange}
                  searchTerm={this.state.searchTerm}
                  showAll={this.showAll}
                  albums={preload.albums}
                  {...props}
                />
              )}
            />
            <Route
              path="/details/:id"
              render={props => (
                <Details albums={preload.albums.find(album => props.match.params.id === album.discogsID)} {...props} />
              )}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;