document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelector(".buttons");
    let btn = document.querySelectorAll(".buttons span");
    let expression = document.getElementById("expression");
    let result = document.getElementById("result");
    let toggleBtn = document.querySelector(".toggleBtn");
    let body = document.querySelector("body");

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            if (this.innerHTML === "=") {
                // Mostrar el resultado solo cuando se presiona "="
                expression.innerHTML = "";
                result.innerHTML = eval(result.innerHTML);
            } else if (this.innerHTML === "Clear") {
                // Limpiar la pantalla si se presiona "Clear"
                expression.innerHTML = "";
                result.innerHTML = "";
            } else {
                // Agregar el número o operador a la expresión
                expression.innerHTML += this.innerHTML;
                // Mostrar el número o operador en tiempo real
                result.innerHTML = expression.innerHTML;
            }
        });
    }

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});
