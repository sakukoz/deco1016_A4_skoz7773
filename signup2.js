var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);    
}

var constraints = {
  firstname: {
    // You need to pick a username too
    presence: true,
    // And it must be between 3 and 20 characters long
    length: {
      minimum: 3,
    },
    format: {
      // We don't allow anything that a-z and 0-9
      pattern: "[a-z ]+",
      // but we don't care if the username is uppercase or lowercase
      flags: "i",
      message: "can only contain letters"
    }
  },
  lastname: {
      // You need to pick a username too
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 3,
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[a-z ]+",
        // but we don't care if the username is uppercase or lowercase
        flags: "i",
        message: "can only contain letters"
      }
    },
  email: {
    // Email is required
    presence: true,
    // and must be an email (duh)
    email: true
  },
  
  postcode: {
    // postcode is optional but if specified it must be a 4 digit long number
    format: {
      pattern: "\\d{4}",
      message: "Postcode must be 4 digits"
    },

  }
}