import express from 'express'
import graphqlHTTP from 'express-graphql'
import { schema } from './schema'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL is AMAZING.')

})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'))
