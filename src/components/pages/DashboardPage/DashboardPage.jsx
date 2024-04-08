import React, { useEffect } from "react";
import $ from 'jquery';
import { setupSidebar } from "../../../ressources/setupSidebar";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import PageWrapperDashboard from "../../common/PageWrapperDashboard/PageWrapperDashboard";

function DashboardPage(props) {

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
        script.src = 'assets/js/script.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    return (
        
        <div className="main-wrapper">
            
            <Header />

            <Sidebar />

            <PageWrapperDashboard /> 
              
        </div>
    );
}

export default DashboardPage;