document.addEventListener("DOMContentLoaded", function () {
    let viewData = document.querySelector('.products .row');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Render all products
    function renderProducts() {
        viewData.innerHTML = "";
        products.forEach((product, idx) => {
            let col = document.createElement('div');
            col.className = 'col-md-3 mb-3';
            col.innerHTML = `
                <div class="card h-100 border border-2 border-dark position-relative" data-idx="${idx}">
                    <img src="${product.img_url}" class="card-img-top border border-2 h-75" alt="${product.pname}">
                    <div class="card-body">
                        <p class="card-title fw-medium text">${product.pname}</p>
                        <p class="card-text fs-5 fw-bold text-black">
                            Price: ₹${product.price}<br>
                            Qty: 
                            <button class="btn btn-sm btn-outline-secondary me-1 qty-decrement">-</button>
                            <span class="qty-value">${product.qty}</span>
                            <button class="btn btn-sm btn-outline-secondary ms-1 qty-increment">+</button>
                        </p>
                        <a href="#" class="btn btn-primary">Add To Cart</a>
                    </div>
                    <button class="btn btn-danger position-absolute bottom-0 end-0 m-2 my-3 delete-btn">
                        Delete <i class="bi bi-trash"></i>
                    </button>
                </div>
            `;
            viewData.appendChild(col);
        });

        // Attach delete event listeners
        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                let card = btn.closest(".card");
                let idx = parseInt(card.getAttribute("data-idx"));
                products.splice(idx, 1);
                localStorage.setItem('products', JSON.stringify(products));
                card.classList.add("fade-out");
                setTimeout(() => {
                    card.parentElement.remove();
                    renderProducts();
                }, 300);
            });
        });

        // Attach increment/decrement event listeners
        document.querySelectorAll(".qty-increment").forEach((btn, i) => {
            btn.addEventListener("click", function () {
                let card = btn.closest(".card");
                let idx = parseInt(card.getAttribute("data-idx"));
                products[idx].qty = (parseInt(products[idx].qty) || 0) + 1;
                localStorage.setItem('products', JSON.stringify(products));
                renderProducts();
            });
        });
        document.querySelectorAll(".qty-decrement").forEach((btn, i) => {
            btn.addEventListener("click", function () {
                let card = btn.closest(".card");
                let idx = parseInt(card.getAttribute("data-idx"));
                if (products[idx].qty > 1) {
                    products[idx].qty = (parseInt(products[idx].qty) || 0) - 1;
                    localStorage.setItem('products', JSON.stringify(products));
                    renderProducts();
                }
            });
        });
    }

    renderProducts();
});