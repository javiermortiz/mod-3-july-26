document.addEventListener("DOMContentLoaded", async ev => {
    // Fetch all posts
    await fetchPosts();
    addListeners();
});

async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    data = data.slice(0, 10);
    console.log({
        statusCode: res.status,
        headers: {
            "Content-Type": res.headers.get("Content-Type")
        },
        body: data
    });
    const postsContainer = document.querySelector(".posts-list");
    const lis = data.map(post => `
        <div class="post">
            <h2 class="post-title" id="${post.id}">${post.title}</h2>
            <button class="edit" id="${post.id}">Edit Post</button>
            <button class="delete" id="${post.id}">Delete Post</button>
        </div>
    `);
    postsContainer.innerHTML = lis.join("");
}

async function fetchSinglePost(id) {
    if (parseInt(id) > 100) id = "1";
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    let data = await res.json();
    console.log({
        statusCode: res.status,
        headers: {
            "Content-Type": res.headers.get("Content-Type")
        },
        body: data
    });
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = `
        <div class="modal">
            <div class="modal-content">
                <div class="post">
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                </div>
            </div>
        </div>
    `;
    const modal = document.querySelector(".modal");
    modal.addEventListener("click", modalEv => {
        modalContainer.innerHTML = ""
    });
}

async function createRandomPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await res.json();
    console.log({
        statusCode: res.status,
        headers: {
            "Content-Type": res.headers.get("Content-Type")
        },
        body: data
    });
    const randomPost = `
        <div class="post">
            <h2 class="post-title" id="${data.id}">${data.title}</h2>
            <button class="edit" id="${data.id}">Edit Post</button>
            <button class="delete" id="${data.id}">Delete Post</button>
        </div>
    `;
    const postsContainer = document.querySelector(".posts-list");
    postsContainer.innerHTML = randomPost + postsContainer.innerHTML;
    addListeners();
}

async function editPost(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'Edited title',
            body: 'Edited body',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await res.json();
    console.log({
        statusCode: res.status,
        headers: {
            "Content-Type": res.headers.get("Content-Type")
        },
        body: data
    });
}

async function deletePost(id) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
        method: "DELETE"
    });
    let data = await res.json();
    console.log({
        statusCode: res.status,
        headers: {
            "Content-Type": res.headers.get("Content-Type")
        },
        body: data
    });
}

function addListeners() {
    // Add event listeners for fetching single post
    const posts = document.querySelectorAll(".post-title");
    posts.forEach(post => {
        post.addEventListener("click", async postEv => {
            // post details
            const targetId = postEv.target.id;
            await fetchSinglePost(targetId);
            // form to add post
            // create the post
            // edit a post
            // delete a post
            // get all the comments associated to a post
        });
    });

    // addEventListener for creating random post
    const random = document.getElementById("random");
    random.addEventListener("click", async randomEv => {
        await createRandomPost();
    });

    // add event listeners for editing post
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach(button => {
        button.addEventListener("click", async editEv => {
            const targetId = editEv.target.id;
            await editPost(targetId);
        });
    });

    // Add event listeners for deleting post
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", async deleteEv => {
            const targetId = deleteEv.target.id;
            await deletePost(targetId);
        });
    });
}