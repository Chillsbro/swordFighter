window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -20;
      break;

    case "a":
      // move to left
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;

    // move to right
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
      // move to left
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;

    // move to right
  }
});
