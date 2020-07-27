const input = document.querySelector("#input-box-id");
const deleteAll = document.querySelector("#delete-Btn");
const taskListUl = document.querySelector("#task-list-ul");
const addItem = document.querySelector("#add-Btn");
const deleteItem = document.querySelector(".btnDeleteItem");

eventListeners();

function eventListeners() {
  //add item
  addItem.addEventListener("click", addNewItem);

  //delete item
  deleteItem.addEventListener("click", deleteItemSelf);

  
}

function addNewItem(e) {
  if (input.value === "") {
    alert("Empty!");
  }

  if (input.value !== "") {
    //create child li
    const li = document.createElement("li");
    li.className = "all-lists";

    //li text
    li.innerText = input.value;

    //create li child button
    const btnn = document.createElement("button");
    btnn.className = "btnDeleteItem";
    btnn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

    //add btn to li
    li.appendChild(btnn);

    // add li to ul
    taskListUl.appendChild(li);

    input.value = "";

    console.log(li);
  }
}

function deleteItemSelf(e) {
  if (e.target.className === "fa fa-times" && confirm("Are you sure") == true) {

    console.log("test");
    e.target.parentElement.parentElement.remove();
  }
}
