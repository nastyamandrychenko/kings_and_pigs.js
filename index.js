const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;


const backgroundLevel1 = new Sprite({
position:{
    x:0,
    y:0,
},
imageSrc: './img/backgroundLevel1.png'
})

const parsedCollisions = collisionsLevel1.parse2d();
const collisionBlocks = parsedCollisions.createObjectsFrom2D()



const player = new Player();

const keys = {
    w:{
        pressed: false,
    
    },
    a:{
        pressed: false,
    
    },
    d:{
        pressed: false,
    
    },
}

function animate() {
  window.requestAnimationFrame(animate);

  backgroundLevel1.draw()
  collisionBlocks.forEach((collisionBlock) =>{
    collisionBlock.draw()
  })
  player.velocity.x = 0;
  if (keys.d.pressed){
    player.velocity.x = 5
  } else if (keys.a.pressed){
    player.velocity.x = -5
  }

  player.draw();
  player.update();
}
animate();

function handleKeyDown(event) {
    console.log(event.key, "keydown")
  switch (event.keyCode) {
    case 87:
      if (player.velocity.y === 0) {
        player.velocity.y = -20;
      }
      break;
    case 65:
        keys.a.pressed = true;
      break;
    case 68:
        keys.d.pressed = true;
      break;
  }
}

function handleKeyUp(event) {
    console.log(event.key, "keyup")
    switch (event.keyCode) {
      case 65:
        keys.a.pressed = false;
        break;
      case 68:
        keys.d.pressed = false;
        break;
    }
  }


window.addEventListener('keydown', handleKeyDown);

window.addEventListener('keyup', handleKeyUp);
