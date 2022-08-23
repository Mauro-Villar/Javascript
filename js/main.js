//array de objetos para cada producto
const productos = [
    { id: 1, nombre: "Pizza", precio: 500, inCart: 0,estado: true },
    { id: 2, nombre: "Empanadas", precio: 100, inCart: 0, estado: true },
    { id: 3, nombre: "Nuggets", precio: 50, inCart: 0, estado: true },
    { id: 4, nombre: "Franui", precio: 450, inCart: 0, estado: true }
  ];
  
  
  
  console.log("PreEntrega2");
  
  let carts = document.querySelectorAll('.add-cart');
  
  for(let i=0 ; i < carts.length; i++){
      carts[i].addEventListener('click', () => {
      cartNumbers(productos[i]);
      totalCost(productos[i])
      Swal.fire(
        'Producto agregado!',
        '',
        'success'
      )
    })
  }
  
  function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
  
    if(productNumbers){
      localStorage.setItem('cartNumbers', productNumbers + 1)
      document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
      localStorage.setItem('cartNumbers', 1)
      document.querySelector('.cart span').textContent = 1;
    }
  
    setItems(product);
  }
  
  function setItems (product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
  
    if(cartItems != null){
      if(cartItems[product.nombre] == undefined){
        cartItems = {
          ...cartItems,
          [product.nombre]: product
        }
      }
      cartItems[product.nombre].inCart += 1;
    } else{
      product.inCart = 1;
      cartItems = {
        [product.nombre]: product
      }
    }
  
  localStorage.setItem("productsInCart", JSON.stringify(cartItems))
  
  }
  
  function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
  
    if(cartCost != null){
      cartCost = parseInt(cartCost);
      localStorage.setItem('totalCost', cartCost + product.precio);
    }else{
      localStorage.setItem('totalCost', product.precio)
    }
  
  }
  
  function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
  
    if(productNumbers){
      document.querySelector('.cart span').textContent = productNumbers;
    }
  }
  
  function mostrarCarrito(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products")
    let totalCarrito = localStorage.getItem('totalCost');
  
    if(cartItems && productContainer) {
      productContainer.innerHTML= '' 
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product">
          <ion-icon class="product-delete-icon" name="trash-outline"></ion-icon>
          <span class="productSpan">${item.nombre}</span>
        
        <div class="price">$${item.precio},00</div>
        <div class="quantity">
          <ion-icon class="decreaseArrow" name="caret-back-circle-outline"></ion-icon>
          <span>${item.inCart}</span>
          <ion-icon class="increaseArrow" name="caret-forward-circle-outline"></ion-icon>
        </div>
        <div class="total"> $${item.inCart * item.precio},00 </div>
        </div>
        `
      })
    }
  
    productContainer.innerHTML += `
      <div class="carritoTotalContainer">
        <h4 class="carritoTotalTitle">
          Total Carrito
        </h4>
        <h4 class="totalCarrito">$${totalCarrito},00</h4>
      </div>
    `
  }
  
  //Corre la funcion siempre que inicia la pagina
  mostrarCarrito();
  //No pierdo la cant del carrito en el reload de la pagina
  onLoadCartNumbers();