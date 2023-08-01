const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/backgroundLevel1.png",
});
const backgroundLevel2 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/backgroundLevel2.png",
});

const player = new Player({
  collisionBlocks,
  imageSrc: "./img/king/idle.png",
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 30,
      loop: true,
      imageSrc: "./img/king/idle.png",
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 30,
      loop: true,
      imageSrc: "./img/king/idleLeft.png",
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 10,
      loop: true,
      imageSrc: "./img/king/runRight.png",
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 10,
      loop: true,
      imageSrc: "./img/king/runLeft.png",
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 30,
      loop: false,
      imageSrc: "./img/king/enterDoor.png",
    },
  },
});
const doors = [
  new Sprite({
    position: {
      x: 767,
      y: 270,
    },
    imageSrc: "./img/doorOpen.png",
    frameRate: 5,
    frameBuffer: 26,
    loop: false,
    autoplay: false,
  }),
];

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  Space: {
    pressed: false,
  },
};
function animate() {
  window.requestAnimationFrame(animate);

  backgroundLevel1.draw();

  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw();
  });

  doors.forEach((door) => {
    door.draw();
  });

  player.velocity.x = 0;
  if (keys.d.pressed) {
    player.switchSprite("runRight");
    player.velocity.x = 1.3;
    player.lastDirection = "right";
  } else if (keys.a.pressed) {
    player.switchSprite("runLeft");
    player.velocity.x = -1.3;
    player.lastDirection = "left";
  } else if (keys.w.pressed) {
    player.switchSprite("enterDoor");
    if (player.currentFrame === 7) {
      return;
    }
  } else {
    if (player.lastDirection === "left") player.switchSprite("idleLeft");
    else player.switchSprite("idleRight");
  }

  player.draw();
  player.update();
}
animate();
