import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DashboardPage from '../components/pages/DashboardPage/DashboardPage';
import ProductlList from '../components/pages/ProductlList/ProductlList';
import AddProduct from '../components/pages/AddProduct/AddProduct';
import EditProduct from '../components/pages/EditProduct/EditProduct';
import ProductDetails from '../components/pages/ProductDetails/ProductDetails';

import LoginPage from '../components/pages/LoginPage/LoginPage';
import RegisterPage from '../components/pages/RegisterPage/RegisterPage';
import Settings from '../components/pages/Settings/Settings';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';


function AppRouter(props) {
    return (
       
        <Router>
            <Routes>

                <Route path="/" element={<PrivateRoute Component={DashboardPage} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/dashboard" element={<PrivateRoute Component={DashboardPage} />} />
                <Route path="/productlist" element={<PrivateRoute Component={ProductlList} />} />
                <Route path="/addproduct" element={<PrivateRoute Component={AddProduct} />} />
                <Route path="/editproduct/:productId" element={<PrivateRoute Component={EditProduct} />} />
                <Route path="/product-details/:productId" element={<PrivateRoute Component={ProductDetails} />} />
                <Route path="/settings" element={<PrivateRoute Component={Settings} />} />
                <Route path="*" element={<NotFoundPage />} />
                
            </Routes>
        </Router>

    );
}

export default AppRouter;