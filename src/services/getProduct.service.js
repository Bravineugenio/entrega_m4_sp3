import database from '../database/index.js'

const getProductService = async (id) => {

    try {
        const res = await database.query(
            `SELECT
                *
            FROM
                products
            WHERE
                id = $1`,
            [id]
        )

        const products = res.rows[0]
    
        if(!products){
            throw new Error('Product not found')
        }
    
        return products
    } catch (error) {
        throw new Error(error)
    }

}

export default getProductService