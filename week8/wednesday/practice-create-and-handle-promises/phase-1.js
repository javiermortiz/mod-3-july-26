function stretch() {
  //!!START
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching")
      resolve();
    }, 1000);
  });
  //!!END
}

function runOnTreadmill() {
  //!!START
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
  //!!END
}

function liftWeights() {
  //!!START
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
  //!!END
}

function workout() {
  //!!START
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log("done working out"))
    .catch((err) => {
      console.log(err)
    });
  //!!END
}



/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/
workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out