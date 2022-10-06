import database from "../database/index.js"

const listProductByCategoryService = async (id) => {
  try {
    const res = await database.query(`SELECT products.name, products.price, categories.name as category FROM categories INNER JOIN products ON categories.id = products.category_id WHERE categories.id = $1`, [id]);
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductByCategoryService;