import React from 'react';

import logo from './HackStormlogo.png';
import Applogo from './components/Applogo';
import connectwalletbutton from './ConnectWalletButton.png';
import Connectwalletbutton from './components/Connectwalletbutton';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hackathon from "./components/Hackathon";
import Event from "./components/Event";
import Zk from "./components/Zk"
import Notfound from "./components/Notfound";
import Signup from "./components/Signup";


function Navbar({ logo, connectwalletbutton }) {
  return (
    <>
      <Applogo img={logo} />
      <Connectwalletbutton img={connectwalletbutton} />
    </>
  );
}


function App() {
  
  return (
    <>
        <BrowserRouter>
        <Navbar 
            logo={logo}
            connectwalletbutton={connectwalletbutton}
          />
          <Routes>
            <Route path={`/`} element={<Hackathon />} />
            <Route path={`/event/`} element={<Event />} />
            <Route path={`/event/zk`} element={<Zk />} />
            <Route path={`/signup`} element={<Signup />} />
            <Route path={`*`} element={<Notfound />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;