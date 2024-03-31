   /* 
   - bouton top à faire apparaître/disparaître en scrollant cers le bas
   - barre de défilement ok
   - parallaxe main
   - parallaxe navbar 4saisons?
    */ 

    const app = {
        init: function() {
            app.toggleMenu();
            app.clickItem();
            console.info('initialization');
        },
        
        toggleMenu: function() {
            const menu = document.getElementById("menu");
            menu.addEventListener('click', function() {
                const header = document.getElementById("bigMenu");
                
                if (menu.classList.contains("fa-bars")) {
                    menu.classList.remove("fa-bars");
                    menu.classList.add("fa-times");
                    header.classList.add("toggle");
                } else {
                    menu.classList.remove("fa-times");
                    menu.classList.add("fa-bars");
                    header.classList.remove("toggle");
                }
            })},

        

        clickItem: function() {
            const header = document.getElementById("bigMenu");
            header.addEventListener('click', function() {    
                const menu = document.getElementById("menu");

                if (menu.style.display === "block") {
                    menu.classList.remove("fa-times");
                    menu.classList.add("fa-bars");
                    header.classList.remove("toggle");
                    menu.style.display = "none"; // Pour masquer le menu
                                } else {
                    menu.classList.remove("fa-bars");
                    menu.classList.add("fa-times");
                    header.classList.add("toggle");
                    menu.style.display = "block"; // Pour afficher le menu
                };
        })}
        
    };

    document.addEventListener('DOMContentLoaded', app.init);



    /* 
    Effet parallaxe

    Objectif 1
    faire en sorte que des éléments défilent plus ou moins vite lors du scroll de l'utilisateur

    Solution
    On trouve la position du centre de l'élément par rapport au centre de l'écran et on applique un translateY en fonction.
    - trouver la position du centre de l'élément par rapport au centre de l'écran
    - appliquer un translateY = ratio x (centre écran - centre élément)

    Signature
    - new Parallax (élément)
    - data-parallax='0.2'
    - data-parallax='{"y":0.2, "rotate":0.02}'
    - Parallax.bind()

    Objectif 2
    les images rando et monde ont une animation qui suit le déroulement du scroll

    Objectif 3
    relier CV
    relier projets
    remplir blabla

    */