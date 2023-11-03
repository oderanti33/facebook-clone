import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Pages/Home';
import Carousal from './Shared/Component/Carousal';
import NavBar from './NavBar/NavBar';
import Input from './Shared/Component/Input';
import Detail1 from './Shared/Component/Detail1';
import WatchDetail2 from './WatchFolder/WatchDetail2';
import MarketPlace from './MarketPlace/MarketPlace';
import Group from './Group/Group';
import Game from './Gaming/Game';
import SignUp from './Shared/Component/SignUp';

function App() {
  const [islogIn, setIsLogIn] = useState(false);
  const logIn = () => {
    setIsLogIn(true)
  }
  return (
    <React.Fragment>
      {!islogIn && <SignUp login={logIn} />}
      <Router>
        {islogIn && <div>
          <NavBar />
          <div className='mainBody'>
            <Routes>
              <Route path="/" element={<Detail1 />} />
            </Routes>
            <Routes>
              <Route path="/watch" element={<WatchDetail2 />} />
            </Routes>
            <Routes>
              <Route path="/marketPlace" element={<MarketPlace />} />
            </Routes>
            <Routes>
              <Route path="/groups" element={<Group />} />
            </Routes>
            <Routes>
              <Route path="/game" element={<Game />} />
            </Routes>
          </div>
        </div>}
      </Router>
    </React.Fragment>
  );
}

export default App;
