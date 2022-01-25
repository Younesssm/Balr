var navigationBar = document.querySelector(".navigation_bar");

console.log(navigationBar);

document.addEventListener("scroll", function() {
    console.log(window.scrollY)
    if(window.scrollY >= 100) {
        navigationBar.classList.add("inverse"); 
    } else {
        navigationBar.classList.remove("inverse")
    }
})

