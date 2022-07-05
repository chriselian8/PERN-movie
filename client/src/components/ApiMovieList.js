import React, {useState, useEffect} from 'react'

const ApiMovieList = (props) => {
   return (
      <>
         {props.movies.map((movie, index) => (
            <div className="image-container d-flex flex-column justify-content-start m-3 border bg-dark">
               <img src={movie.Poster} alt="movie"></img>
               <h4 className="text-center">{movie.Title}</h4>
               <div className="overlay d-flex align-items-center justify-content-center">
               </div>
            </div>
         ))}
      </>
   )
}

export default ApiMovieList
