import database from "../database/index.js";


const createProductService = async (products) => {
  try {
   
    const res = await database.query(
      `INSERT INTO
        products(name, price, category_id)
      VALUES
        ($1, $2, $3)
      RETURNING *;
      `,
      [products.name, products.price, products.category_id]
    )

    return res.rows[0]
    
  } catch (error) {
    throw new Error(error)
  }

};

export default createProductService;