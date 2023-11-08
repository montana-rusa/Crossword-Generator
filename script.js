function puzzlePress() {
    menuPress("pB","sB","lB","puzzlePage","settingsPage","leaderPage");
}
function settingsPress() {
    menuPress("sB","pB","lB","settingsPage","leaderPage","puzzlePage");
}
function boardPress() {
    menuPress("lB","pB","sB","leaderPage","puzzlePage","settingsPage");
}

function menuPress(b1, n1, n2, o1, on1, on2) {
     document.getElementById(b1).disabled = true;
     document.getElementById(b1).style.backgroundColor="white";
     document.getElementById(n1).disabled = false;
     document.getElementById(n1).style.backgroundColor="silver";
     document.getElementById(n2).disabled = false;
     document.getElementById(n2).style.backgroundColor="silver";

     document.getElementById(o1).style.opacity="1";
     document.getElementById(on1).style.opacity="0";
     document.getElementById(on2).style.opacity="0";
}

