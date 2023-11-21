var difficulty = "normal";
//global variables being declared

function puzzlePress() {
    menuPress("pB","sB","lB","puzzlePage","settingsPage","leaderPage");
} function settingsPress() {
    menuPress("sB","pB","lB","settingsPage","leaderPage","puzzlePage");
} function boardPress() {
    menuPress("lB","pB","sB","leaderPage","puzzlePage","settingsPage");
} 
//these three functions all call menuPress() with different parameters, depending on which page needs to be changed to

function menuPress(b1, n1, n2, o1, on1, on2) {
     document.getElementById(b1).disabled = true;
     document.getElementById(b1).style.backgroundColor="white";
     document.getElementById(n1).disabled = false;
     document.getElementById(n1).style.backgroundColor="silver";
     document.getElementById(n2).disabled = false;
     document.getElementById(n2).style.backgroundColor="silver";

     document.getElementById(o1).style.display="block";
     document.getElementById(on1).style.display="none";
     document.getElementById(on2).style.display="none";
} 
//this function lets the user change between the puzzle, setting and leaderboard page, depending on its parameters.

function changeDifficulty(newDifficulty) {
    difficulty = newDifficulty;
    //document.getElementById("testText").innerHTML=difficulty; //this line was used to test that the value was changing
} 
//function changeDifficulty changes value of variable 'difficulty' when a new difficulty is clicked in settings