import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import $ from 'jquery';
import { setupSidebar } from '../../../ressources/setupSidebar';
import { ManageUpdateProduct } from '../../../utils/ManageUpdateProduct';
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import Swal from 'sweetalert2'


function EditProduct(props) {
    const { products, updateProduct } = ManageUpdateProduct();
    const { productId } = useParams();

    const [productDetails, setProductDetails] = useState(null);
    const [redirectToProductlList, setRedirectToProductList] = useState(false);

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
        if(product === undefined) setRedirectToProductList(true);
        setProductDetails(product);
    }, [products, productId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Voulez-vous apoter des modifications sur ce produit ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire(
                    'Update!',
                    'Your product has been update.',
                    'success'
                );

                updateProduct(productId, productDetails);
                setRedirectToProductList(true);

            }
        });
    };

    if (redirectToProductlList) return <Navigate to="/productlist" />;


    return (

        <div className="main-wrapper">

            <Header />

            <Sidebar />

            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Product Edit</h4>
                            <h6>Update your product</h6>
                        </div>
                    </div>

                    {productDetails ? (
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Product Name</label>
                                            <input type="text" name="title" value={productDetails.title} onChange={handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <input type="text" name="category" value={productDetails.category} onChange={handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="text" name="price" value={productDetails.price} onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" name="description" value={productDetails.description} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label> Product Image</label>
                                            <input type="text" name="image" value={productDetails.image} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="product-list">
                                            <ul className="row">
                                                <li>
                                                    <div className="productviews">
                                                        <div className="productviewsimg">
                                                            <img src={productDetails.image} alt="img" />
                                                        </div>
                                                        <div className="productviewscontent">
                                                            <div className="productviewsname">
                                                                <h2>{productDetails.category}</h2>
                                                                <h3>581kb</h3>
                                                            </div>
                                                            <Link to="#" className="hideset">x</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <Link to="#" className="btn btn-submit me-2" onClick={handleUpdate} >Update</Link>
                                        <Link to="/productlist" className="btn btn-cancel">Cancel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </div>
        </div>

    );
}

export default EditProduct;