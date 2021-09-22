window.addEventListener("DOMContentLoaded", e => {
    // part 0
    window.alert('The browser has loaded')


    // part 1
    const redInput = document.getElementById('red-input');
    const changeRed = e => {
        console.log(e.target);
        console.log(e.currentTarget);
        let value = e.target.value.trim().toLowerCase();
        if (value === 'red') {
            redInput.style.backgroundColor = 'red';
        } else {
            redInput.style.backgroundColor = 'transparent';
        }
    }

    redInput.addEventListener('input', changeRed);

    // part 2

    const addItem = document.getElementById("add-item");
    const ul = document.querySelector("#part-2 > ul");
    const addLi = e => {
        const input = document.querySelector("#list-add");
        const value = input.value;
        const newLi = document.createElement("li");
        newLi.innerText = value;
        ul.appendChild(newLi);
        input.value = '';
    }

    // listening to click b/c we're adding an event listener to the submit button
    addItem.addEventListener("click", addLi);

    // part 3
    // selecting input
    const colorSelect = document.getElementById("color-select");
    const changeColor = e => {
        const section = document.getElementById("part-3");
        section.style.backgroundColor = e.target.value;
    }

    //
    colorSelect.addEventListener("change", changeColor);

    // part 4
    const removeListeners = document.getElementById("remove-listeners");
    removeListeners.addEventListener("click", e => {
        redInput.removeEventListener("input", changeRed);
        addItem.removeEventListener("click", addLi);
        colorSelect.removeEventListener("change", changeColor);
    })
})