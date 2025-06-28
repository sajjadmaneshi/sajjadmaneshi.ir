import { initProgressBar } from "../progress-bar/progress-bar.js";

export const tabItems = document.querySelectorAll(".nav-item");

(function () {
  if (window.location.hash) {
    const cardId = determineSelectedTab(window.location.hash);
    toggleChange(tabItems[cardId]);
    toggleCardBody(cardId);
  }

  tabItems.forEach((item, index) => {
    if (index !== tabItems.length - 1) itemClick(item);
  });

  function itemClick(item) {
    item.addEventListener("click", () => {
      toggleChange(item);
    });
  }
})();

export function toggleChange(selectedTab) {
  tabItems.forEach((item, index) => {
    if (item !== selectedTab) {
      item.classList.remove("selected");
    } else {
      item.classList.add("selected");
      toggleCardBody(index);
    }
  });
}

export function toggleCardBody(cardId) {
  // Hide all card bodies
  let cardBodies = document.getElementsByClassName("card-body-inner");

  for (let i = 0; i < cardBodies.length; i++) {
    cardBodies[i].classList.remove("d-block");
    cardBodies[i].classList.add("d-none");
  }

  // Show the selected card body
  let selectedCardBody = document.getElementById("card-body-inner-" + cardId);
  selectedCardBody.classList.remove("d-none");
  if (cardId === 2) {
    initProgressBar();
  }
}

function determineSelectedTab(hash) {
  switch (hash) {
    case "#home":
      return 0;
    case "#about":
      return 1;
    case "#skill":
      return 2;
    case "#contact":
      return 3;
    default:
      return 0;
  }
}
