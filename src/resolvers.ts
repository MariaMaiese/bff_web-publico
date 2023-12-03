import axios from 'axios';

const resolvers = {
    Query: {
        tipo_usuarioById: async (parent, { id }) => {
            const response = await axios.get(`localhost:8080/tipo_usuarios/${id}`)
            const tipo_usuarioData = response.data.body;

            return tipo_usuarioData
        }
    }
}

export { resolvers };

