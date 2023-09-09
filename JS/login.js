// login.js
// Wrap your pop-up code in a function
function initializePopups() {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const switchToLoginButton = document.getElementById('switchToLogin'); // Add this
    const loginPopup = document.getElementById('loginPopup');
    const signupPopup = document.getElementById('signupPopup');
    const closePopup = document.getElementById('closePopup');
    const closeSignupPopup = document.getElementById('closeSignupPopup');

    loginButton.addEventListener('click', () => {
        loginPopup.style.display = 'block';
        signupPopup.style.display = 'none';
    });

    signupButton.addEventListener('click', () => {
        loginPopup.style.display = 'none';
        signupPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    closeSignupPopup.addEventListener('click', () => {
        signupPopup.style.display = 'none';
    });

    // Add an event listener for switching to the login page from the signup page
    switchToLoginButton.addEventListener('click', () => {
        loginPopup.style.display = 'block';
        signupPopup.style.display = 'none';
    });

    // Close the login popup if the user clicks anywhere outside of it
    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });

    // Close the signup popup if the user clicks anywhere outside of it
    window.addEventListener('click', (event) => {
        if (event.target === signupPopup) {
            signupPopup.style.display = 'none';
        }
    });
}

// Load header content from header.html
loadContent("../header.html", "header", initializePopups);
loadContent("../footer.html", "footer");
