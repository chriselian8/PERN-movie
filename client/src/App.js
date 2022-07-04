import './App.css';
import {useState, useEffect} from 'react'

//components

import InputMovie from './components/InputMovie'
import ListMovies from './components/ListMovies'

const App = () => {


   return(
      <>
         <div className='container'>
            <InputMovie />
            <ListMovies />
         </div>

      </>
   )
}

export default App;
