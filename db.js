import pkg from 'pg'
const {Pool} = pkg

const pool = new Pool({
    user: "",
    host: "localhost",
    database: "p9175620_luke_fowles",
    password: "",
    port: 5432
})

export default pool