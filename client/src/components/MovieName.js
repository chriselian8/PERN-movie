import React from 'react'

const MovieName = (props) => {
   return (
      <>
         {props.movies.map((movie, index) => (
            <span className='mr-2'>{movie.Title}</span>
         ))}
      </>
   )
}

export default MovieName
