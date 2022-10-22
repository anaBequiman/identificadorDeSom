//link: https://teachablemachine.withgoogle.com/models/y_keJM_mA/
function ouvir(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classificador = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/y_keJM_mA/model.json', carregarFuncao);
}
function carregarFuncao(){
    console.log("Modelo carregado :)")
    classificador.classify(classificar);
}
function classificar(erro, resultado){
    if(erro == true){
        console.log("erro");
    }
    else{
        randon_number_r = Math.floor(Math.random()*255);
        randon_number_g = Math.floor(Math.random()*255);
        randon_number_b = Math.floor(Math.random()*255);
        document.getElementById("barulho").style.color="rgb("+randon_number_r+","+randon_number_g+","+randon_number_b+")"
        document.getElementById("pct").style.color="rgb("+randon_number_r+","+randon_number_g+","+randon_number_b+")"
        console.log(resultado);
        porcentagem = resultado[0].confidence*100;
        document.getElementById("barulho").innerHTML = resultado[0].label;
        document.getElementById("pct").innerHTML = porcentagem.toFixed(0)+"%";
        img1 = document.getElementById("alienUm");
        img2 = document.getElementById("alienDois");
        img3 = document.getElementById("alienTres");
        img4 = document.getElementById("alienQuatro");
        if(resultado[0].label == "Ruído de fundo"){
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }  
        else if(resultado[0].label == "Palmas"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }        
        else if(resultado[0].label == "Estralo de dedo"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }   
        else{
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }     
    }
}