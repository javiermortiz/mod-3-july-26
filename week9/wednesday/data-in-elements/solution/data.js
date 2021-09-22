window.addEventListener("DOMContentLoaded", event => {
    const shoppingList = document.getElementById("shopping-list");
    document.getElementById("add")
        .addEventListener("click", e => {
            e.preventDefault();
            const name = document.getElementById("name");
            const type = document.getElementById("type");

            const li = document.createElement("li");
            li.innerText = name.value;
            li.dataset.type = type.value;
            console.log(li);
            // li.setAttribute("data-type", type.value);
            shoppingList.appendChild(li);

            if (li.dataset.type === 'drinks') {
                li.style.backgroundColor = 'red';
            }
            name.value = "";
            type.value = "drinks";
        })
})