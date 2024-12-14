document.addEventListener('DOMContentLoaded', function () {
    llenarCarrito();
});

function llenarCarrito () {
    var cartLocalStorage = localStorage.getItem("cart");            
    var cartArray        = cartLocalStorage ? JSON.parse(cartLocalStorage) : [];

    let html = '';

    if (cartArray.length > 0) {
        for (let i = 0; i < cartArray.length; i++) {
            html += `
                <article class="cart-item">
                    <div class="producto">
                        <img src="${cartArray[i].imagen}"
                            alt="Descripción del producto" class="product-image">
                        <div class="item-details">
                            <h2>${cartArray[i].nombre}</h2>
                        </div>
                    </div>
                    <div class="precio-cantidad">
                        <p>Precio: S/ ${cartArray[i].precio}</p>
                        <div class="quantity-controls">
                            <button class="quantity-button decrease-quantity">-</button>
                            <input type="number" id="quantity" name="quantity" value="${cartArray[i].cantidad}" min="1">
                            <button class="quantity-button increase-quantity">+</button>
                        </div>
                        <button class="remove-item">Eliminar</button>
                    </div>
                </article>
            `;
        }

        document.querySelector('.article-list').innerHTML = html;
    } else {
        document.querySelector('.carrito-contenedor').innerHTML = 'No hay productos en el carrito';
    }
}