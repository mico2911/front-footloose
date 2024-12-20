document.addEventListener('DOMContentLoaded', function () {
    llenarCarrito();
});

function llenarCarrito () {
    var cartLocalStorage = localStorage.getItem("cart");            
    var cartArray        = cartLocalStorage ? JSON.parse(cartLocalStorage) : [];

    let html = '';
    let montoTotal = 0;

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

            montoTotal += cartArray[i].precio * cartArray[i].cantidad;
        }

        document.querySelector('.article-list').innerHTML = html;

        actualizarMonto(montoTotal);
    } else {
        document.querySelector('.carrito-contenedor').innerHTML = 'No hay productos en el carrito';
    }
}

function actualizarMonto(montoTotal) {
    document.querySelector('.subtotal-price').innerHTML = 'S/ ' + montoTotal;
    document.querySelector('.total-price').innerHTML = 'S/ ' + montoTotal;
}

function finalizarCompra() {
    localStorage.removeItem('cart');
    window.location.href = "/05_FinalizarPedido.html";
}