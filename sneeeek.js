const mrender = require('./modules/mrender.js')
const indexChart = {
    0: "☐",
    1: "▣",
}
const table = new mrender (10, 10, 0, indexChart)



let xPos = 0
let yPos = 0

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (key) {
  // exit when ctrl+c
  if (key === '\u0003') {
    process.exit();
  }

  switch (key) {
    case 'w':
    case '\u001B[A':
        moveY(-1)
        break
    case 's':
    case '\u001B[B':
        moveY(1)
        break
    case 'a':
    case '\u001B[D':
        moveX(-1)
        break
    case 'd':
    case '\u001B[C':
        moveX(1)
        break
  }
  console.log('Key pressed:', key);
});

function moveX(xInc) {
    let xShifted = xPos + xInc;
    if (xShifted < 0) {
      xPos = table.rows + xShifted;
    } else if (xShifted >= table.rows) {
      xPos = xShifted - table.rows;
    } else {
      xPos = xShifted;
    }

    console.log(table.render(1, [`${xPos}/${yPos}/1`]))
    console.log(xPos)
}

function moveY(yInc) {
    let yShifted = yPos + yInc;
    if (yShifted < 0) {
      yPos = table.cols + yShifted;
    } else if (yShifted >= table.cols) {
      yPos = yShifted - table.cols;
    } else {
      yPos = yShifted;
    }

    console.log(table.render(1, [`${xPos}/${yPos}/1`]))
    console.log(yPos)
}