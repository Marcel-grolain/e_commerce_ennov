import React, { useEffect } from "react";
import $ from 'jquery';
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import PageWrapperDashboard from "../../common/PageWrapperDashboard/PageWrapperDashboard";
import feather from 'feather-icons';

function DashboardPage(props) {

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

    return (
        
        <div className="main-wrapper">
            
            <Header />

            <Sidebar />

            <PageWrapperDashboard /> 
              
        </div>
    );
}

export default DashboardPage;