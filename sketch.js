let circleDiameter = 20;
let positionX = 330;
let positionY = 220;
let activado = false;
let t = 1; // variable de tiempo

/* Controles:
   ENTER: cambiar colores,
   
   MOUSE LEFT Y MOUSE RIGHT: disminuir/aumentar diametro */

function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (activado) {
    background(74, 45, 115, 10);
  } else {
    background(179, 155, 120, 10);
  }

  if (activado) {
    fill(147, 165, 55, 100);
  } else {
    fill(200, 185, 165, 100);
  }

  //---CIRCULO FONDO

  noStroke();
  ellipse(300, 300, 560, 560);

  //---QUAD CHICO

  push();

  if (activado) {
    translate(200, -150);
  }

  if (activado) {
    fill(217, 240, 160);
  } else {
    fill(0);
  }

  quad(150, 300, 182, 274, 136, 350, 102, 375);

  //---QUAD GRANDE

  push();

  let valor1 = map(sin(t * 0.03), -1, 1, 1, 50);
  translate(-valor1, -valor1);
  quad(240, 332, 300, 283, 212, 426, 153, 473);

  //---LINEA SOMBRA QUAD GRANDE
  stroke(120);
  strokeCap(SQUARE);
  strokeWeight(8);
  line(304, 285, 217, 426);

  pop();

  //---LINEA SOMBRA QUAD CHICO
  stroke(120);
  strokeCap(SQUARE);
  strokeWeight(8);
  line(186, 275, 140, 352);

  //---LINEA ROJA
  if (activado) {
    stroke(109, 37, 111);
  } else {
    stroke(170, 108, 57);
  }

  strokeCap(SQUARE);
  strokeWeight(7);
  line(281, 270, 113, 419);
  line(113, 415, 162, 475);

  //---LINEA AZUL

  if (activado) {
    stroke(255, 247, 170);
  } else {
    stroke(31, 25, 89);
  }
  push();

  line(262, 251, 146, 355);
  line(150, 354, 216, 430);
  line(215, 427, 157, 474);
  pop();

  pop();

  //-- Cambiar posicion circulos

  if (activado) {
    translate(-180, 200);
  }

  //-- Aumentar/Disminuir diametros

  if (mouseIsPressed) {
    if (mouseButton == LEFT && circleDiameter > -800) {
      circleDiameter -= 5;
    } else if (mouseButton == RIGHT && circleDiameter < 50) {
      circleDiameter += 5;
    }
  }

  //--Dibujar circulos

  stroke(31, 25, 89);
  strokeWeight(1);

  let x = positionX;
  let y = positionY;
  let d = circleDiameter;
  noFill();

  for (let z = 0; z < 12; z++) {
    // t ajusta la velocidad, cuanto mayor sea el valor de t mas rapido se desplaza la onda horizontalmente
    // z modifica la frecuencia, a mayor z mayhor frecuencia
    x += sin(t * 0.1 + z * 0.5) * 4;
    d += sin(t * 0.1 + z * 0.5) * 3;

    circle(x, y, d);

    x += 4.5;
    y -= 4.5;
    d += 20;
  }
  t -= 1; // actualiza la variable de tiempo
}

function keyPressed() {
  if (activado == false) {
    activado = true;
  } else {
    activado = false;
  }
}

document.oncontextmenu = function () {
  return false;
};
