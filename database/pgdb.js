
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
        }
    }
}

export {pgdb}