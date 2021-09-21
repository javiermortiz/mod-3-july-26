// Making buttons interactive

// Add dog button
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        // URL of new dog image
        console.log(data);
        const url = data.message;

        // Get breed (Hint: Parse from URL)

        // Create element to inject 
        const newImg = document.createElement('img');
        newImg.src = url;
        console.log(newImg);
        // Inject element into correct location
        const ul = document.querySelector('.gallery > ul');
        console.log(ul);
        ul.appendChild(newImg);
    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

// Remove first dog button
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    // Select first dog

    // Remove

});

// Remove last dog button
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    // Select last dog

    // Remove

});
