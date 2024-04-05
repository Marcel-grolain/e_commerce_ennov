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

export const GetLastNonNullId = (products) => {
  let lastNonNullId = null;
  
  for (const product of products) {
      if (product.id !== null) {
          lastNonNullId = product.id;
      }
  }

  return lastNonNullId + 1;
};