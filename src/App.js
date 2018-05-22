import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';

const API_KEY = 'AIzaSyDoW6frgWEj8lpTgJZgrRzHnegmtNCf2WA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('love songs');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  videoSelect(video) {
    this.setState({selectedVideo: video})
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <Router>
      <div className="container">
        <SearchBar app={this} />
        <div className="row">
          <div className="col-md-8 col-xs-12">

            <Route path="/" render={() => <VideoDetail app={this} video={selectedVideo} />} />

          </div>
          <div className="col-md-4 col-xs-12">
            <VideoList app={this} videos={videos} />
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
