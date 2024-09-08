fetch("https://kea-alt-del.dk/t7/api/products/?limit=8")
    .then((res) => res.json())
    .then(showProducts);

function showProducts(products) {
    //loops and cals showProduct
    products.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);
    
    //catch template
    const template = document.querySelector("#smallProductTemplate").content;
    
    //define "pris" and equation for discount price
    // const pris = product.price;
    // const rabatpris = pris - (pris * (product.discount/100)) ;
    
    // make a copy
    const copy =template.cloneNode(true);
    
    //change content
    copy.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
    copy.querySelector("img").alt = product.productdisplayname;
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".subtle").textContent = product.articletype + " | " + product.brandname;
    copy.querySelector(".price").textContent = product.price + " .- ";
    copy.querySelector("a").href = `product.html?id=${product.id}`;

    if(product.soldout){
        //product is sold out
        copy.querySelector("article").classList.add("soldOut")
    }
    if(product.discount){
        //product is discount
        copy.querySelector("article").classList.add("onSale");
        copy.querySelector(".rabat").textContent = "Save " + product.discount + "%";
        copy.querySelector(".rabatprice").textContent = "Now " + Math.round(product.price - (product.price * (product.discount/100))) + ".-";
        // copy.querySelector(".rabatprice").textContent = "Now " + Math.round(rabatpris) + ".-";
    }
    copy.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);
    //append
    document.querySelector(".product_list").appendChild(copy);
}

/* <template id="smallProductTemplate">
<article class="smallProduct">
     <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="">
     <h3>Sahara Team India Fanware Round Neck Jersey</h3>
     <p class="subtle"> T-shirts | Nike </p>
     <p class="price"> DKK 895,-</p>
     <div class="discounted">
        <p>Now DKK 1560,-</p>
        <p>34% off</p>
     </div>
     <p><a href="product.html">Read More</a></p>
</article>
</template> */

    // "id": 1163,
    // "gender": "Men",
    // "category": "Apparel",
    // "subcategory": "Topwear",
    // "articletype": "Tshirts",
    // "season": "Summer",
    // "productionyear": 2011,
    // "usagetype": "Sports",
    // "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
    // "price": 895,
    // "discount": null,
    // "brandname": "Nike",
    // "soldout": 0
