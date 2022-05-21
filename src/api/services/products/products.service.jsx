import api from "api/api";


const getAllProduct = () => {
    return api.get(`/admin/products`);
}


export const productService = {
    getAllProduct
}