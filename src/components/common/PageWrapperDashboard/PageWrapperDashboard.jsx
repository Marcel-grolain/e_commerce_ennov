import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';

function PageWrapperDashboard(props) {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/plugins/apexchart/chart-data.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    return (

        <div className="page-wrapper">

            <div className="content">

                {/* cartes-dashboard */}
                <div className="row">
                    
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget">
                            <div className="dash-widgetimg">
                                <span><img src="assets/img/icons/dash1.svg" alt="img" /></span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>$<span className="counters" data-count="307144.00">$307,144.00</span></h5>
                                <h6>Total Purchase Due</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash1">
                            <div className="dash-widgetimg">
                                <span><img src="assets/img/icons/dash2.svg" alt="img" /></span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>$<span className="counters" data-count="4385.00">$4,385.00</span></h5>
                                <h6>Total Sales Due</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash2">
                            <div className="dash-widgetimg">
                                <span><img src="assets/img/icons/dash3.svg" alt="img" /></span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>$<span className="counters" data-count="385656.50">385,656.50</span></h5>
                                <h6>Total Sale Amount</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash3">
                            <div className="dash-widgetimg">
                                <span><img src="assets/img/icons/dash4.svg" alt="img" /></span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>$<span className="counters" data-count="40000.00">400.00</span></h5>
                                <h6>Total Sale Amount</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 d-flex">
                        <div className="dash-count">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Customers</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather="user" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 d-flex">
                        <div className="dash-count das1">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Suppliers</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather="user-check" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 d-flex">
                        <div className="dash-count das2">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Purchase Invoice</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather="file-text" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 d-flex">
                        <div className="dash-count das3">
                            <div className="dash-counts">
                                <h4>105</h4>
                                <h5>Sales Invoice</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather="file" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* charts-add-products-dashboard */}
                <div className="row">
                    <div className="col-lg-7 col-sm-12 col-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-0">Purchase & Sales</h5>
                                <div className="graph-sets">
                                    <ul>
                                        <li>
                                            <span>Sales</span>
                                        </li>
                                        <li>
                                            <span>Purchase</span>
                                        </li>
                                    </ul>
                                    <div className="dropdown">
                                        <button className="btn btn-white btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            2022 <img src="assets/img/icons/dropdown.svg" alt="img" className="ms-2" />
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <Link to="#" className="dropdown-item">2022</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">2021</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">2020</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="sales_charts" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                                <h4 className="card-title mb-0">Recently Added Products</h4>
                                <div className="dropdown">
                                    <Link to="#" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                        <i className="fa fa-ellipsis-v" />
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <Link to="/productlist" className="dropdown-item">Product List</Link>
                                        </li>
                                        <li>
                                            <Link to="/addproduct" className="dropdown-item">Product Add</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive dataview">
                                    <table className="table datatable ">
                                        <thead>
                                            <tr>
                                                <th>Sno</th>
                                                <th>Products</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="productimgname">
                                                    <Link to="productlist.html" className="product-img">
                                                        <img src="assets/img/product/product22.jpg" alt="product" />
                                                    </Link>
                                                    <Link to="productlist.html">Apple Earpods</Link>
                                                </td>
                                                <td>$891.2</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td className="productimgname">
                                                    <Link to="productlist.html" className="product-img">
                                                        <img src="assets/img/product/product23.jpg" alt="product" />
                                                    </Link>
                                                    <Link to="productlist.html">iPhone 11</Link>
                                                </td>
                                                <td>$668.51</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="productimgname">
                                                    <Link to="productlist.html" className="product-img">
                                                        <img src="assets/img/product/product24.jpg" alt="product" />
                                                    </Link>
                                                    <Link to="productlist.html">samsung</Link>
                                                </td>
                                                <td>$522.29</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="productimgname">
                                                    <Link to="productlist.html" className="product-img">
                                                        <img src="assets/img/product/product6.jpg" alt="product" />
                                                    </Link>
                                                    <Link to="productlist.html">Macbook Pro</Link>
                                                </td>
                                                <td>$291.01</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste expired-products-dashboard */}
                <div className="card mb-0">
                    <div className="card-body">
                        <h4 className="card-title">Expired Products</h4>
                        <div className="table-responsive dataview">
                            <table className="table datatable ">
                                <thead>
                                    <tr>
                                        <th>SNo</th>
                                        <th>Product Code</th>
                                        <th>Product Name</th>
                                        <th>Brand Name</th>
                                        <th>Category Name</th>
                                        <th>Expiry Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><Link to="#">IT0001</Link></td>
                                        <td className="productimgname">
                                            <Link className="product-img" to="productlist.html">
                                                <img src="assets/img/product/product2.jpg" alt="product" />
                                            </Link>
                                            <Link to="productlist.html">Orange</Link>
                                        </td>
                                        <td>N/D</td>
                                        <td>Fruits</td>
                                        <td>12-12-2022</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><Link to="#">IT0002</Link></td>
                                        <td className="productimgname">
                                            <Link className="product-img" to="productlist.html">
                                                <img src="assets/img/product/product3.jpg" alt="product" />
                                            </Link>
                                            <Link to="productlist.html">Pineapple</Link>
                                        </td>
                                        <td>N/D</td>
                                        <td>Fruits</td>
                                        <td>25-11-2022</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Link to="#">IT0003</Link></td>
                                        <td className="productimgname">
                                            <Link className="product-img" to="productlist.html">
                                                <img src="assets/img/product/product4.jpg" alt="product" />
                                            </Link>
                                            <Link to="productlist.html">Stawberry</Link>
                                        </td>
                                        <td>N/D</td>
                                        <td>Fruits</td>
                                        <td>19-11-2022</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><Link to="#">IT0004</Link></td>
                                        <td className="productimgname">
                                            <Link className="product-img" to="productlist.html">
                                                <img src="assets/img/product/product5.jpg" alt="product" />
                                            </Link>
                                            <Link to="productlist.html">Avocat</Link>
                                        </td>
                                        <td>N/D</td>
                                        <td>Fruits</td>
                                        <td>20-11-2022</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default PageWrapperDashboard;