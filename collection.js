var productContainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productName = productlist[count].querySelector("p").textContent
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        }
        else {
            productlist[count].style.display = "block";
        }
    }
})


// var enteredtext = "";

// productlist.addEventListener("keyup",
//     function() {
//         search = event.target.value.toUpperCase()
//         for (var i = 0; i < productlist.length; i++) {
//             if (productlist[i].textContent.toUpperCase().indexOf(enteredtext) < 0) {
//                 productlist[i].style.display = "none";
//             }
//             else {
//                 productlist[i].style.display = "block";
//             }
//         }
//     }
// )


// Selecting side-navbar
var sideNav = document.querySelector(".side-navbar")

function showNavbar() {
    sideNav.style.left = "0";
}

function closeNavbar() {
    sideNav.style.left = "-60%";
}