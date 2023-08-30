import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useNavigationType } from 'react-router-dom';
import Index1 from "./pages/Index1";
import LandingPage1 from "./pages/LandingPage1";
import Signup from './Signup';
import Login from './Login';
import TopGames from './TopGames';
import { useLocation } from 'react-router-dom';
import HeadersV12 from "./components/HeadersV12";
import Nav from "./pages/Nav";
import logo from './logo.svg';
import './App.css';

import {render} from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { login, register, genre, edit, account } from './inc'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

render() {
    return(
        <div className="App">
            <BrowserRouter>
                <Route path="/login" component={login} exact/>
                <Route path="/register" component={register} />
                <Route path="/genre" component={genre} />
                <Route path="/edit" component={edit} />
                <Route path="/account" component={account} />
            </BrowserRouter>
        </div>
        )
    }
}

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const userInfo = location.state ? location.state.userInfo : null;
  const name = userInfo ? userInfo.name : '';

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
           case "/":
             title = "";
             metaDescription = "";
             break;
           case "/headers-v12":
             title = "";
             metaDescription = "";
             break;
           case "/index":
             title = "";
             metaDescription = "";
             break;
           case "/landing-page-1":
             title = "";
             metaDescription = "";
             break;
         }


    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/headers-v12" element={<HeadersV12 />} />
        <Route path="/index" element={<Index1 />} />
        <Route path="/landing-page-1" element={<LandingPage1 />} />
      </Routes>
  );
}
export default App;
