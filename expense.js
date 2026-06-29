const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function exit(){
        console.log ("Thank you using our e-commerce , visit again")
        rl.close();
}
function menu(){
    console.log ( "------Expense tracker----")
    console.log("1.ADD your money:")
    console.log("2.ADD YOUR EXPENSE")
    console.log("3.SHOW EXPENSE HISTROY ")
    console.log("4.SHOW YOUR REMAINING MONEY")
    console.log("5.EXIT")
     
    rl.question("Choose your options:",(choice)=>{
      switch(choice){
        case"1":
          addmoney();
          break;

          case"2":
          addexpense();
          break;

          case"3":
          expensehistroy();
          break;

          case"4":
          remainingmoney();
          break;
          
          case "5":
        exit();
        break;
      }
    })
}
menu();