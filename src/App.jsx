
import './styles/App.css';
import {BrowserRouter, Routes,Route,Link}from 'react-router-dom';
import {Login}from './pages/login';
import {Search}from './pages/search';
import {Favorites}from './pages/favorites';
import {Cards}from './pages/cards';
import {CardDetails}from './pages/cardDetails';
import { useSelector } from 'react-redux';


function App() {
  
    let isAuthenticated=useSelector((state)=>state.authReducer.isAuthenticated)
  let navDisplay={
    display:isAuthenticated?"flex":"none"
  }

  return (
   <BrowserRouter>
    <nav className='navigation'style={navDisplay}>
    <Link to='/search' className='link'> Search  </Link>
    <Link to='/favorites' className='link'>Favorites  </Link>
    </nav>
    <br/>
    <Routes>
        <Route path='/' element={<div>hello</div>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/cards-Details' element={<CardDetails/>}/>
    </Routes>
    
   </BrowserRouter>
   
  
  )
}

export default App;
