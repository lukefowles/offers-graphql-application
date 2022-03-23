import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'
import usersOffersRouter from './routes/userOffers-route.js'
import offersRouter from './routes/offers-route.js'
import usersRouter from './routes/users-route.js'
import offerSchema from './schema/index.js'
import pgPool from './db.js'
const app = express()
const port = 5000



app.use(express())

// //Put routes in here 

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);


// //Example schema to test graphiQL
// var root = {
//     hello: () => {
//       return 'Hello world!';
//     },
//   };
  
  app.use('/graphql', graphqlHTTP({
    schema: offerSchema,
    // rootValue: root,
    graphiql: true,
    context: {pgPool}
  }));


app.listen(5000, () => {console.log("App listening on port 5000")});


