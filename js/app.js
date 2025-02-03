const $crossIconPlayer = document.querySelector(".new-game-screen-icon-cross");
const $circleIconPlayer = document.querySelector(
  ".new-game-screen-icon-circle"
);

const $newGameCPU = document.querySelector(
  ".new-game-screen-new-game-buttons__button"
);
const $newGamePlayer = document.querySelector(
  ".new-game-screen-new-game-buttons__button--secondary"
);

console.log($crossIconPlayer);
console.log($circleIconPlayer);
console.log($newGameCPU);
console.log($newGamePlayer);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  $crossIconPlayer.addEventListener("click", () => {
    console.log("Cross");

    $crossIconPlayer.classList.add(
      "new-game-screen-pick-player-icon--selected"
    );

    $circleIconPlayer.classList.remove(
      "new-game-screen-pick-player-icon--selected"
    );
  });

  $circleIconPlayer.addEventListener("click", () => {
    console.log("Circle");

    $circleIconPlayer.classList.add(
      "new-game-screen-pick-player-icon--selected"
    );

    $crossIconPlayer.classList.remove(
      "new-game-screen-pick-player-icon--selected"
    );
  });

  $newGameCPU.addEventListener("click", () => {
    console.log("CPU");

    window.location.href = "./pages/game.html";
  });

  $newGamePlayer.addEventListener("click", () => {
    console.log("Player");

    window.location.href = "./pages/game.html";
  });
});
