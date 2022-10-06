import deleteProductService from "../services/deleteProduct.service.js";


const deleteProductController = async (request, response) => {
  try {
    const id = request.params.id;
    await deleteProductService(id);
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default deleteProductController;
