import React, {useState, useEffect} from 'react'

import EditMovie from './EditMovie'

const ListMovies = () => {

   const [movies, setMovies] = useState([])

   const deleteMovie = async(id) => {
      try {
         const deleteMovie = await fetch(`/movies/${id}`, {
            method: "DELETE"
         })

         setMovies(movies.filter(movie => movie.movie_id !== id))
      } catch (err) {
         console.error(err.message)
      }
   }

   const getMovies = async() => {
      try {
         const response = await fetch('/movies')
         const jsonData = await response.json()

         setMovies(jsonData)
      } catch (err) {
         console.error(err.message)
      }
   }

   useEffect(() => {
      getMovies()
   }, [])

   return(
      <>
         <h1 className='text-center mt-5'>Your Movie List</h1>
         {' '}
         <table className='table mt-5 text-left border bg-dark'>
            <thead>
               <tr>
                  <th>TITLE</th>
                  <th>MODIFY</th>
                  <th>REMOVE</th>
               </tr>
            </thead>
            <tbody>
               {/*<tr>
                  <td>something2</td>
                  <td>something2</td>
                  <td>something2</td>
               </tr> */}
               {movies.map(movie => (
                  <tr key={movie.movie_id}>
                     <td>{movie.description}</td>
                     <td><EditMovie movie = {movie} /></td>
                     <td>
                        <button
                        className='btn btn-danger'
                        onClick={() => deleteMovie(movie.movie_id)}>
                        DELETE
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   )
}

export default ListMovies
