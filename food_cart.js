let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Cheesy Chicken Garlic Bread1',
        price:1000,
        tag:'Cheesy Chicken Garlic Bread1',
        inCart:0
    },
    {
        name:'Cheesy Chicken Garlic Bread2',
        price:1200,
        tag:'Cheesy Chicken Garlic Bread2',
        inCart:0
    },
    {
        name:'Cheesy Chicken Garlic Bread3',
        price:1600,
        tag:'Cheesy Chicken Garlic Bread3',
        inCart:0
    },
    {
        name:'Cheesy Chicken Garlic Bread4',
        price:1800,
        tag:'Cheesy Chicken Garlic Bread4',
        inCart:0
    },
    {
        name:'Cheesy Chicken Garlic Bread5',
        price:1500,
        tag:'Cheesy Chicken Garlic Bread5',
        inCart:0
    },
    {
        name:'Cheesy Chicken Garlic Bread6',
        price:1400,
        tag:'Cheesy Chicken Garlic Bread6',
        inCart:0
    },
    {
        name:'Cheesy Chicken Rice1',
        price:1400,
        tag:'Cheesy Chicken Rice1',
        inCart:0
    },
    {
        name:'Cheesy Chicken Rice2',
        price:1400,
        tag:'Cheesy Chicken Rice2',
        inCart:0
    },
    {
        name:'Cheesy Chicken Rice3',
        price:1400,
        tag:'Cheesy Chicken Rice3',
        inCart:0
    },
    {
        name:'Cheesy Chicken Rice4',
        price:1400,
        tag:'Cheesy Chicken Rice4',
        inCart:0
    },
    {
        name:'Cheesy Chicken Rice5',
        price:1400,
        tag:'Cheesy Chicken Rice5',
        inCart:0
    },
    {
        name:'Cheesy Chicken Rice6',
        price:1400,
        tag:'Cheesy Chicken Rice6',
        inCart:0
    },
    {
        name:'Cheesy Chicken Pasta1',
        price:1400,
        tag:'Cheesy Chicken Pasta1',
        inCart:0
    },
    {
        name:'Cheesy Chicken Pasta2',
        price:1400,
        tag:'Cheesy Chicken Pasta2',
        inCart:0
    },
    {
        name:'Cheesy Chicken Pasta3',
        price:1400,
        tag:'Cheesy Chicken Pasta3',
        inCart:0
    },
    {
        name:'Cheesy Chicken Pasta4',
        price:1400,
        tag:'Cheesy Chicken Pasta4',
        inCart:0
    },
    {
        name:'Cheesy Chicken Pasta5',
        price:1400,
        tag:'Cheesy Chicken Pasta5',
        inCart:0
    },
    {
        name:'Cheesy Chicken Pasta6',
        price:1400,
        tag:'Cheesy Chicken Pasta6',
        inCart:0
    },
    {
        name:'Chocolet Cake1',
        price:1400,
        tag:'Chocolet Cake1',
        inCart:0
    },
    {
        name:'Chocolet Cake2',
        price:1400,
        tag:'Chocolet Cake2',
        inCart:0
    },
    {
        name:'Chocolet Cake3',
        price:1400,
        tag:'Chocolet Cake3',
        inCart:0
    },
    {
        name:'Chocolet Cake4',
        price:1400,
        tag:'Chocolet Cake4',
        inCart:0
    },
    {
        name:'Chocolet Cake5',
        price:1400,
        tag:'Chocolet Cake5',
        inCart:0
    },
    {
        name:'Chocolet Cake6',
        price:1400,
        tag:'Chocolet Cake6',
        inCart:0
    },



]

for(let i=0; i< carts.length;i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalCost(products[i])
      
    })

}
function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');
    document.querySelector('.cart span').textContent = productNumbers;

}

function cartNumbers(products){
   
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
   
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = 1 + productNumbers;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(products);
    }

    function setItems(products) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems) || {};
    
        if (cartItems[products.tag] === undefined) {
            products.inCart = 1;
            cartItems[products.tag] = products;
        } else {
            cartItems[products.tag].inCart += 1;
        }
    
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }
    
function totalCost(products){

    let cartCost = localStorage.getItem('totalCost');
   
    console.log(cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);

        localStorage.setItem("totalCost",cartCost + products.price);
    }
    else{
        localStorage.setItem("totalCost",products.price);
    }
  
}

/*function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
     cartItems = JSON.parse(cartItems);
    let productContainer=document.querySelector(".container");
    if(cartItems && productContainer){
       productContainer.innerHTML = '';
       Object.values(cartItems).map(item =>{
            productContainer.innerHTML +=`
            
            `
       })
    }
} */

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".container .table tbody");

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';

        let totalCost = 0;
        let cartCount = 1;

        Object.values(cartItems).forEach(item => {
            let subtotal = item.price * item.inCart;
            totalCost += subtotal;

            productContainer.innerHTML += `
                <tr>
                    <th scope="row">${cartCount}</th>
                    <td>${item.name}</td>
                    <td class="font-bold text-center">Rs ${item.price.toFixed(2)}</td>
                    <td>
                        <div class="form-group text-center">
                            <input type="number" class="form-control form-control count_of_item" value="${item.inCart}" min="1" max="100" data-tag="${item.tag}">
                        </div>
                    </td>
                    <td class="font-bold text-center">Rs ${subtotal.toFixed(2)}</td>
                    <td class="text-center"><button class="btn btn-sm btn-danger delete-item" data-tag="${item.tag}">Delete</button></td>
                </tr>
            `;
            cartCount++;
        });

        // Update total cost in the table
        // alert(totalCost.toFixed(2));
        
        // let totalRow = `
        //     <tr>
        //         <td class="col-5"></td>
        //         <td class="col-50" style="font-size: 20px;font-weight:bold;">TOTAL</td>
        //         <td class="col-10"></td>
        //         <td class="col-6"></td>
        //         <td class="col-15 text-center" style="font-size: 20px;font-weight:bold;">Rs ${totalCost.toFixed(2)}</td>
        //         <td></td>
        //         </tr>
        // `;

        //pass total value to view
        document.getElementById("subtotalcost").innerHTML=totalCost.toFixed(2);
        document.getElementById("totalcost").innerHTML=totalCost.toFixed(2);

        // productContainer.innerHTML += totalRow;

        let deleteButtons = document.querySelectorAll('.delete-item');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                let tagToDelete = this.getAttribute('data-tag');
                deleteItem(tagToDelete);
            });
        });
    }
}
document.addEventListener('change', function(event) {
    if (event.target.classList.contains('count_of_item')) {
        let newQuantity = parseInt(event.target.value);
        let itemTag = event.target.dataset.tag;

        updateQuantity(itemTag, newQuantity);
    }
});



/*function updateQuantity(tag, quantity) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

    if (cartItems[tag] !== undefined) {
        cartItems[tag].inCart = quantity;
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    displayCart(); 
}*/

function updateQuantity(tag, quantity) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

    if (cartItems[tag] !== undefined) {
        let prevQuantity = cartItems[tag].inCart;
        cartItems[tag].inCart = quantity;

        // Update total quantity in the header
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers) + quantity - prevQuantity;
        localStorage.setItem('cartNumbers', productNumbers);
        document.querySelector('.cart span').textContent = productNumbers;
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    displayCart();
}

function deleteItem(tag) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

    if (cartItems[tag] !== undefined) {
        let itemToDelete = cartItems[tag];
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers) - itemToDelete.inCart;

        delete cartItems[tag];
        localStorage.setItem('cartNumbers', productNumbers);
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        document.querySelector('.cart span').textContent = productNumbers;

        displayCart(); // Refresh cart display after deletion
    }
}



    onLoadCartNumber();
    displayCart();
    