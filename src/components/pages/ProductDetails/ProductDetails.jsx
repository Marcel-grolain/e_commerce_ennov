import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import $ from 'jquery';
import { setupSidebar } from '../../../ressources/setupSidebar';
import PageWrapper from '../../common/PageWrapper/PageWrapper';
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";

function ProductDetails(props) {
    const { products } = useAuth();
    const { productId } = useParams();
    
    const [productDetails, setProductDetails] = useState(null);
    const [redirectToProductlList, setRedirectToProductlList] = useState(false);

    useEffect(() => {
        setupSidebar();

        return () => {
            // Nettoyage des effets lorsque le composant est démonté
            $('.sidebar-overlay').remove();
            $('.main-wrapper').removeClass('slide-nav');
        };
    }, []);

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
        const product = products.find(product => product.id === parseInt(productId));
        if(product === undefined) setRedirectToProductlList(true);
        setProductDetails(product);
    }, [products, productId]);

    if (redirectToProductlList) {
        return <Navigate to="/productlist" />;
    }

    return (

        <div className="main-wrapper">

            <Header />

            <Sidebar />

            <PageWrapper>

                <div className="page-header">
                    <div className="page-title">
                        <h4>Product Details</h4>
                        <h6>Full details of a product</h6>
                    </div>
                </div>

                {productDetails ? ( 
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="bar-code-view">
                                        <img src="/assets/img/barcode1.png" alt="barcode" />
                                        <Link className="printimg">
                                            <img src="/assets/img/icons/printer.svg" alt="print" />
                                        </Link>
                                    </div>

                                    <div className="productdetails">
                                        <ul className="product-bar">
                                            <li>
                                                <h4>Product Name</h4>
                                                <h6>{productDetails.title}</h6>
                                            </li>
                                            <li>
                                                <h4>Category</h4>
                                                <h6>{productDetails.category}</h6>
                                            </li>
                                            <li>
                                                <h4>Price</h4>
                                                <h6>{productDetails.price}</h6>
                                            </li>
                                            <li>
                                                <h4>Description</h4>
                                                <h6>{productDetails.description}</h6>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="slider-product-details">
                                        <div className="owl-carousel owl-theme product-slide">
                                            <div className="slider-product">
                                                <img src={productDetails.image} alt="img" />
                                                <h4>{productDetails.category}</h4>
                                                <h6>581kb</h6>
                                            </div>
                                            <div className="slider-product">
                                                <img src={productDetails.image} alt="img" />
                                                <h4>{productDetails.category}</h4>
                                                <h6>581kb</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

            </PageWrapper>
        </div>

    );
}

export default ProductDetails;