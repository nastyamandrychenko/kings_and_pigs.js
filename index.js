const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

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
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  window.requestAnimationFrame(animate);
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

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      if (player.velocity.y === 0) {
        player.velocity.y = -20;
      }
      break;

    case 'a':
        keys.a.pressed = true;
      break;
    case 'd':
        keys.d.pressed = true;
      break;
  }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {

      case 'a':
        keys.a.pressed = false;
        break;
      case 'd':
        keys.d.pressed = false;
        break;
    }
  });