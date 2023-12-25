var hole = document.getElementById("hole");
hole.addEventListener("animationiteration", rand);
function rand() {
  let random = -(Math.random() * 350 + 150);
  hole.style.top = random + "px";
  console.log(random);
  score++;

}
var jumping = 0;
var score = 0;
var result = document.getElementById("result");
var text = document.getElementById("text");
var game = document.getElementById("game");
var fall = setInterval(function () {
  var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (jumping == 0) {
    bird.style.top = (birdtop +2)+ "px";
  }
  var blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  var htop = (500 + holetop);
  if ((birdtop > 450) ||((blockleft < 50) && (blockleft>-50) &&((birdtop < htop) ||
    (birdtop > htop + 100))
  )) {
    result.style.display = "block";
    text.innerText = `your final score is ${score}`;
    game.style.display = "none";
    score = 0;
  }
}, 10);
window.addEventListener('touchstart',hop)
function hop(){
  jumping=1;
  var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if(birdtop>6){
    bird.style.top=(birdtop-60)+"px";

  }
  setTimeout(function(){
    jumping=0;


  },100);
}
