import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(props) {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/assets/js/script.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        document.body.classList.add('error-page');
        return () => {
            document.body.classList.remove('error-page');
        };
    }, []);

    return (

        <div className="main-wrapper">
            <div className="error-box">
                <h1>404</h1>
                <h3 className="h2 mb-3"><i className="fas fa-exclamation-circle" /> Oops! Page not found!</h3>
                <p className="h4 font-weight-normal">The page you requested was not found.</p>
                <Link to="/dashboard" className="btn btn-primary">Back to Home</Link>
            </div>
        </div>

    );
}

export default NotFoundPage;