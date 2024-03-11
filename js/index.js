   /* 
   - bouton top à faire apparaître/disparaître en scrollant cers le bas
   - barre de défilement ok
   - parallaxe main
   - parallaxe navbar 4saisons?
    */ 

    const app = {



        init: function() {
            app.toggleMenu();
            console.info('initialization');
            app.scroll();
        },

        toggleMenu: function() {
            const menu = document.getElementById("menu");
            menu.addEventListener('click', app.toggleMenu);
            console.log(menu);
            const header = document.getElementById("bigMenu");
            menu.classList.toggle("fa-times");
            header.classList.toggle("toggle");
        },
    
    
       scroll: function () {
            let rando = document.getElementById("rando");
            console.log(rando);
            let monde = document.getElementById("monde");
            console.log(monde);
            window.addEventListener('scroll', function() {
            let value = window.scrollY;
            console.log(value);
            rando.style.position = 'absolute';
            monde.style.position = 'absolute';

            rando.style.top = (parseInt(-value * 1)) + 'px';
            monde.style.top = -value * 10 + 'px';
})
        }
        
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