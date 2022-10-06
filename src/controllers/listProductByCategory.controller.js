import listProductByCategoryService from "../services/listProductByCategory.service.js";


const listProductByCategoryController = async (request, response) => {
    try {
      const id = request.params.id;
      const category = await listProductByCategoryService(id);
      return response.json(category);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  };

export default listProductByCategoryController