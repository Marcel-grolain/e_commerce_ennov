import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import { useAuth } from '../../../hooks/useAuth';
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import Swal from 'sweetalert2'
import $ from 'jquery';
import 'datatables.net'; 
import 'datatables.net-bs4';
import { deleteProduct } from '../../../services/api';

function ProductlList(props) {
    const { products, setProduct } = useAuth();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/script.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Vérifiez si DataTable est déjà initialisé sur l'élément .datanew
        if (!$('.datanew').hasClass('dataTable')) {
            // Si ce n'est pas le cas, initialisez DataTable
            $('.datanew').DataTable({
                "bFilter": true,
                "sDom": 'fBtlpi',
                'pagingType': 'numbers',
                "ordering": true,
                "language": {
                    search: ' ',
                    sLengthMenu: '_MENU_',
                    searchPlaceholder: "Search...",
                    info: "_START_ - _END_ of _TOTAL_ items",
                },
                initComplete: (settings, json) => {
                    $('.dataTables_filter').appendTo('#tableSearch');
                    $('.dataTables_filter').appendTo('.search-input');
                },
            });
        }
    }, [products]);


    useEffect(() => {
        // Mettez à jour la liste des produits au chargement initial du composant
        setProduct(products);
    }, [products, setProduct]);

    const deleteProductId = (productId) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const response = deleteProduct(productId);
                if (response) {

                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    );
    
                    const updatedProductList = products.filter(product => product.id !== productId);
                    console.log(updatedProductList);
                    setProduct(updatedProductList);
                }
            }
        });
    }

    console.log(products);
    
    return (

        <div className="main-wrapper">

            <Header />

            <Sidebar />

            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Product List</h4>
                            <h6>Manage your products</h6>
                        </div>
                        <div className="page-btn">
                            <Link to="/addproduct" className="btn btn-added"><img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />Add New Product</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="table-top">
                                <div className="search-set">
                                    <div className="search-path">
                                        <Link className="btn btn-filter" id="filter_search">
                                            <img src="/assets/img/icons/filter.svg" alt="img" />
                                            <span><img src="/assets/img/icons/closes.svg" alt="img" /></span>
                                        </Link>
                                    </div>
                                    <div className="search-input">
                                        <Link className="btn btn-searchset"><img src="/assets/img/icons/search-white.svg" alt="img" /></Link>
                                    </div>
                                </div>
                                <div className="wordset">
                                    <ul>
                                        <li>
                                            <Link data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="/assets/img/icons/pdf.svg" alt="img" /></Link>
                                        </li>
                                        <li>
                                            <Link data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="/assets/img/icons/excel.svg" alt="img" /></Link>
                                        </li>
                                        <li>
                                            <Link data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="/assets/img/icons/printer.svg" alt="img" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card mb-0" id="filter_inputs">
                                <div className="card-body pb-0">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="row">
                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <select className="select">
                                                            <option>Choose Product</option>
                                                            <option>Macbook pro</option>
                                                            <option>Orange</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <select className="select">
                                                            <option>Choose Category</option>
                                                            <option>Computers</option>
                                                            <option>Fruits</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <select className="select">
                                                            <option>Choose Sub Category</option>
                                                            <option>Computer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <select className="select">
                                                            <option>Brand</option>
                                                            <option>N/D</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg col-sm-6 col-12 ">
                                                    <div className="form-group">
                                                        <select className="select">
                                                            <option>Price</option>
                                                            <option>150.00</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-1 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <Link className="btn btn-filters ms-auto"><img src="/assets/img/icons/search-whites.svg" alt="img" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table  datanew">
                                    <thead>
                                        <tr>
                                            <th>
                                                <label className="checkboxs">
                                                    <input type="checkbox" id="select-all" />
                                                    <span className="checkmarks" />
                                                </label>
                                            </th>
                                            <th>Product Name</th>
                                            <th>Category </th>
                                            <th>price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {products.map(product => (

                                            <tr key={product.id}>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox" />
                                                        <span className="checkmarks" />
                                                    </label>
                                                </td>
                                                <td className="productimgname">
                                                    <Link to="#" className="product-img">
                                                        <img src={product.image} alt="product" />
                                                    </Link>
                                                    <Link to="#">{product.title}</Link>
                                                </td>
                                                <td>{product.category}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <Link className="me-3" to={`/product-details/${product.id}`}>
                                                        <img src="/assets/img/icons/eye.svg" alt="img" />
                                                    </Link>
                                                    <Link className="me-3" to={`/editproduct/${product.id}`}>
                                                        <img src="/assets/img/icons/edit.svg" alt="img" />
                                                    </Link>
                                                    <Link className="confirm-text" onClick={() => deleteProductId(product.id)}>
                                                        <img src="/assets/img/icons/delete.svg" alt="img" />
                                                    </Link>
                                                </td>
                                            </tr>

                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ProductlList;