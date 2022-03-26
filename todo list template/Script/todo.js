var todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);

//var completed = [];

todoItems.map(function (elem) {
    console.log(elem)


    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.itemName;

    var td2= document.createElement("td")
    td2.innerText=elem.itemQty;

    var td3= document.createElement("td");
    td3.innerText =elem.itemPrior;

    var td4 = document.createElement("td")
    var btn =document.createElement("button");
    btn.textContent="complete";
    td4.append(btn);

    tr.append(td1, td2, td3, td4);
    document.querySelector("#body").append(tr);

});

// function markCompleteFunction(elem,index){
//     completed.push(elem)
//     //console.log(completed)
//     localStorage.setItem("completedTodo", JSON.stringify(completed));
// }