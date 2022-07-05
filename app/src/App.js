import './App.css';
import {useState, useEffect} from 'react'

//components

import InputMovie from './components/InputMovie'
import ListMovies from './components/ListMovies'

const App = () => {


   return(
      <>
         <div className='container'>
            <h1 className="text-center m-5"> MOVIE TIME </h1>
            <InputMovie />
            <ListMovies />
         </div>

      </>
   )
}

export default App;
