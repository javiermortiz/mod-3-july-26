window.addEventListener("DOMContentLoaded", ev => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        darkMode();
    }
    const modes = document.querySelector("#modes");
    modes.addEventListener("click", ev => {
        const selection = ev.target.id;
        if (selection === "light") {
            lightMode();
        } else if (selection === "dark") {
            darkMode();
        }
        localStorage.setItem("mode", selection);
    });
    // !!START
    const res = fetch("/products")
    console.log(res);

    fetch("/products")
        .then(res => {
            console.log(res);
            console.log("inside .then")
            return res.text()
        })
        .then(txt => console.log(1, txt));


    function myBigFunction(res) {
        console.log(res);
        console.log("inside .then")
        throw new Error("this is an error")
        return res.text()
    }
    
    fetch("/")
        .then(myBigFunction)
        .then(txt => console.log(1, txt))
        .catch(err => console.log("handling it!"));
        
    console.log("when will this execute?");
    
    (async function myFunc() {
        try {
            const res = await fetch("/products");
            const txt = await res.text();
            throw new Error("new error")
            console.log(2, txt);
            document.body.innerHTML = txt;
        } catch (err) {
            console.log('handling it again!!')
        }
    })();


    fetch("/products", {
        method: "POST",
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(res => {
        console.log({
            status: res.status,
            location: res.headers.get('location'),
            redirected: res.redirected,
            url: res.url
        });
    })

    // setTimeout(() => console.log("10 seconds passed"), 10*1000);
    function wait(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

    setTimeout(() => {
        console.log("2 seconds")
        setTimeout(() => {
            console.log("2 more seconds");
        }, 2*1000)
    }, 2*1000)


    async function bunchOfWaits() {
        await wait(2000);
        console.log("2 seconds");
        await wait(2000);
        console.log("2 seconds");
        await wait(2000);
        console.log("2 seconds");
        await wait(2000);
        console.log("2 seconds");
        await wait(2000);
        console.log("2 seconds");
        await wait(2000);
        console.log("2 seconds");
    }
    bunchOfWaits();

    
    wait(2*1000)
        .then(() => {
            console.log("2 seconds")
            return wait(2*1000)
        })
        .then(() => {
            console.log("2 more seconds");
        })
        .then(() => {
            console.log("2 seconds")
            return wait(2 * 1000)
        })
        .then(() => {
            console.log("2 more seconds");
        })
        .then(() => {
            console.log("2 seconds")
            return wait(2 * 1000)
        })
        .then(() => {
            console.log("2 more seconds");
        })
        .then(() => {
            console.log("2 seconds")
            return wait(2 * 1000)
        })
        .then(() => {
            console.log("2 more seconds");
        });

    // !!END
});

function lightMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "";
    h1.className = "";
    a.forEach(tag => tag.className = "");
    ul.className = "";
    button.className = "";
    li.forEach(tag => tag.className = "");
}

function darkMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "dark";
    h1.className = "dark";
    a.forEach(tag => tag.className = "dark");
    ul.className = "dark";
    button.className = "dark";
    li.forEach(tag => tag.className = "dark");
}