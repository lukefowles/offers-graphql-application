import express from 'express'
import usersOffersRouter from './routes/userOffers-route.js'
import offersRouter from './routes/offers-route.js'
import usersRouter from './routes/users-route.js'

const app = express()
const port = 5000

app.use(express.json())

//Put routes in here 


app.listen(() => {console.log("App listening on port 5000")});


