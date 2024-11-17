let sphereColor;
let dragging = false;
let offsetX, offsetY;
let sphereX = 0, sphereY = 0;

function setup() {
    createCanvas(250, 250, WEBGL);
    sphereColor = color(255); // Default color white
}

function draw() {
    clear(); // Clear the background to make it transparent
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;

    ambientLight(50);
    directionalLight(255, 255, 255, locX, locY, 100);

    noStroke();
    fill(sphereColor);
    push();
    translate(sphereX, sphereY);
    sphere(100);
    pop();
}

function mousePressed() {
    let d = dist(mouseX - width / 2, mouseY - height / 2, sphereX, sphereY);
    if (d < 100) {
        dragging = true;
        offsetX = sphereX - (mouseX - width / 2);
        offsetY = sphereY - (mouseY - height / 2);
    }
}

function mouseReleased() {
    dragging = false;
}

function mouseDragged() {
    if (dragging) {
        sphereX = mouseX - width / 2 + offsetX;
        sphereY = mouseY - height / 2 + offsetY;
    }
}

document.getElementById('sphereColor').addEventListener('input', function(event) {
    sphereColor = color(event.target.value);
});

document.getElementById('submitButton').addEventListener('click', function() {
    let waterValue = parseInt(document.getElementById('waterRange').value);
    let oxygenValue = parseInt(document.getElementById('oxygenRange').value);
    let foodValue = parseInt(document.getElementById('foodRange').value);
    let total = waterValue + oxygenValue + foodValue;
    document.getElementById('totalDisplay').innerText = 'Total: ' + total;


    if (waterValue >= 70 && oxygenValue >= 21 && foodValue >= 99) {
        document.getElementById("totalDisplay").innerHTML = "The Flarken thanks you for your service. The planet is ready!";
    } else if (waterValue < 70 && oxygenValue >= 21 && foodValue >= 99 ) {
        document.getElementById("totalDisplay").innerHTML = "Lowballing me on the milk supply? The Flarken are not pleased. Up the milk supply!";
    } else if (waterValue >= 70 && oxygenValue < 21 && foodValue >= 99 ) {
        document.getElementById("totalDisplay").innerHTML = "The Flarken are suffocating! Increase the oxygen supply!";
    } else if (waterValue >= 70 && oxygenValue >= 21 && foodValue < 99 ) {
        document.getElementById("totalDisplay").innerHTML = "The Flarken are hungry! Increase the Fancy Feast supply!";
    } else if (waterValue < 70 && oxygenValue < 21 && foodValue >= 99 ) {
        document.getElementById("totalDisplay").innerHTML = "The Flarken are suffocating and thirsty! Increase the oxygen and milk supply!";
    } else if (waterValue < 70 && oxygenValue >= 21 && foodValue < 99 ) {
        document.getElementById("totalDisplay").innerHTML = "The Flarken are hungry and thirsty! Increase the Fancy Feast and milk supply!";
    } else if (waterValue >= 70 && oxygenValue < 21 && foodValue < 99 ) {
        document.getElementById("totalDisplay").innerHTML = "The Flarken are suffocating and hungry! Increase the oxygen and Fancy Feast supply!";
    } else {
        document.getElementById("totalDisplay").innerHTML = "The Flarken need a place to live. Not a death bed. Fix all supplies.";
    }
    
});


