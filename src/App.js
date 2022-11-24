import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'; 
import News from './components/News';
import Home from './components/Home';
import LayOut from './components/LayOut';

export class App extends Component {
  render() {
    return (
        <div>
              <Routes>
                <Route path='/' element={<LayOut/>}>
                  <Route index element={<Home/>} />
                  <Route path='/news' element={<News/>} />
                </Route>
              </Routes>
        </div>
    )
  }
}

export default App
