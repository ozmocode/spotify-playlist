import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}
let fakeServerData ={
  user:{
    name: 'carmic',
    playlists:[
      {
        name: 'Coding Jam',
          songs:[
          {name:'Low Earth orbit',duration: 1345},
          {name:'Reconfig',duration:1432},
          {name:'Descend',duration:1434},
          {name:'Swell',duration:3242}
        ]
      },
      {
        name: 'Discover Weekly',
        songs:[
          {name:'Le song',duration:2223},
          {name:'La song',duration:3323},
          {name:'Fleur song',duration:3121}
        ]
      },
      {
        name: 'Another playlist',
        songs:[
            {name:'Le song',duration:4121},
            {name:'La song',duration:4100},
            {name:'Fleur song',duration:4000}
          ]    
      },
      {
        name: 'Last Playlist',
        songs:[
            {name:'Le song',duration:2312},
            {name:'La song',duration:2012},
            {name:'Fleur song',duration:2001}
          ]
      }
    ]
  }
}

class PlaylistCounter extends Component{
  render(){
    return (
      <div style={{...defaultStyle,width:'40%', display:'inline-block'}}>
        <h2 >{this.props.playlists.length} playlists</h2>
      </div>
    )
  }
}

class HoursCounter extends Component{
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist)=>
    {
      return songs.concat(eachPlaylist.songs)
    },[])
    let totalDuration = allSongs.reduce((sum, eachSong)=>{
      return sum + eachSong.duration
    },0)
    return (
      <div style={{...defaultStyle,width:'40%', display:'inline-block'}}>
        <h2 >{Math.round(totalDuration/3600)} hours</h2>
      </div>
    )
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width:'25%', display:'inline-block'}}>
        <img/>
        <h3>Playylist Name</h3>
        <ul>
          <li>
            Song 1
          </li>
          <li>
            Song 2
          </li>
          <li>
            Song 3
          </li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super()
    this.state=({serverData: {}})
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({serverData: fakeServerData})
    },1000)
  }
  render() {
    return (
      <div className="App">
      
      {this.state.serverData.user ? 
      <div>
        <h1 style={{...defaultStyle, 'font-size':'54px'}}>
        { this.state.serverData.user.name}'s Playlist</h1>
        <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
        <HoursCounter playlists={this.state.serverData.user.playlists}/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
         </div> : <h1 style={defaultStyle}>Loading data...</h1>
      }
      </div>
    );
  }
}

export default App;
