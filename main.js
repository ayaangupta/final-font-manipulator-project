rightWristX = 0;
leftWristX = 0;
difference = 0;



function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intialized!');
}

function draw(){
    background('#969A97');
    document.getElementById("font_size").innerHTML = "font_size" + difference + "px";
    textSize(difference);
    fill("#FF0000");
    text('Ayaan', 50, 400)

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX" + leftWristX);
        console.log("rightWristX" + rightWristX);
    }
}