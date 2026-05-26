const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let product = [ ];
let cart = [ ];


// function product name 
function productname(){
    rl.question("enter your product:",(productname)=>{
        let index = product.find(
            item => item.name=== productname 
        )
        if(index){
            console.log( `${index.id}. ${index.name} - ${index.price} - ${index.category}`)
        }else{
            console.log(" product is not find")
        }
       
    })
}
// option 1
function addproduct(){

    let id = product.length + 1;

    
    rl.question("enter your product:",(name)=>{
    rl.question("enter your price:",(price)=>{
    rl.question("enter your stock:",(stock)=>{
    rl.question("enter your category:",(category)=>{

       let newProduct = {
        id : id,
        name : name,
        price:Number(price),
        stock:stock,
        category:category,
       };

       product.push(newProduct);
    //    console.log(product);
     console.log(
                `${newProduct.id}. ${newProduct.name} - ${newProduct.price} -${newProduct.stock}- ${newProduct.category}`
            );

       menu();

        })
    })
})
    })
}

// option 2
function viewproduct(){ 
    if (product.length===0){
        console.log("not product is added");

    }else{
        product.forEach((item, index) => {
 console.log (`${index + 1}. ${item.name} - ${item.price} -${item.stock} - ${item.category}`)

        });
    }
    menu();
}

// option 3
function searchproduct(){
    rl.question("Search your product:",(searchitem) =>{
       let found =product.find(item =>
        item.name === searchitem
       )
        if(found){

            console.log("Product Found:");
            console.log(
                `${found.id}. ${found.name} - ${found.price} -${found.stock}- ${found.category}`
            );

        } else {

            console.log("Product not found");

        }

        menu();
    })
} 
// option 4
function deleteproduct(){
    rl.question("Enter your product:",(name)=>{
        let index =product.findIndex(
            item => item.name === name );

        if( index!==-1 ){

            product.splice(index,1);
            console.log(" the product is deleted");
        }else{
            console.log(" The product is not found");
        }

        menu();
    });
}
// option 5
function editproduct(){
    rl.question("enter the product to edit:",(searchproduct)=>{
        let found = product.find(
            item => item.name === searchproduct )
            if (found){
                rl.question("Enter your new product:",(name)=>{
                rl.question("Enter your new price:",(price)=>{
                rl.question("Enter your new category:",(stock)=>{
                rl.question("Enter your new category:",(category)=>{
                    
                        found.name = name;
                        found.price = Number(price);
                        found.stock = stock;
                        found.category = category;
                        console.log("Product updated successfully");

                        console.log(found);

                        menu();
                })
                })
                })
                })
            }
    });
}
// option 6
function addcart(){
    
    rl.question("enter the product to add cart:",(cartitem)=>{
        
        let found =product.find(
            item => item.name === cartitem
        );
        if(found){
            cart.push(found);
            console.log("Product added to cart");
            console.log(cart);
        }else{
            console.log(" the product is not found")
        }
        menu();
    });
}
// option7
function viewcart(){
    if (cart.length === 0){
        console.log("no product is the cart")
    }else{
        console.log("\n=== Cart Items ===");
        cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} -${item.stock} - ${item.category}`
            );
        });
    }
    let totalcart =cart.reduce((sum,item)=>sum + item.stock,0);
    console.log(`total stock = ${totalcart}`)
menu();
}
// option 8
function deletecart(){
    rl.question("Enter your cart:",(name)=>{
        let index =cart.findIndex(
            item => item.name === name );

        if( index!==-1 ){

            cart.splice(index,1);
            console.log(" the cart product is deleted");
        }else{
            console.log(" The cart product is not found");
        }

        menu();
    });
}
// option 9
function billcart(){
    if (cart.length === 0){
        console.log("no product is the cart")
    }else{
        console.log("\n=== Cart Items ===");
        cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} - ${item.category}`
        );
        console.log("succesfully bill generated");

    });
}
menu();
}
// option 10 
function exittodo(){
        console.log ("Thank you using our e-commerce , visit again")
        rl.close();
}

function menu (){
    console.log ("\n === E-commerce menu ==== ");
    console.log("1.ADD PRODUCT");
    console.log("2.VIEW PRODUCT");
    console.log("3.SEARCH PRODUCT")
    console.log("4.DELETE PRODUCT");
    console.log("5.EDIT PRODUCT");
    console.log("6.ADD TO CART");
    console.log("7.VIEW CART");
    console.log("8.REMOVE CART");
    console.log("9.BILL CART");
    console.log("10.EXIT");
   
    rl.question(" Choose an option :", (choice)=>{

  switch (choice){
    case "1":
        addproduct();
        break;

    case "2":
        viewproduct();
        break;
        
    case "3":
        searchproduct();
        break;

    case "4":
        deleteproduct();
        break;

    case "5":
        editproduct();
        break;
        
    case"6":
        addcart();
        break;
        
     case"7":
        viewcart();
        break;

        case "8":
        deletecart();
        break;

        case"9":
        billcart();
        break;

    case "10":
       exittodo();
        break;

  }
    });
}
menu( );
