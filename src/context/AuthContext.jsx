import React, { createContext, useState, useEffect } from 'react';
import { ProductList } from '../utils/ProductList';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Récupérer la valeur de isLoggedIn du local storage ou définir par défaut à false
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
        // Sauvegarder la valeur de isLoggedIn dans le local storage
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);
    
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts === undefined || storedProducts === null || (Array.isArray(products) && products.length === 0)) {
            fetchProdcutData();
        }
        else {
            try {
                setProducts(JSON.parse(storedProducts));
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        

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
        // Ici, vous effectueriez la vérification des informations d'identification
        // et si elles sont valides, vous mettriez à jour l'état de connexion et stockeriez dans le local storage
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        fetchProdcutData();
    };

    const setDataUsername = (UsernameLogin, token) => {
        setUsernameLogin(UsernameLogin);
    }

    // Fonction pour déconnecter l'utilisateur
    const logout = () => {
        // Mettre à jour l'état de connexion et supprimer du local storage
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
