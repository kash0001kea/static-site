fetch("https://kea-alt-del.dk/t7/api/categories")
    .then((res) => res.json())
    .then(showCategories);

function showCategories(cats){
    cats.forEach(showCategory);
}

function showCategory(cat){
//catches template
    
    const template = document.querySelector("template").content;
    //clones
    
    const clone = template.cloneNode(true);
    //change content
    clone.querySelector("a").textContent = cat.category;
    clone.querySelector("a").href = `productlist.html?category=${cat.category}`;
    
    //append
    document.querySelector(".categories div").appendChild(clone);
}  