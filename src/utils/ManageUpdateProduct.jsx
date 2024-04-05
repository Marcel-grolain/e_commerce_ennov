import { useAuth } from "../hooks/useAuth";

export const ManageUpdateProduct = () => {
    const { products, setProduct } = useAuth();

    const updateProduct = (productId, updatedProduct) => {
        // Copie de la liste actuelle des produits
        const updatedProducts = [...products];
        
        // Recherche du produit à mettre à jour
        const index = updatedProducts.findIndex(product => product.id === parseInt(productId));
        
        if (index !== -1) {
            // Mise à jour du produit spécifique avec les nouvelles données
            updatedProducts[index] = { ...updatedProducts[index], ...updatedProduct };

            // Mise à jour du stockage local avec la liste mise à jour des produits
            localStorage.setItem('products', JSON.stringify(updatedProducts));

            // Mettre à jour le contexte avec la nouvelle liste de produits
            setProduct(updatedProducts);
        } else {
            console.error(`Product with id ${productId} not found.`);
        }
    };

    return { products, updateProduct };
};
