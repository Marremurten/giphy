import React, { Component} from 'react'
import './assets/App.scss'
import SearchBar from './components/Searchbar';
import Giflist from './components/GifList'
import Gif from './components/Gif'
import giphy from 'giphy-api';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gifs: [],
      selectedGif: "YNy9lxwqAWCCh9nE0W"
    }
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
          
        });
      });
  }
  selectGif = (id) => {
    console.log("working");
    this.setState({
      selectedGif: id
    });
  }


  render() {
    
   
    return (
      <div>
        <div className="left-scene" >
          <SearchBar search= {this.search} />
          <div className="selected-gif">
            <Gif id = {this.state.selectedGif}/>
          </div>
          
        </div>
        <div className="right-scene">
          <Giflist gifs = {this.state.gifs} selectGif={this.selectGif}/>

        </div>
      </div>
     
    );
  }
}

export default App;
