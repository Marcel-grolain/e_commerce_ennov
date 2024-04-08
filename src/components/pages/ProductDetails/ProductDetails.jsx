import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import $ from 'jquery';
import PageWrapper from '../../common/PageWrapper/PageWrapper';
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import feather from 'feather-icons';

function ProductDetails(props) {
    const { products } = useAuth();
    const { productId } = useParams();
    
    const [productDetails, setProductDetails] = useState(null);
    const [redirectToProductlList, setRedirectToProductlList] = useState(false);

     useEffect(() => {
        feather.replace();

        $(window).resize(() => {
            if ($('.page-wrapper').length > 0) {
                const height = $(window).height();
                $(".page-wrapper").css("min-height", height);
            }
        });

        $('body').append('<div class="sidebar-overlay"></div>');
        let i = 0;

        $(document).on('click', '#mobile_btn', () => {
            var element = document.querySelector('.main-wrapper'); // Sélectionne l'élément avec la classe 'slide-navd'
            i++;

            if (i === 1) {
                element.classList.remove('slide-nav');
                element.classList.add('slide-nav');
            }else if (i === 2) {
                element.classList.remove('slide-nav');
                i = 0;
            }

            $('.sidebar-overlay').toggleClass('opened');
            $('html').addClass('menu-opened');
            $('#task_window').removeClass('opened');
            return false;
        });

        $(".sidebar-overlay").on("click", () => {
            $('html').removeClass('menu-opened');
            $('.sidebar-overlay').removeClass('opened');
            $('.main-wrapper').removeClass('slide-nav');
            $('#task_window').removeClass('opened');
        });

        $(document).on("click", ".hideset, .delete-set", () => {
            $(this).parent().parent().hide();
        });

        if ($('.product-slide').length > 0) {
            $('.product-slide').owlCarousel({
                items: 1,
                margin: 30,
                dots: false,
                nav: true,
                loop: false,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    800: { items: 1 },
                    1170: { items: 1 }
                }
            });
        }

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