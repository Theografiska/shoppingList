const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("#add-btn");

btn.addEventListener("click", () => {
    itemValue = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const spanItem = document.createElement("span");
    const deleteButton = document.createElement("button");
    listItem.appendChild(spanItem);
    listItem.appendChild(deleteButton);
    spanItem.textContent = itemValue;
    deleteButton.textContent = "Delete";
    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => { 
        deleteButton.parentNode.remove(); // delete button removes a whole row
    })

    input.focus();
});

