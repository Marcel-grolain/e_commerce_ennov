import { getAllProduct } from "../services/api";

export const ProductList = async () => {

    try {
        const data = await getAllProduct();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}