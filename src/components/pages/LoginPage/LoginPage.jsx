import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Spinner from 'react-bootstrap/Spinner';

import { useAuth } from '../../../hooks/useAuth';
import { authenticateUser } from '../../../services/auth';


function LoginPage(props) {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/script.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
        document.body.removeChild(script);
        };
    }, []);


    const handleLogin = async () => {
        try {
            setLoading(true);

            // Appel de la fonction authenticateUser pour authentifier l'utilisateur
            const user = await authenticateUser({ username, password });
            
            const token = user.token;
            console.log(token); 
            setIsLoggedIn(true); 
            login();

        } catch (error) {
            setError('404');
        }
        finally {
            setLoading(false);
        }
    };

    
    if (error === '404') {
        Swal.fire({
            position: "bottom-end",
            icon: "error",
            iconColor: 'red',
            color: '#ff9f43',
            title: "Login Error",
            text: 'Utilisateur invalide. Veuillez réessayer.',
            showConfirmButton: false,
            timer: 5000
          });

        setError('');
    }
    if (isLoggedIn && error !== '404') {
        setIsLoggedIn(false);

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                setTimeout(() => {
                    setRedirectToDashboard(true); // Activer la redirection après le délai
                }, 3000);
            }
        });
        Toast.fire({
            icon: "success",
            iconColor: '#ff9f43',
            color: '#ff9f43',
            title: "Signed success",
            text: 'Tableau de bord ➔.',
        });
    }

    if (redirectToDashboard) {
        return <Navigate to="/dashboard" />;
    }

    


    return (

        <div className="main-wrapper">
            <div className="account-content">
                <div className="login-wrapper">
                    <div className="login-content">
                        <div className="login-userset">
                            <div className="login-logo">
                                <img src="assets/img/logo.png" alt="img" />
                            </div>
                            <div className="login-userheading">
                                <h3>Sign In</h3>
                                <h4>Please login to your account</h4>
                            </div>

                            {/*Form*/}
                            <div className="form-login">
                                <label>Email</label>
                                <div className="form-addons">
                                    <input type="text" placeholder="Enter your Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    <img src="assets/img/icons/mail.svg" alt="img" />
                                </div>
                            </div>
                            <div className="form-login">
                                <label>Password</label>
                                <div className="pass-group">
                                    <input type="password" className="pass-input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <span className="fas toggle-password fa-eye-slash" />
                                </div>
                            </div>
                            <div className="form-login">
                                <div className="alreadyuser">
                                    <h4><Link to="forgetpassword.html" className="hover-a">Forgot Password?</Link></h4>
                                </div>
                            </div>

                            {/* Condition pour afficher soit le spinner, soit le bouton "Sign In" */}
                            {loading ? (
                                <div className="form-login">
                                    <button className="btn btn-login" >
                                        <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                                        Loading...
                                    </button>
                                </div>
                                ) : (
                                <div className="form-login">
                                    <button className="btn btn-login" onClick={handleLogin} >Sign In</button>
                                </div>
                            )}

                            {/*endForm*/}

                            <div className="signinform text-center">
                                <h4>Don't have an account? <Link to="/signup" className="hover-a">Sign Up</Link></h4>
                            </div>
                            <div className="form-setlogin">
                                <h4>Or sign up with</h4>
                            </div>
                            <div className="form-sociallink">
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <img src="assets/img/icons/google.png" className="me-2" alt="google" />
                                            Sign Up using Google
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="assets/img/icons/facebook.png" className="me-2" alt="google" />
                                            Sign Up using Facebook
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="login-img">
                        <img src="assets/img/login.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;