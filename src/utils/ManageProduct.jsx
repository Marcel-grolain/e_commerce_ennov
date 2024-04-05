import { useAuth } from "../hooks/useAuth";

export const ManageProduct = () => {
  const { products, setProduct } = useAuth();

  const addProductx = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProduct(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    console.log(products)
  };

  return { products, addProductx };
};
