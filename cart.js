
const addProduct =()=>{
    const productField = document.getElementById('product-name');
    const product = productField.value;
    productField.value = '';
    console.log(product);
    const quantityField = document.getElementById('product-quantity');
    const quantity = quantityField.value;
    quantityField.value = '';
    console.log(quantity);
    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity);

}

const displayProduct =(product,quantity)=>{
   const productContainer = document.getElementById('product-container');
   const div = document.createElement('div');
   div.innerHTML=`
   <h4>Product Name: ${product}</h4>
   <h5>Product Quantity: ${quantity}</h5>
   `;
   productContainer.appendChild(div);
}

//shopping cart section;
const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
        return cart;
}

//save product into local storage;

const saveProductToLocalStorage =(product,quantity)=>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    // console.log(cart);
    const cartStringified = JSON.stringify(cart);
    // console.log(cartStringified);
    localStorage.setItem('cart',cartStringified);
}

const displayProductFromLocalStorage =()=>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}

displayProductFromLocalStorage();