import './App.css';
import AsideMenu from './Components/aside/AsideMenu'
import Nav from './Components/nav/Nav';
import Player from './Components/player/Player';
import Home from './Components/main/Home';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import NewRelease from './Components/Browse/NewRelease';
import Topchat from './Components/Browse/Topchat';
import Podcast from './Components/Browse/Podcast';
import Playlist from './Components/Browse/Playlist';
import History from './Components/main/History';
import Playlists from './Components/aside/asideCompo/Playlists';
import SongsList from './Components/aside/asideCompo/SongsList';
import Artists from './Components/aside/asideCompo/Artists';
import Albums from './Components/aside/asideCompo/Albums';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <AsideMenu/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/new-release' component={NewRelease}/>
          <Route path='/top-chat' component={Topchat}/>
          <Route path='/playlist' component={Playlist}/>
          <Route path='/podcast' component={Podcast}/>
          <Route path='/listening-history' component={History}/>
          <Route path='/my-music/playlists' component={Playlists}/>
          <Route path='/my-music/songs-list' component={SongsList}/>
          <Route path='/my-music/artists' component={Artists}/>
          <Route path='/my-music/albums' component={Albums}/>
        </Switch>
        <Player/>
      </div>
    </Router>
  );
}

export default App;
