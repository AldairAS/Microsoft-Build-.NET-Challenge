"use strict";
//Switcher se vuelve una referencia al cambio de tema de la página
const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
  const className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }
  console.log("current class name:" + className);
});
