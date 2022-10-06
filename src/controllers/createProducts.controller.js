import createProductService from "../services/createProducts.service.js";


const createProductsController = async (request, response) => {
    try {
      const product2 = request.body;
      const product = await createProductService(product2);
      return response.status(201).json({message: "Product created", product});
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
    
  };

  export default createProductsController