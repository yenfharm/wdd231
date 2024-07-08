const formData = new URLSearchParams(window.location.search);
    const formDataHTML = [];

    for (const [key, value] of formData) {
        formDataHTML.push(`<li>${key}: ${value}</li>`);
    }

    document.getElementById("formData").innerHTML = `<ul>${formDataHTML.join("")}</ul>`;