
function pgdb(pgPool) {
    return {
        getUser(id) {
            return pgPool.query(`
            SELECT *
            FROM users
            WHERE userid=$1`, [id])
            .then((res) => {return res.rows[0]})
        }
    }
}

export {pgdb}