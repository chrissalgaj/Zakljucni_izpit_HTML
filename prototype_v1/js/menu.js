 var searchTrigger = document.getElementById("trigger-search"), 
     menuTrigger = document.getElementById("trigger-menu"), 
     sidebarMenu = document.getElementById("right-mobile-menu"), 
     sidebarSearch = document.getElementById("left-mobile-menu"), 
     searchClose = document.getElementById("close-search"), 
     menuClose = document.getElementById("close-menu"), 
     fullscreenMenuCloseDiv = document.getElementById("menu-close-outclick");

 // menu opening and closing
 searchTrigger.onclick = function () {
    sidebarSearch.classList.toggle("extended");
    fullscreenMenuCloseDiv.classList.toggle("visible");
    if (sidebarMenu.classList.contains("extended")) {
      sidebarMenu.classList.remove("extended");
    }
 }
 
 menuTrigger.onclick = function () {
    sidebarMenu.classList.toggle("extended");
    fullscreenMenuCloseDiv.classList.toggle("visible");
    if (sidebarSearch.classList.contains("extended")) {
      sidebarSearch.classList.remove("extended");
    }
 }
 
 searchClose.onclick = function () {
    sidebarSearch.classList.remove("extended");
    fullscreenMenuCloseDiv.classList.remove("visible");
 }
 
 menuClose.onclick = function () {
    sidebarMenu.classList.remove("extended");
    fullscreenMenuCloseDiv.classList.remove("visible");
 }

 // close menus on click outside
 fullscreenMenuCloseDiv.onclick = function () {
    if (sidebarMenu.classList.contains("extended")) {
      sidebarMenu.classList.remove("extended");
      fullscreenMenuCloseDiv.classList.remove("visible");
    } else if (sidebarSearch.classList.contains("extended")) {
      sidebarSearch.classList.remove("extended");
      fullscreenMenuCloseDiv.classList.remove("visible");
    }
 }
 
 var movieFullInfo = document.getElementById("movie-full-info-container"),
     movie = document.querySelectorAll('.title-and-trigger')[0];
 
 movie.onclick = function () {
     movieFullInfo.classList.add('opened');
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // localstorage save and load functions
 function lclSet (dname, dvalue) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(dname, dvalue);
    } else {}
 }

function lclGet (dname) {
    return localStorage.getItem(dname);
 }
 