import React, {useState, useEffect} from 'react'

const EditMovie = ({movie}) => {

   const [description, setDescription] = useState(movie.description)

   const updateDescription = async(e) => {
      e.preventDefault()
      try {
         const body = {description}
         const response = await fetch(`/movies/${movie.movie_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
         })
         window.location = "/"
      } catch (err) {
         console.error(err.message)
      }
   }
   return(
      <>
         <button
         type="button"
         className="btn"
         data-toggle="modal"
         data-target={`#id${movie.movie_id}`}>
            EDIT
         </button>
         {/*
            id = id10
         */}
         <div
         className="modal"
         id={`id${movie.movie_id}`}>
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h4 className="modal-title">Edit Movie</h4>
                  </div>
                  <div className="modal-body">
                     <input
                     type="text"
                     className="form-control"
                     value={description}
                     onChange={e => setDescription(e.target.value)}/>
                  </div>
                  <div className="modal-footer">
                     <button
                     type="button"
                     className="btn btn-success"
                     data-dismiss="modal"
                     onClick = {e => updateDescription(e)}>
                        Save Changes
                     </button>
                     <button
                     type="button"
                     className="btn btn-danger"
                     data-dismiss="modal"
                     onClick={() => setDescription(movie.description)}>
                        Close
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default EditMovie
