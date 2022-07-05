import './App.css';
import {useState, useEffect} from 'react'
// import "bootstrap/dist/css/boostrap.min.css"

//components

import InputMovie from './components/InputMovie'
import ListMovies from './components/ListMovies'
import ApiMovieList from './components/ApiMovieList'
import ApiMovieListHeading from './components/ApiMovieListHeading'
import SearchBox from './components/SearchBox'

const App = () => {
   const [movies, setMovies] = useState([])
   const [searchValue, setSearchValue] = useState('')

   const getMovieRequest = async(searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d7da8aec`

      const response = await fetch(url)
      const responseJson = await response.json()

      if(responseJson.Search) {
         setMovies(responseJson.Search)
      }
   }

   useEffect(() => {
      getMovieRequest(searchValue)
   }, [searchValue])

   return(
      <>
         <div className='container'>
            <div className='movie-header'>
               <h1 className=" movie-time text-center m-5 bg-dark border"> MOVIE TIME </h1>
            </div>
            <div className='movie-container container-fluid'>
               <div className='row d-flex align-items-center'>
                  <ApiMovieListHeading heading='Search for movies' />
                  <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
               </div>
               <div className='row border'>
                  <ApiMovieList movies={movies} />
               </div>
            </div>
            <InputMovie />
            <ListMovies />
         </div>

      </>
   )
}

export default App;
