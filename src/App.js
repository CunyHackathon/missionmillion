import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import youtube from './apis/Youtube';
import SearchBar from './Searchbar';  
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Parallax from 'react-rellax';
import game from "./images/game.mp4"

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
      <div className='app'>
        <Parallax speed={20}>
        <video autoPlay loop muted
         style={{
           position: "absolute"
         }}
        >
          <source src={game} type="video/mp4"/>
        </video>
        </Parallax>
          <div className='background' >
            <header className="App-header">
            <Parallax speed={10}>
             <SearchBar style ={{Parallax: "abslute"}} handleFormSubmit={this.handleSubmit}/>
            </Parallax>
            
          <div className="sec">
          <div className='ui grid' style={{color: "white"}}>
              <div className="ui row">
                  <div  className="video">
                      <VideoDetail video={this.state.selectedVideo}/>
                  </div>
                  <div className="five wide column">
                      <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                  </div>
              </div>
          </div>
          </div>
          </header>
          </div>
       </div>
    )

  }
   
}

export default App;
