import listCategoryService from "../services/listCategory.service.js";


const listCategoryController = async (request, response) => {
  try {
    const category = await listCategoryService();

    return response.json(category);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listCategoryController;
