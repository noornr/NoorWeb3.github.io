// Welcome Message
console.log("Welcome to NOOR WEB3");

// Smooth button animation
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.08)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Fade-in animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
