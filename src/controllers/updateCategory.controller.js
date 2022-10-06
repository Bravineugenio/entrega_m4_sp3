import updateCategoryService from "../services/updateCategory.service.js";

const updateCategoryController = async (request, response) => {
    try {
      const id = request.params.id;
      const category2 = request.body;
  
      const category = await updateCategoryService(id, category2);
  
      return response.json({message: "Category updated", category} );
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  };

  export default updateCategoryController
  