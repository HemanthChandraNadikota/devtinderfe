import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'

function App() {

  return (
    <>
    <Provider store={appStore}>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Body />} > 
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
    </>
  )
}

export default App
