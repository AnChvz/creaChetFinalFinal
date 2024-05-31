document.addEventListener("DOMContentLoaded", function() {
const buttons = document.querySelectorAll(".my-button");
const line = document.querySelector(".line");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Eliminar la clase "selected" de todos los botones
        buttons.forEach(btn => btn.classList.remove("selected"));
        // Agregar la clase "selected" al botón actual
        this.classList.add("selected");
        // Obtener la posición del botón actual
        const buttonRect = this.getBoundingClientRect();
        // Mover la línea al centro horizontal del botón actual
        line.style.left = `${buttonRect.left + (buttonRect.width / 2) - (line.offsetWidth / 2)}px`;
    });
})
});