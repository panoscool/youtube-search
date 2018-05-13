import React, { Component } from 'react';
import '../style/search_bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
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
    this.props.app.videoSearch(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onKeyUp={(e) => this.handleKeyUp(e)} onChange={(e) => this.handleChange(e)} />
        <button className="button" onClick={() => this.search()}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
