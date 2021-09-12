// import "../styles/styles.css";
// import "lazysizes";
// import MobileMenu from './modules/MobileMenu.js';
// import RevealOnScroll from "./modules/RevealOnScroll";
// import StickyHeader from "./modules/StickyHeader";

// let stickyHeader = new StickyHeader();
// let mobileMenu = new MobileMenu();
// new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
// new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
// let modal;

// document.querySelectorAll(".open-modal").forEach(el => {
//     el.addEventListener("click", e => {
//         e.preventDefault();
//         if (typeof modal == "undefined") {
//             import("./modules/Modal").then(x => {
//                 modal = new x.default(); //When we import a module in this manner, this is how we create a new instance
//                 setTimeout(() => modal.openTheModal(), 20);
//             }).catch(() => console.log("There was an error"));
//         } else {
//             modal.openTheModal()
//         }
//     })
// })

if (module.hot) {
    module.hot.accept(); //telling the browser to accept these hot updates
}