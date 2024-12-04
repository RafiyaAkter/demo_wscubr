
var typed = new Typed(".text", {
    strings: ["Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-container form");
    const inputs = form.querySelectorAll("input, textarea");
    
    form.addEventListener("submit", (event) => {
        let isValid = true;
        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.border = "2px solid red"; // Highlight invalid input
                input.addEventListener("input", () => {
                    input.style.border = ""; // Remove border when corrected
                });
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("Please fill out all fields correctly.");
        } else {
            alert("Your message has been sent successfully!");
        }
    });
});
