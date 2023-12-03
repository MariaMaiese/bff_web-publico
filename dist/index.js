import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
await server.start();
app.use('/graphql', cors(), express.json(), expressMiddleware(server));
app.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at: http://localhost:4000/graphql`);
});
