import React, { Component } from 'react';
import logo from './../logo.jpg';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: localStorage.getItem('search') || ''
    }
  }

  handleKeyUp(e) {
    if(e.keyCode === 13) {
      this.search();
    }
  }

  handleChange(e) {
    this.setState({ term: e.target.value })
  }

  search() {
    localStorage.setItem('search', this.state.term);
    this.props.app.videoSearch(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <img src={logo} className="logo" alt="logo" />
        <input value={this.state.term} onKeyUp={(e) => this.handleKeyUp(e)} onChange={(e) => this.handleChange(e)} />
        <button className="button" onClick={() => this.search()}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
