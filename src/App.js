import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
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

    this.videoSearch('trailers');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term), 300 });
    const { videos, selectedVideo } = this.state;
    return (
      <div> 
        <SearchBar app={this} />
        <VideoDetail app={this} video={selectedVideo} />
        <VideoList app={this} videos={videos}
        onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;