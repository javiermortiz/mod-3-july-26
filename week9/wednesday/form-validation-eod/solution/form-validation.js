window.addEventListener("DOMContentLoaded", (event) => {
  const licenseForm = document.getElementById("drivers-license-form");
  const submitButton = document.querySelector(".form__submit");

  licenseForm.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "lightgreen";
  }, true);
  // change back to initial state on blur
  licenseForm.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = "";
  }, true);

 

  const validators = () => {
    const errors = [];
    const title = document.getElementById('title').value;
    if (!title) {
      errors.push("Title field is missing");
    }

    const firstName = document.getElementById('first-name').value;
    if (!firstName) {
      errors.push("First Name field is missing");
    }

    const lastName = document.getElementById('last-name').value;
    if (!lastName) {
      errors.push("Last Name field is missing");
    }

    const eyeColor = document.getElementById('eye-color').value;
    if (!eyeColor) {
      errors.push("Eye Color field is missing");
    }

    const height = document.getElementById('height').value;
    if (!height) {
      errors.push("Height field is missing");
    }

    const licenseNumber = document.getElementById('license-num').value;
    if (!licenseNumber) {
      errors.push("License Number field is missing");
    }

    const licenseNumberConfirm = document.getElementById('license-num-confirm').value;
    if (!licenseNumberConfirm) {
      errors.push("License Number Confirm field is missing");
    }

    // Confirm that licenses values are the same
    if (licenseNumber !== licenseNumberConfirm) {
      // prevent the default submission behavior
      errors.push("License numbers must match!");
    }
    
    return errors;
  } 

  const setErrors = () => {
    let errors = validators();
    errors = errors.map(error => {
      return `<li>${error}</li>`
    });
    const ul = document.getElementById("errors");
    ul.innerHTML = errors.join("");
  }

  const resetForm = () => {
    document.getElementById('title').value = '';
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('eye-color').value = '';
    document.getElementById('height').value = '';
    document.getElementById('license-num').value = '';
    document.getElementById('license-num-confirm').value = '';
  }

  const getFormData = () => {
    const title = document.getElementById('title').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const eyeColor = document.getElementById('eye-color').value;
    const height = document.getElementById('height').value;
    const licenseNumber = document.getElementById('license-num').value;
    return {
      title,
      firstName,
      lastName,
      eyeColor,
      height,
      licenseNumber
    }
  }

  licenseForm.addEventListener("input", (event) => {
    setErrors();
  });

  licenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let errors = validators();
    if (errors.length) {
      setErrors();
    } else {
      fetch('/licenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(getFormData())
      });
      resetForm();
      const h2 = document.createElement('h2');
      h2.innerText = 'Thank you!'
      document.body.appendChild(h2);
    }

  });
  

});