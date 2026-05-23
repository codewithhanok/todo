const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let product = [ ];
let cart = [ ];

// option 1
function addproduct(){

    let id = product.length + 1;

    
    rl.question("enter your product:",(name)=>{
    rl.question("enter your price:",(price)=>{
    rl.question("enter your category:",(category)=>{

       let newProduct = {
        id : id,
        name : name,
        price:Number(price),
        category:category,
       };

       product.push(newProduct);
       console.log(product);
       menu();

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
 console.log (`${index + 1}. ${item.name} - ${item.price} - ${item.category}`)

        });
    }
    menu();
}
// option 3
function searchproduct(){
    rl.question("Enter your product:",(searchitem) =>{
       let found =product.find(item =>
        item.name === searchitem.product
       )
       if
    })
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
        if(rl.question===product[]){
            console.log("")
        }else{
            console.log("The product is not present");
        }

    case "10":
        console.log ("Thank you using our e-commerce , visit again")
        rl.close();
        break;

  }
    });
}
menu();
