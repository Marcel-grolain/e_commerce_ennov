import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';


// Fonction pour récupérer les détails du produit en fonction de son ID
export const GetProductDetails = (props) => {
    const [productDetails, setProductDetails] = useState(null);
    const { products } = useAuth();
    const id = props.productId;

    const product = products.find(product => product.id === parseInt(id));
    setProductDetails(product);

    return productDetails;
};