// auth.jsx

import { loginUser } from './api';

/**
 * Fonction d'authentification de l'utilisateur.
 * @param {Object} credentials - Les identifiants de l'utilisateur (email, password).
 * @returns {Promise<Object>} Une promesse contenant les données de l'utilisateur authentifié.
 * @throws {Error} Erreur si la connexion échoue ou si les identifiants sont incorrects.
 */
export const authenticateUser = async (credentials) => {
    try {
        const user = await loginUser(credentials);
        // Stocker les informations d'authentification (token, utilisateur connecté, etc.) dans le state global ou le stockage local
        return user;
    } catch (error) {
        throw error;
    }
};
