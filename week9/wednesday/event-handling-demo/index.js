document.addEventListener("DOMContentLoaded", e => {
    console.log(e.type);
    // phase 1
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    document.getElementById("click-me").addEventListener("click", e => {
        console.log(e.type);
        modal.style.display = "flex";
        modalContent.style.display = "flex";
        modalContent.innerHTML = `
            <h2>Subscribe to our newsletter</h2>
            <form id="my-form" action="/users" method="POST">
                <label for="email">Email</label>
                <input type="text" name="email">
                <button>Submit</button>
            </form>
        `;

        // phase 4
        const form = document.getElementById("my-form");
        form.addEventListener("submit", e => {
            const inputVal = document.querySelector("input").value;
            console.log(inputVal);
            if (!inputVal.includes('@') || !inputVal.includes('.com')) {
                e.preventDefault();
                alert('Invalid email');
            }
        });
    });
    
    // phase 2
    const modalFunc = e => {
        console.log(e.target);
        console.log(e.currentTarget);
        modal.style.display = "none";
    }

    modal.addEventListener("click", modalFunc);

    // phase 3
    modalContent.addEventListener("click", e => {
        e.stopPropagation();
    });


});
