const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = [];

function menu() {
  console.log("\n===== TODO MENU =====");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Delete Task");
  console.log("4. Exit");

  rl.question("Choose an option: ", (choice) => {

    switch (choice) {

      case "1":
        rl.question("Enter task: ", (task) => {
          todos.push(task);
          console.log("Task Added!");
          menu();
        });
        break;

      case "2":
        console.log("\nYour Tasks:");

        if (todos.length === 0) {
          console.log("No tasks available.");
        } else {
          todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
          });
        }

        menu();
        break;

      case "3":
        rl.question("Enter task number to delete: ", (num) => {
          let index = num - 1;

          if (todos[index]) {
            todos.splice(index, 1);
            console.log("Task Deleted!");
          } else {
            console.log("Invalid Task Number");
          }

          menu();
        });
        break;

      case "4":
        console.log("Exiting...");
        rl.close();
        break;

      default:
        console.log("Invalid Choice");
        menu();
    }

  });
}

menu();


