import createCategoryService from "../services/createCategory.service.js";

const createCategoryController = async (request, response) => {
    try {
      const category2 = request.body;
      const category = await createCategoryService(category2);
      return response.status(201).json({message: "Category created", category});
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
    
  };

  export default createCategoryController