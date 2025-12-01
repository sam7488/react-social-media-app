import './App.css'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useState } from 'react';
import MainContent from './components/MainContent';
import PostListProvider from './store/post-list-store';

function App() {
  let [selectedTab, setTab] = useState('Home');

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setTab}></Sidebar>
        <div className='content'>
          <MainContent className='main-container' selectedTab={selectedTab} setSelectedTab={setTab} ></MainContent>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
