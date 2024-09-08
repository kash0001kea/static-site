const productContainer = document.querySelector("#productCointainer")
const
const
const params = URLSearchParams(document.location.search);
const category = params.get("category")
let url = undefined;


// --------confusing part from class--------//
const categorylist =document.querySelector("categorylist");

fetch("https://kea-alt-del.dk/t7/api/categories")
.then(responce => responce.json())
.then(categories) => {
    categories.forEach((category) => {
        categoryList.innerHTML += `<li><a href="index.html?category=${category.category}">${category.category}</li>`;
    });
};

if (params.has("category")) {
    url = "https://kea-alt-del.dk/t7/api/products?categories=" + category;
} else{
    url = "https://kea-alt-del.dk/t7/api/products"
}

function duplicateTemplate(template, container){
    fetch(url)
}