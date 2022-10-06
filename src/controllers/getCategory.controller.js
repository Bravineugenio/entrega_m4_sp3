import getCategoryService from "../services/getCategory.service.js";


const getCategoryController = async (request, response) => {
    try {
      const id = request.params.id;
      const category = await getCategoryService(id);
      return response.json(category);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  };

export default getCategoryController