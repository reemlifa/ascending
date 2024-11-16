let sphereColor;
let dragging = false;
let offsetX, offsetY;
let sphereX = 0, sphereY = 0;


function setup() {
    let canvas = createCanvas(windowWidth * 0.4, windowHeight * 0.4, WEBGL);
    sphereColor = color(255); 
}

function draw() {
    clear(); 
    let locX = mouseX - 100;
    let locY = mouseY - 100;
    ambientLight(75);
    directionalLight(255, 255, 255, locX, locY, 100);
    noStroke();
    fill(sphereColor);
    sphere(100);
}


document.getElementById('sphereColor').addEventListener('input', function(event) {
    sphereColor = color(event.target.value);
});
