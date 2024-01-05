let input = prompt ("What would you like to do!!!.")
const todos = ['adhiraj','pawar']
while(input !== "quit" && input !== "q") {
    if (input === "List") {
        console.log("**************")
         for (let i=0; i<todos.length; i++) {
            console.log('${i}: ${todos[i]}');   
         }
        console.log("**************")
    } else if (input === 'new') {
        const newTodo = prompt("Ok! What is the new todo?");
        todos.push(newTodo);
        console.log('${newTodo} added to the List!');
    } else if(input === "delete"){
        const index = parseInt(prompt ("OK,Enter an Index to delete:"));
        if(!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log('Ok, deleted ${deleted[0]}');
        } else {
            console.log('Unknown Index:')
        }
    }
    input = prompt ("What would you like to do!!!.")
}
console.log("OK Quit the App!")