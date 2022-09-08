status = "";
objects = [];
img = "";

function preload() {
   img = loadImage('quarto2.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "De 2 ojetos grandes o modelo CocoSSD detectou 1!";
}

function modelLoaded() {
    console.log("O modelo foi carregado UwU");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 640, 420);
    if(status != "")
    {
      for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "De 2 ojetos grandes o modelo CocoSSD detectou 1!";
  
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
}

function voltar() {
    window.location = "index.html";
}
