import React, {useState, useEffect} from 'react'

const InputMovie = () => {

   const [description, setDescription] = useState('')

   const onSubmitForm = async(e) => {
      e.preventDefault()
      try {
         const body = {description}
         const response = await fetch('/movies', {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(body)
      })
         // window.location = '/'
      } catch (err) {
         console.error(err.message)
      }
   }

   return(
      <>
         <div className='border bg-dark' id='add-movie'>
            <h1 className='text-center mt-5'>Add a movie!</h1>
            <form className='d-flex mt-5 justify-content-center' onSubmit={onSubmitForm}>
            <input
            type='text'
            className='text-center'
            placeholder='Input here'
            value={description} onChange={e => setDescription(e.target.value)}/>
            <button className='btn btn-success'> ADD </button>
            </form>
         </div>
      </>
   )
}

export default InputMovie
