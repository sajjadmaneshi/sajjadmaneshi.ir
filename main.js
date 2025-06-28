import { typingInterval } from "./components/editor/editor.js";
import "./components/nav-bar/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  typingInterval();
});
window.addEventListener("load", function () {
  setTimeout(function () {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("loaded");
  }, 1000); // 2-second delay
});
