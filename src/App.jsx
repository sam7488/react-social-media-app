import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useState } from 'react';
import MainContent from './components/MainContent';
import PostCollection from './components/PostCollection';

function App() {
  let [selectedTab, setTab] = useState('Home');

  return (
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setTab}></Sidebar>
      <div className='content'>
        {/* <Header></Header> */}
        <MainContent className='main-container' selectedTab={selectedTab} ></MainContent>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
