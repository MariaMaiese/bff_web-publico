import { gql } from "apollo-server-express";
const typeDefs = gql `

  type TipoUsuario {
    TUS_ID: ID!
    TUS_NOMBRE: String!
    TUS_DESCRIPCION: String!
    TUS_ESTADO: Boolean!
  }


  type Query{
    tipo_usuarioById(TUS_ID:ID!): TipoUsuario
  }
`;
export { typeDefs };
