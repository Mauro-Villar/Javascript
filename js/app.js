products = [];

// Selecciono los div para utilizar DOM
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
const checkoutEl = document.querySelector(".checkout");

// Muestro los productos
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>
                            ${product.description}
                        </p>
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
        `;
  });
}

const getData = async () => {
  try {
    const res = await fetch(`./products.json`);
    const data = await res.json();
    products = data; //Agrego los datos del json en un array de productos

    //Muestro los productos
    renderProdcuts();

  } catch (error) {
    console.log(error);
  }
};

//Levanto la info del JSON
getData();


// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Agregar al carrito
function addToCart(id) {
  // Me fijo si existe el producto en el carrito
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });

    Swal.fire(
      'Producto nuevo agregado al carrito!',
      '',
      'success'
    )
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // guardo en localstorage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculo y muestro el subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// muestro los productos en el carrito
function renderCartItems() {
  cartItemsEl.innerHTML = ""; 
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// eliminar item del carrito
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// modifico cantidades en el carrito
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

//boton finalizar compra
function checkout() {
    checkoutEl.innerHTML += `
    <div onclick="finishSale()">Finalizar Compra</div>
        `;
}

const finishSale = () => {
  localStorage.clear();

  Swal.fire({
    title: 'Finalizar compra?',
    text: "",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Compra realizada!',
        '',
        'success'
      )

      setTimeout(location.reload.bind(location), 1500);
    }
  })

}

checkout();