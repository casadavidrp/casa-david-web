document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenido a Casa David Repostería");

    const botones = document.querySelectorAll(".btn");

    botones.forEach(boton => {
        boton.addEventListener("mouseover", () => {
            boton.style.transform = "scale(1.05)";
        });

        boton.addEventListener("mouseout", () => {
            boton.style.transform = "scale(1)";
        });
    });
});
