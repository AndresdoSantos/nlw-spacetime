import fastify from 'fastify'
import cors from '@fastify/cors'

import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes, { prefix: 'memories' })
app.register(cors, { origin: true })

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP Server is running!'))
