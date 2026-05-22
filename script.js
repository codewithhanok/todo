// let arr =prompt("Enter the name:");
// alert("hello"+ " "+ arr);

// let arry =[];
// arry.push("apple", "orange",2);
// console.log(arry);

// arry.splice(1,0,"hello","hai");
// console.log(arry)

// arry.splice(2,1,99,78);
// console.log(arry);

// arry.splice(2,2);
// console.log(arry);

// console.log(arry);
 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todo = [];

function tododisplay(){

    console.log("\n==== TODO OPTIONS ====");
    console.log("1. Add your todo");
    console.log("2. Exit");
    console.log("3.Delete");
    console.log("4.see to do");
    console.log("5.Edit the todolist");
    
    rl.question("Enter your option: ", (choice) => {

        switch(choice){

            case "1":

                rl.question("Enter your task: ", (task) => {
                    todo.push(task);
                    console.log("Task added");
                    console.log(todo);
                    tododisplay();
                });

                break;

            case "2":

                console.log("Program exited");
                 rl.close();
                break;

          case "3":
            todo.pop();
            console.log("last option deleted exited");
            console.log(todo);
            tododisplay();
            break;

            case"4":
            console.log(todo);
            console.log("this the existing todolist");
            tododisplay();
            break;

            case "5":

               rl.question("Enter your position: ", (number) => {
               rl.question("Enter new value: ", (newtask) => {
               todo[number - 1] = newtask;
               console.log("Task updated");
               console.log(todo);
               tododisplay();

        });

    });

    break;
        }

    });

}

tododisplay();