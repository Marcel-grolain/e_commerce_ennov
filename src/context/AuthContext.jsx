import React, { createContext, useState, useEffect } from 'react';
import { ProductList } from '../utils/ProductList';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    });

    const [usernamelogin, setUsernameLogin] = useState('');

    const [products, setProducts] = useState(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts !== undefined) {
            try {
                return JSON.parse(storedProducts);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        return [];
    });
    
    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);
    
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts === undefined || storedProducts === null || (Array.isArray(products) && products.length === 0)) fetchProdcutData();
    }, [products]);

    const setProduct  = (updatedProducts) => {
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
    

    const fetchProdcutData = async () => {
        try {
            const data = await ProductList();
            setProducts(data);
            localStorage.setItem('products', JSON.stringify(data));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Fonction pour connecter l'utilisateur
    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        fetchProdcutData();
    };

    const setDataUsername = (UsernameLogin, token) => {
        setUsernameLogin(UsernameLogin);
    }

    // Fonction pour déconnecter l'utilisateur
    const logout = () => {
        setIsLoggedIn(false);
        setUsernameLogin('');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('products');
    };

    const authContextValue = {
        isLoggedIn,
        login,
        logout,
        products,
        setProduct,
        usernamelogin,
        setDataUsername,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
