/* Declaring variables. */
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homePoints = 0;
let guestPoints = 0;


/**
When the user clicks on the button, add 1, 2 or 3 to the homePoints variable and update the homeScore text to reflect the new value.
 */
function home1() {
  homePoints += 1;
  homeScore.textContent = homePoints;
}
function home2() {
  homePoints += 2;
  homeScore.textContent = homePoints;
}
function home3() {
  homePoints += 3;
  homeScore.textContent = homePoints;
}


/**
When the user clicks on the button, add 1, 2 or 3 to the guestPoints variable and update the guestScore text to reflect the new value.
 */
function guest1(){
  guestPoints += 1;
  guestScore.textContent = guestPoints;
}
function guest2(){
  guestPoints += 2;
  guestScore.textContent = guestPoints;
}
function guest3(){
  guestPoints += 3;
  guestScore.textContent = guestPoints;
}