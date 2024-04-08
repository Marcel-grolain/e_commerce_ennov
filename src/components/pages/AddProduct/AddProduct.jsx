import React, { useState, useEffect } from 'react';
import { Link, Navigate  } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import $ from 'jquery';
import feather from 'feather-icons';
import { ManageProduct, GetLastNonNullId } from '../../../utils/ManageProduct';
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";



function AddProduct(props) {
    const { products } = useAuth();
    const { addProductx } = ManageProduct();
    const [redirectToProductlList, setRedirectToProductList] = useState(false);

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
        script.src = 'assets/js/script.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    const [newProduct, setNewProduct] = useState({
        id: GetLastNonNullId(products),
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: { rate: 0, count: 0 }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProductx(newProduct);
        setRedirectToProductList(true);
    };

    if (redirectToProductlList) {
        return <Navigate to="/productlist" />;
    }


    return (

        <div className="main-wrapper">

            <Header />

            <Sidebar />

            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Product Add</h4>
                            <h6>Create new product</h6>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Product Name</label>
                                            <input type="text" name="title" value={newProduct.title} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <input type="text" name="category" value={newProduct.category} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="text" name="price" value={newProduct.price} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" name="description" value={newProduct.description} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label> Product Image</label>
                                            <input type="text" name="image" value={newProduct.image} onChange={handleChange} placeholder='URL image' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button  type="submit" to="#" className="btn btn-submit me-2" >Add Product</button >
                                        <Link to="/productlist" className="btn btn-cancel">Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default AddProduct;