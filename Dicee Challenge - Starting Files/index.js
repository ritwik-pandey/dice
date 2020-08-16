var random = Math.random() * 6;
random = (Math.floor(random) + 1);

var random1 = Math.random() * 6;
random1 = (Math.floor(random1) + 1);

document.querySelector(".img1").setAttribute("src" , "images/dice" + random + ".png");
document.querySelector(".img2").setAttribute("src" , "images/dice" + random1 + ".png");

if(random < random1){
  document.querySelector("h1").innerHTML = "Player 2 won";
}else if(random1 < random){
    document.querySelector("h1").innerHTML = "Player 1 won";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}
