import getProductService from "../services/getProduct.service.js";

const getProductController = async (request, response) => {
    try {
      const id = request.params.id;
      const product = await getProductService(id);
      return response.json(product);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  };

export default getProductController