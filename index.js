import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.js';
import resolvers from './resolver.js';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({
  port: 4000,
  cors: {
    origin: '*',
  }
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});