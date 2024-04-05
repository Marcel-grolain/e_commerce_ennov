import { NavLink } from 'react-router-dom';

function Sidebar() {
    
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li>
                            <NavLink to="/dashboard" activeClassName="active">
                                <img src="/assets/img/icons/dashboard.svg" alt="img" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/productlist" activeClassName="active">
                                <img src="/assets/img/icons/product.svg" alt="img" />
                                <span>Product List</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/addproduct" activeClassName="active">
                                <img src="/assets/img/icons/product.svg" alt="img" />
                                <span>Add Product</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" activeClassName="active">
                                <img src="/assets/img/icons/settings.svg" alt="img" />
                                <span>Settings</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
