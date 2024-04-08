import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Swal from 'sweetalert2'

function Header() {
    const { logout, usernamelogin } = useAuth();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/assets/js/script.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Would you like to log out ?",
            icon: 'info',
            iconColor: '#ff9f43',
            color: '#ff9f43',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
            }
        });
    };

    return (
        
        <div className="header">

            <div className="header-left active">
                <Link to="/dashboard" className="logo">
                    <img src="/assets/img/logo.png" alt="ecommerce" />
                </Link>
                <Link to="/dashboard" className="logo-small">
                    <img src="/assets/img/logo-small.png" alt="ecommerce" />
                </Link>
                <Link id="toggle_btn" to="#">
                </Link>
            </div>

            <Link id="mobile_btn" className="mobile_btn" to="#">
                <span className="bar-icon">
                    <span />
                    <span />
                    <span />
                </span>
            </Link>

            <ul className="nav user-menu">

                <li className="nav-item">
                    <div className="top-nav-search">
                        <Link to="#" className="responsive-search">
                            <i className="fa fa-search" />
                        </Link>
                        <form action="#">
                            <div className="searchinputs">
                                <input type="text" placeholder="Search Here ..." />
                                <div className="search-addon">
                                    <span><img src="/assets/img/icons/closes.svg" alt="img" /></span>
                                </div>
                            </div>
                            <Link className="btn" id="searchdiv"><img src="/assets/img/icons/search.svg" alt="img" /></Link>
                        </form>
                    </div>
                </li>


                <li className="nav-item dropdown has-arrow flag-nav">
                    <Link className="nav-a dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button">
                        <img src="/assets/img/flags/us1.png" alt="" height="20" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                            <img src="/assets/img/flags/us.png" alt="" height="16" /> English
                        </Link>
                        <Link to="#" className="dropdown-item">
                            <img src="/assets/img/flags/fr.png" alt="" height="16" /> French
                        </Link>
                        <Link to="#" className="dropdown-item">
                            <img src="/assets/img/flags/es.png" alt="" height="16" /> Spanish
                        </Link>
                        <Link to="#" className="dropdown-item">
                            <img src="/assets/img/flags/de.png" alt="" height="16" /> German
                        </Link>
                    </div>
                </li>


                <li className="nav-item dropdown">
                    <Link to="#" className="dropdown-toggle nav-a" data-bs-toggle="dropdown">
                        <img src="/assets/img/icons/notification-bing.svg" alt="img" /> <span className="badge rounded-pill">4</span>
                    </Link>
                    <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                            <span className="notification-title">Notifications</span>
                            <Link to="#" className="clear-noti"> Clear All </Link>
                        </div>
                        <div className="noti-content">
                            <ul className="notification-list">
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media d-flex">
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="/assets/img/profiles/avatar-02.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1">
                                                <p className="noti-details"><span className="noti-title">John Doe</span> added
                                                    new task <span className="noti-title">Patient appointment booking</span>
                                                </p>
                                                <p className="noti-time"><span className="notification-time">4 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media d-flex">
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="/assets/img/profiles/avatar-03.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1">
                                                <p className="noti-details"><span className="noti-title">Tarah Shropshire</span>
                                                    changed the task name <span className="noti-title">Appointment booking
                                                        with payment gateway</span></p>
                                                <p className="noti-time"><span className="notification-time">6 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media d-flex">
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="/assets/img/profiles/avatar-06.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1">
                                                <p className="noti-details"><span className="noti-title">Misty Tison</span>
                                                    added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                                <p className="noti-time"><span className="notification-time">8 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media d-flex">
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="/assets/img/profiles/avatar-17.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1">
                                                <p className="noti-details"><span className="noti-title">Rolland Webber</span>
                                                    completed task <span className="noti-title">Patient and Doctor video
                                                        conferencing</span></p>
                                                <p className="noti-time"><span className="notification-time">12 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media d-flex">
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="/assets/img/profiles/avatar-13.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1">
                                                <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span>
                                                    added new task <span className="noti-title">Private chat module</span>
                                                </p>
                                                <p className="noti-time"><span className="notification-time">2 days ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <Link to="activities.html">View all Notifications</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item dropdown has-arrow main-drop">
                    <Link to="#" className="dropdown-toggle nav-a userset" data-bs-toggle="dropdown">
                        <span className="user-img"><img src="https://media.licdn.com/dms/image/C5603AQF7rAa0KfVikQ/profile-displayphoto-shrink_800_800/0/1660253501314?e=1717632000&v=beta&t=i2RW_Vbtd4zkt4k07lz_ny2Iw8w1NW9EhmpVVh5bT5s" alt="Photo_Marcel" />
                            <span className="status online" /></span>
                    </Link>
                    <div className="dropdown-menu menu-drop-user">
                        <div className="profilename">
                            <div className="profileset">
                                <span className="user-img"><img src="https://media.licdn.com/dms/image/C5603AQF7rAa0KfVikQ/profile-displayphoto-shrink_800_800/0/1660253501314?e=1717632000&v=beta&t=i2RW_Vbtd4zkt4k07lz_ny2Iw8w1NW9EhmpVVh5bT5s" alt="Photo_Marcel" />
                                    <span className="status online" /></span>
                                <div className="profilesets">
                                    <h6>{usernamelogin}</h6>
                                    <h5>Admin</h5>
                                </div>
                            </div>
                            <hr className="m-0" />
                            <Link className="dropdown-item" to="profile.html"> <i className="me-2" data-feather="user" /> My
                                Profile</Link>
                            <Link className="dropdown-item" to="generalsettings.html"><i className="me-2" data-feather="settings" />Settings</Link>
                            <hr className="m-0" />
                            <Link className="dropdown-item logout pb-0" onClick={handleLogout} to="#"><img src="/assets/img/icons/log-out.svg" className="me-2" alt="img" />Logout</Link>
                        </div>
                    </div>
                </li>
            </ul>


            <div className="dropdown mobile-user-menu">
                <Link to="#" className="nav-a dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></Link>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="profile.html">My Profile</Link>
                    <Link className="dropdown-item" to="generalsettings.html">Settings</Link>
                    <Link className="dropdown-item" onClick={handleLogout} to="#">Logout</Link>
                </div>
            </div>

        </div>

    );
}

export default Header;