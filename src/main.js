import './style.css'

window.addEventListener("load", () => {
            const preloader = document.getElementById("preloader");
            const content = document.getElementById("content");
            preloader.classList.add("hidden"); // Oculta preloader
            content.classList.remove("hidden"); // Muestra contenido

            //script
            const btn = document.getElementById('menu-btn');
            const menu = document.getElementById('mobile-menu');
            btn.addEventListener("click", () => {
                console.log('aj');
                if (menu.classList.contains("opacity-0")) {
                    menu.classList.remove("opacity-0", "-translate-y-56");
                    menu.classList.add("opacity-100", "translate-y-0");
                    
                } else {
                         menu.classList.add("opacity-0", "-translate-y-56");
                         menu.classList.remove("opacity-100", "translate-y-0");   
                    
                }
            });

});