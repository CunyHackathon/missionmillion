import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import youtube from './apis/Youtube';
import SearchBar from './Searchbar'; 
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
//import sdd from './sdd.PNG';


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
}
handleSubmit = async (termFromSearchBar) => {
  const response = await youtube.get('/search', {
      params: {
          q: termFromSearchBar
      }
  })

  this.setState({
      videos: response.data.items
  })
  console.log("this is resp",response);
};
handleVideoSelect = (video) => {
  this.setState({selectedVideo: video})
}

  render (){
    return (
      <div className='background' >
        <header className="App-header">
      <SearchBar handleFormSubmit={this.handleSubmit}/>

      <div className='ui grid' style={{color: "red"}}>
          <div className="ui row">
              <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                  <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
              </div>
          </div>
      </div>
      </header>
  </div>
    )

  }
   
}

export default App;
