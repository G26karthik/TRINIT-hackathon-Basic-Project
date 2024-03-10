function login() {
    var emailPhone = document.getElementById("emailPhone").value;
    var password = document.getElementById("password").value;

    // Authenticate using email/phone and password
    firebase.auth().signInWithEmailAndPassword(emailPhone, password)
    .then((userCredential) => {
        // Redirect to main page after successful login
        window.location.href = "Home.html";
    })
    .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage); // Display error message to the user
    });
}

