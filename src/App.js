import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';

const customHistory = createBrowserHistory()
const API_KEY = 'AIzaSyDoW6frgWEj8lpTgJZgrRzHnegmtNCf2WA';

const Home = () => (
  <div>
    Home
  </div>
)

const VideoWrapper = () => {
  // API CALL TO YOUTUBE API
  // - VIDEO ITEM DETAILS
  // - RELEVANT VIDEOS

  return (
    <div>
      <VideoDetail app={this}  />
      <VideoList app={this} videos={videos} />
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);

    this.history = customHistory;

    this.state = {
      videos: [],
    }
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
      });
    });
  }

  render() {
    const { videos } = this.state;

    return (
      <Router history={customHistory}>
        <div className="container">

          <SearchBar app={this} />

          <div className="row">


            <div className="col-md-8 col-xs-12">
              <Route exact path="/" component={Home} />

              <Route exact path="/video/:id" render={({ match }) =>
                <VideoWrapper match={match} />
              }/>
            </div>



            <div className="col-md-4 col-xs-12">
              <VideoList app={this} videos={videos} />
            </div>


          </div>

        </div>
      </Router>
    )
  }
}

export default App;
