function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/h2GiaNlwx/model.json',ModelLoaded)
}

function ModelLoaded(){
    classifier.classify(gotResults)
}

function gotResults(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        random_red= Math.floor(Math.random()*255)+1;
        random_green= Math.floor(Math.random()*255)+1;
        random_blue= Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear-"+result[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy-"+(result[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color="rgb("+random_red+","+random_green+","+random_blue+")";
        document.getElementById("result_confidence").style.color="rgb("+random_red+","+random_green+","+random_blue+")";
        
        img1=document.getElementById("alien_1");
        img2=document.getElementById("alien_2");
        img3=document.getElementById("alien_3");
        img4=document.getElementById("alien_4");

        if(result[0].label=="clap") {
            img1.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if(result[0].label=="bell") {
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if(result[0].label=="snap") {
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }
        else {
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif';
        }
    }
}