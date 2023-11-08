function puzzlePress() {
    menuPress("pB","sB","lB");
}
function settingsPress() {
    menuPress("sB","pB","lB");
}
function boardPress() {
    menuPress("lB","pB","sB");
}

function menuPress(b1, n1, n2) {
     document.getElementById(b1).disabled = true;
     document.getElementById(b1).style.backgroundColor="white";
     document.getElementById(n1).disabled = false;
     document.getElementById(n1).style.backgroundColor="silver";
     document.getElementById(n2).disabled = false;
     document.getElementById(n2).style.backgroundColor="silver";
}