function preload() {

}

function setup() {
    canvas = createCanvas(650, 500);
    canvas.position(0, 200);
    video = createCapture(VIDEO);
    video.hide();
    tintcolor = "";
}

function draw() {
    image(video, 0, 0, 650, 500);
    tint(tintcolor);
}

function take_snapshot() {
    save('Image.jpg');
}

function filtering() {
    tintcolor = document.getElementById("input").value;
}