import pkg from 'pg'
const {Pool} = pkg

const pool = new Pool({
    user: "",
    host: "localhost",
    database: "offers-service-graphql-application",
    password: "",
    port: 5432
})

export default pool