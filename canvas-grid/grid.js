// Attention to css margin, border or paddin. It can 
// change the final result.

// JS CANVAS GRID - with live mouse coordinate
// call your html canvas element with the mouse
// onmousemove="mouseEvent(event)"

// Definition
let coordinate = {};

// Get the coordinate from onMouseMove - on canvas html element
function mouseEvent(event) {
    coordinate.x = event.clientX;
    coordinate.y = event.clientY;
}

// Draw the grid
let grid = (name, dim) => {
    for (let x = 0; x <= c.width; x+=10) {
        name.beginPath(); // This is important for lineWidth
        name.fillStyle = 'grey';
        name.strokeStyle = 'black';
        name.lineWidth = (x % 50 === 0) ? 0.5 : 0.25;
        name.moveTo(x,0);
        name.lineTo(x, c.height);
        name.moveTo(0,x);
        name.lineTo(c.width, x);
        name.stroke();
        if (x % dim === 0) {
            // write the values
            name.fillText(x,0,x);
            name.fillText(x,x,9);
        }
    }
    name.closePath();
}
