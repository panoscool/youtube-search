import React, { Component } from 'react';
import '../style/search_bar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {term: ''};
    }

    render() {
        return(
            <div className="search-bar">
                <input 
                value={this.state.term}
                /* onChange={event => this.onInputChange(event.target.value)} */ 
                onKeyUp={(e)=> e.keyCode === 13} 
                onChange={(e)=> this.setState({term: e.target.value})} />
                <button className="button" onClick={() => this.onInputChange()}>Search</button>
            </div>
        );
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.app.videoSearch();
    }
}

export default SearchBar;