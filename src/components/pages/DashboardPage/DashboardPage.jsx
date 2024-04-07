import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import PageWrapperDashboard from "../../common/PageWrapperDashboard/PageWrapperDashboard";
import feather from 'feather-icons';

function DashboardPage(props) {
    const $wrapper = useRef(null);
    //const $slimScrolls = useRef(null);
    //const $pageWrapper = useRef(null);

    useEffect(() => {
        feather.replace();

        $(window).resize(() => {
            if ($('.page-wrapper').length > 0) {
                const height = $(window).height();
                $(".page-wrapper").css("min-height", height);
            }
        });

        $('body').append('<div class="sidebar-overlay"></div>');

        $(document).on('click', '#mobile_btn', () => {
            $($wrapper.current).toggleClass('slide-nav');
            $('.sidebar-overlay').toggleClass('opened');
            $('html').addClass('menu-opened');
            $('#task_window').removeClass('opened');
            return false;
        });

        $(".sidebar-overlay").on("click", () => {
            $('html').removeClass('menu-opened');
            $('.sidebar-overlay').removeClass('opened');
            $($wrapper.current).removeClass('slide-nav');
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
        };
    }, [$wrapper]);

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
        
        <div className="main-wrapper" ref={$wrapper}>
            
            <Header />

            <Sidebar />

            <PageWrapperDashboard /> 
              
        </div>
    );
}

export default DashboardPage;