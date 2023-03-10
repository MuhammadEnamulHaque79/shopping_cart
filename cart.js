
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