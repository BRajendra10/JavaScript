let screen = window.screen.width;

let sidebarItem = document.querySelectorAll(".sidebar-item");
let sidebar = document.querySelector(".sidebar-container");
let left = document.querySelector(".left-container");
let right = document.querySelector(".right-container");

let activeSidebarItem = document.querySelectorAll(".active");
let activeItem = [];

activeSidebarItem.forEach((item) => {
    activeItem.push(item);
});

sidebarItem.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {//caling onhover function when mouse enter
        let target = e.currentTarget;
        let targetItem = e.currentTarget.childNodes[3];

        if(item.classList.contains("active")){ // stoping mouseenter effect on active item
            ofHover(item, item.childNodes[3]); // by caling ofhover function 
        }else {
            onHover(target, targetItem); // if item is not active usual hover effect
        }
    });

    item.addEventListener("mouseleave", (e) => {//caling onhover function when mouse ente
        let target = e.currentTarget;
        let targetItem = e.currentTarget.childNodes[3];

        ofHover(target, targetItem);
    });

    if(screen > 1400) { // excute code when screen width is > 1400
        item.addEventListener("click", (e) => { // event listener for add active item
            let target = e.currentTarget;
            activeItem[0] = onClick(activeItem[0], target);
        });
    } else{ // excute code when screen width is < 1400
        item.addEventListener("click", (e) => { // event listener for add active item
            let target = e.currentTarget;
            activeItem[1] = onClick(activeItem[1], target);
        });
    }
});

let buttons = document.querySelectorAll(".btn");
let sidebarModal = document.querySelector(".sidebar-modal");
let searchModal = document.querySelector(".search-modal");
let navbarMenu = document.querySelector(".navbar-menu");

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let target = e.currentTarget.classList;

        if(target.contains("search-btn")){
            searchModal.classList.add("show-search-modal");
        }else if(target.contains("close-btn")) {//hide sidebar modal if it's close-btn
            searchModal.classList.remove("show-search-modal");
        }

        if(screen > 1400){ // excute code when screen width is > 1400
            if(target.contains("navbar-toggler")) { // show exesting sidebar 
                left.classList.toggle("hide-sidebar");
                right.classList.toggle("fluid-navbar");
            }
        } else if(screen < 1400) { // excute code when screen width is < 1400
            // show sidebar modal if it is 
            if(target.contains("navbar-toggler")) { // a navbar-toggler button
                sidebarModal.classList.add("show-modal"); 
            }else if(target.contains("close-btn")) {//hide sidebar modal if it's close-btn
                sidebarModal.classList.remove("show-modal");
            }

            if(target.contains("menu-toggler")){// show navbar menu when it's menu toggler
                navbarMenu.classList.toggle("show-navbar-menu");
            }
        }
    });
});