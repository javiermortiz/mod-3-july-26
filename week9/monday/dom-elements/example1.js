/* Select the div element from the tree by looking through the child elements
    in document.body.children to find the index */
let div = document.body.children[1];

// Repeat the process on the div to find the ul 
let ul = div.children[0];

// Repeat one more time to select the third li element
let thirdLi = ul.children[2];

// Change the text to something new using the innerText property of an element
thirdLi.innerText = "New Text"


/* SOLUTION
window.onload = () => {
  let div = document.body.children[1];
  console.log(div);
  let ul = div.children[0];
  let thirdLi = ul.children[2];

  thirdLi.innerText = "New Text";
};
*/