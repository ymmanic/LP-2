document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Create user object
    var user = {
      name: name,
      email: email,
      password: password
    };
  
    // Send user data to server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Registration successful
          var response = JSON.parse(xhr.responseText);
          var registeredUser = response.user;
  
          // Store registered user data in an array or local storage
          var registeredUsers = [];
          registeredUsers.push(registeredUser);
          // OR: Store in local storage
          // var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
          // registeredUsers.push(registeredUser);
          // localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  
          // Redirect to the new page displaying the list of registered users
          window.location.href = "users.html";
        } else {
          // Registration failed
          console.error("Registration failed. Error: " + xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(user));
  });
  