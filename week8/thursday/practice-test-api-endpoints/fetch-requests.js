/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

//!!START
// using Promise chain (.then), using res.text()
fetch('/posts')
  .then(res => {
    console.log(res.status); // 200
    console.log(res.headers.get('content-type')); // application/json
    return res.text();
  })
  .then(serializedBody => {
    console.log(serializedBody);  // JSON string 
    // [{"postId":1,"message":"Hello World!"},{"postId":2,"message":"Ciao!"}]
    console.log(JSON.parse(serializedBody)); // JavaScript object
    // [
    //   {
    //     "postId": 1,
    //     "message": "Hello World!"
    //   },
    //   {
    //     "postId": 2,
    //     "message": "Ciao!"
    //   }
    // ]
  });

// using Promise chain (.then), using res.json()
fetch('/posts')
  .then(res => {
    console.log(res.status); // 200
    console.log(res.headers.get('content-type')); // application/json
    return res.json();
  })
  .then(deserializedBody => {
    console.log(deserializedBody);  // JavaScript object
    // [
    //   {
    //     "postId": 1,
    //     "message": "Hello World!"
    //   },
    //   {
    //     "postId": 2,
    //     "message": "Ciao!"
    //   }
    // ]
  });

// using Promise chain (.then) and async/await
fetch('/posts')
  .then(async res => {
    console.log(res.status); // 200
    console.log(res.headers.get('content-type')); // application/json

    // using res.json()
    const deserializedBody = await res.json(); // JavaScript object
    console.log(deserializedBody);
    // [
    //   {
    //     "postId": 1,
    //     "message": "Hello World!"
    //   },
    //   {
    //     "postId": 2,
    //     "message": "Ciao!"
    //   }
    // ]
  });

// using async/await
(async function() {
  const res = await fetch('/posts');
  console.log(res.status); // 200
  console.log(res.headers.get('content-type')); // application/json

  // using res.json()
  const deserializedBody = await res.json(); // JavaScript object
  console.log(deserializedBody);
  // [
  //   {
  //     "postId": 1,
  //     "message": "Hello World!"
  //   },
  //   {
  //     "postId": 2,
  //     "message": "Ciao!"
  //   }
  // ]
})();
//!!END



/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

//!!START
// using Promise chain (.then) and async/await, using res.json()
fetch('/posts', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "Hola!"
  })
})
  .then(async res => {
    console.log(res.status); // 201
    console.log(res.headers.get('content-type')); // application/json

    // using res.json()
    const deserializedBody = await res.json();// JavaScript object
    console.log(deserializedBody);
    /*
    {
      "postId": 3,
      "message": "Hola!"
    }
    */
  });

// using async/await, using res.text()
(async function() {
  const res = await fetch('/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Hola!"
    })
  });

  console.log(res.status); // 201
  console.log(res.headers.get('content-type')); // application/json

  // using res.text()
  const serializedBody = await res.text(); // JSON string
  // {"postId":3,"message":"Hola!"}
  console.log(JSON.parse(serializedBody)); // JavaScript object
  /*
  {
    "postId": 3,
    "message": "Hola!"
  }
  */
})();
//!!END

