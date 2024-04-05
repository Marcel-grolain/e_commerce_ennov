import { BASE_URL } from "../utils/constants";


/**
 * Effectue une requête POST pour authentifier un utilisateur.
 * @param {Object} credentials - Les identifiants de l'utilisateur (email, password).
 * @returns {Promise<Object>} Une promesse contenant les données de l'utilisateur authentifié.
 * @throws {Error} Erreur si la requête échoue ou si les identifiants sont incorrects.
 */
export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error('Failed to log in');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


/**
 * Effectue une requête POST pour créer un nouvel utilisateur.
 * @param {Object} userData - Les données de l'utilisateur à créer.
 * @returns {Promise<Object>} Une promesse contenant les données de l'utilisateur créé.
 * @throws {Error} Erreur si la requête échoue ou si les données de l'utilisateur sont invalides.
 */
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


/**
 * Effectue une requête GET pour obtenir la liste des utilisateurs.
 * @returns {Promise<Array>} Une promesse contenant un tableau d'utilisateurs.
 */
export async function getAllUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();
        return users;
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


/**
 * Effectue une requête POST pour créer un nouvel utilisateur.
 * @param {Object} userData - Les données de l'utilisateur à créer.
 * @returns {Promise<Object>} Une promesse contenant les données de l'utilisateur créé.
 */
export async function createUser(userData) {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        const newUser = await response.json();
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

export const getAllProduct = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Renvoyer l'erreur pour une gestion plus approfondie si nécessaire
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        if (response.status === 200) {
            console.log("Product deleted successfully.");
            return true;
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
};
