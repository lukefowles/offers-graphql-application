
//database queries
function pgdb(pgPool) {
    return {
        getUser(id) {
            return pgPool.query(`
            SELECT *
            FROM users
            WHERE userid=$1`, [id])
            .then((res) => {return res.rows[0]})
        },

        getUserOffers(id) {
            return pgPool.query(`
            SELECT * 
            FROM useroffers
            WHERE userid=$1`, [id])
            .then(res => res.rows)
        },

        addNewUser({userid, name, email}) {
            return pgPool.query(`
            INSERT INTO users(userid, name, email)
            VALUES ($1, $2, $3)
            RETURNING *`, [userid, name, email])
            .then(res => res.rows[0])
        }
    }
}

export {pgdb}