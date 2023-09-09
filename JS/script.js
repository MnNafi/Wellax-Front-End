// script.js

function loadContent(file, elementId, callback) {
    const element = document.getElementById(elementId);

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                element.innerHTML = xhr.responseText;
                if (callback) {
                    callback(); // Call the callback function after loading content
                }
            } else {
                console.error('Failed to load ' + file);
                // You can display an error message to the user here
            }
        }
    };

    xhr.open("GET", file, true);
    xhr.send();
}

// Load header and footer content from separate HTML files
loadContent("../header.html", "header", initializePopups); // Call initializePopups after loading the header
loadContent("../footer.html", "footer");
