import listProductService from "../services/listProducts.service.js";


const listProductsController = async (request, response) => {
    try {
      const users = await listProductService();
  
      return response.json(users);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  };
  
  export default listProductsController;
  