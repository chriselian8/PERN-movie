const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const path = require('path')
const PORT = process.env.PORT || 5000

//process.env.PORT
//process.env.NODE_ENV => production or undefined


//middleware
app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
   //server static content
   //npm run build
   app.use(express.static(path.join(__dirname, 'client/build')))
}

//CREATE

app.post('/movies', async(req, res) => {
   try {
      const {description} = req.body
      const newMovie = await pool.query(
         "INSERT INTO movie (description) VALUES($1) RETURNING *",
         [description]
      )

      res.json(newMovie.rows[0])
   } catch (err) {
      console.log(err.message)
   }
})

//GET ALL

app.get('/movies', async(req, res) => {
   try {
      const allMovies = await pool.query("SELECT * FROM movie")
      res.json(allMovies.rows)
   } catch (err) {
      console.log(err.message)
   }
})

//GET SINGLE

app.get('/movies/:id', async(req, res) => {
   try {
      const {id} = req.params
      const movie = await pool.query("SELECT * FROM movie WHERE movie_id = $1", [id])
      res.json(movie.rows[0])
   } catch (err) {
      console.log(err.message)
   }
})

//UPDATE

app.put('/movies/:id', async(req, res) => {
   try {
      const {id} = req.params
      const {description} = req.body
      const updateMovie = await pool.query("UPDATE movie SET description = $1 WHERE movie_id = $2", [description, id])
      res.json("Updated movie!")
   } catch (err) {
      console.log(err.message)
   }
})

//DELETE

app.delete('/movies/:id', async(req, res) => {
   try {
      const {id} = req.params
      const deleteMovie = await pool.query("DELETE FROM movie WHERE movie_id = $1", [id])
      res.json("Deleted movie!")
   } catch (err) {
      console.log(err.message)
   }
})

app.listen(PORT, () => {
   console.log(`Server has started on port ${PORT}`)
})
