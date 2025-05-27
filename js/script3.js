let pname = document.getElementById('pname');
let price = document.getElementById('price');
let qty = document.getElementById('qty');
let img_url = document.getElementById('img_url');
let form = document.getElementById('form');

let products = JSON.parse(localStorage.getItem('products')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let prod = {
        id: Date.now(),
        pname: pname.value.trim(),
        price: price.value.trim(),
        qty: qty.value.trim(),
        img_url: img_url.value.trim()
    };

    products.push(prod);
    localStorage.setItem('products', JSON.stringify(products));

    form.reset();
});
