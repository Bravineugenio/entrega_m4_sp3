import updateProductService from "../services/updateProduct.service.js";

const updateProductController = async (request, response) => {
    try {
      const id = request.params.id;
      const product2 = request.body;
  
      const product = await updateProductService(id, product2);
  
      return response.json({message: "Product updated", product } );
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  };

  export default updateProductController