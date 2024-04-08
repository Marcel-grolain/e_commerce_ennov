import { useAuth } from "../hooks/useAuth";

export const ManageUpdateProduct = () => {
    const { products, setProduct } = useAuth();

    const updateProduct = (productId, updatedProduct) => {
        const updatedProducts = [...products];
        
        const index = updatedProducts.findIndex(product => product.id === parseInt(productId));
        
        if (index !== -1) {
            updatedProducts[index] = { ...updatedProducts[index], ...updatedProduct };
            localStorage.setItem('products', JSON.stringify(updatedProducts));

            setProduct(updatedProducts);
        } else {
            console.error(`Product with id ${productId} not found.`);
        }
    };

    return { products, updateProduct };
};
