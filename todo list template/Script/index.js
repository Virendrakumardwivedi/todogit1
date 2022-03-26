
document.querySelector("#form").addEventListener("submit",myFunction)


//var todoList = [];
var todoList = JSON.parse(localStorage.getItem("todoData"))||[]


function myFunction () {
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#qty").value;
    var priority = document.querySelector("#priority").value;

    var todoObj = {
        itemName : name,
        itemQty : quantity,
        itemPrior : priority,
    };
     
    //console.log(todoObj);
    todoList.push(todoObj);
    console.log(todoList);


   localStorage.setItem("todoData",JSON.stringify(todoList));
}