var difficulty = "normal";
var wordList = ['audience', 'amateur', 'accused', 'anomaly', 'absent', 'asylum', 'apathy', 'adept', 'anthem', 'beverage', 'blanket', 'behalf', 'blaze', 'coronary', 'candid', 'conduct', 'consent', 'census', 'drone', 'distress', 'dignity', 'dessert', 'elevator', 'eruption', 'epilogue', 'erosion', 'eclipse', 'eminent', 'erotic', 'equine', 'fugitive', 'fantasy', 'festive', 'fiber', 'genocide', 'glory', 'gallows', 'grudge', 'hysteria', 'hologram', 'hormone', 'hostage', 'inferior', 'indulge', 'incest', 'impair', 'idiom', 'jugular', 'justice', 'jungle', 'kilobyte', 'kneecap', 'kidney', 'karma', 'leisure', 'lunatic', 'launch', 'lesion', 'montage', 'modest', 'manor', 'magma', 'negative', 'neglect', 'nebula', 'ninja', 'outcast', 'ornate', 'organ', 'optimum', 'pregnant', 'preacher', 'plasma', 'quartet', 'quirk', 'quaint', 'release', 'reunion', 'riddle', 'retail', 'scarce', 'surgery', 'secular', 'surplus', 'shallow', 'scrap', 'throttle', 'tragic', 'triumph', 'thermal', 'thunder', 'ultimate', 'umpire', 'union', 'venture', 'valiant', 'vocal', 'welfare', 'whisper', 'wretch', 'yarrow', 'yacht', 'yeast', 'zealous', 'zodiac'];

var startCoords = [];
var endCoords = [];
var selectedWords = [];
var crosswordGrid = [[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
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
    if (difficulty == "hard") {
        wordList = ['auspice', 'aromatic', 'alleged', 'austere', 'ambient', 'apache', 'acumen', 'alias', 'brethren', 'behemoth', 'brink', 'berth', 'contempt', 'cervical', 'canopy', 'corpus', 'crust', 'defer', 'deacon', 'delusion', 'doctrine', 'ethereal', 'endemic', 'elitism', 'elope', 'ensue', 'effigy', 'eureka', 'enigma', 'foregone', 'ferment', 'fresco', 'grievous', 'galleon', 'gurney', 'gaunt', 'hooligan', 'holster', 'heretic', 'henna', 'impetus', 'incisor', 'ictus', 'irate', 'jetty', 'junkie', 'javelin', 'kamikaze', 'karate', 'kanji', 'kobold', 'lukewarm', 'lampoon', 'locale', 'lustre', 'macabre', 'matinee', 'mingle', 'macho', 'nutcase', 'neuroma', 'nubile', 'nacho', 'orifice', 'oration', 'oasis', 'opine', 'prophet', 'pastor', 'ponder', 'peril', 'quagmire', 'quiche', 'quark', 'reticent', 'relapse', 'roster', 'rabid', 'rapport', 'solitary', 'suppress', 'sierra', 'seismic', 'savory', 'trespass', 'turnout', 'thwart', 'trance', 'taboo', 'ukelele', 'unitard', 'umbra', 'usury', 'updraft', 'vampire', 'vermin', 'venial', 'wannabe', 'wanton', 'wallow', 'yakuza', 'yonder', 'yahoo', 'zonal', 'zephyr'];
    } if (difficulty == "normal") {
        wordList = ['audience', 'amateur', 'accused', 'anomaly', 'absent', 'asylum', 'apathy', 'adept', 'anthem', 'beverage', 'blanket', 'behalf', 'blaze', 'coronary', 'candid', 'conduct', 'consent', 'census', 'drone', 'distress', 'dignity', 'dessert', 'elevator', 'eruption', 'epilogue', 'erosion', 'eclipse', 'eminent', 'erotic', 'equine', 'fugitive', 'fantasy', 'festive', 'fiber', 'genocide', 'glory', 'gallows', 'grudge', 'hysteria', 'hologram', 'hormone', 'hostage', 'inferior', 'indulge', 'incest', 'impair', 'idiom', 'jugular', 'justice', 'jungle', 'kilobyte', 'kneecap', 'kidney', 'karma', 'leisure', 'lunatic', 'launch', 'lesion', 'montage', 'modest', 'manor', 'magma', 'negative', 'neglect', 'nebula', 'ninja', 'outcast', 'ornate', 'organ', 'optimum', 'pregnant', 'preacher', 'plasma', 'quartet', 'quirk', 'quaint', 'release', 'reunion', 'riddle', 'retail', 'scarce', 'surgery', 'secular', 'surplus', 'shallow', 'scrap', 'throttle', 'tragic', 'triumph', 'thermal', 'thunder', 'ultimate', 'umpire', 'union', 'venture', 'valiant', 'vocal', 'welfare', 'whisper', 'wretch', 'yarrow', 'yacht', 'yeast', 'zealous', 'zodiac'];
    } if (difficulty == "easy") {
        wordList = ['annoying', 'ability', 'author', 'artist', 'airport', 'algebra', 'arcade', 'angel', 'bright', 'blizzard', 'biology', 'birth', 'control', 'castle', 'crack', 'common', 'death', 'defeat', 'daughter', 'drunk', 'equality', 'eternal', 'earth', 'empire', 'effect', 'emotion', 'eyeball', 'ending', 'faith', 'failure', 'factory', 'family', 'general', 'gentle', 'global', 'garden', 'husband', 'hidden', 'hunger', 'heart', 'interest', 'infinite', 'island', 'insult', 'jigsaw', 'jacket', 'judge', 'juice', 'kitchen', 'kingdom', 'knight', 'knife', 'library', 'local', 'lethal', 'lawyer', 'marriage', 'morning', 'mirror', 'money', 'nickname', 'natural', 'nearby', 'nurse', 'original', 'option', 'office', 'owner', 'practice', 'paint', 'pasta', 'plain', 'quality', 'quick', 'quiet', 'quest', 'research', 'recover', 'ready', 'rough', 'solution', 'success', 'speech', 'storm', 'together', 'teacher', 'travel', 'total', 'universe', 'unique', 'upset', 'uncle', 'violence', 'victory', 'victim', 'value', 'weakness', 'winner', 'winter', 'water', 'yogurt', 'youth', 'young', 'zigzag', 'zombie'];
    }
    
}
//function changeDifficulty changes value of variables 'difficulty' and 'wordList when a new difficulty is clicked in settings

function generateCrossword() {
    let word = "";
    let tempX = 0;
    let tempY = 0;
    let wordDirection = "a";
    let wordCount = 0;
    //declare local variables

    crosswordGrid = [[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
    startCoords = [];
    endCoords = [];
    selectedWords = ["........"];
    // reset the global variables 
    
    while (wordCount < 4) {
        word = wordList[Math.floor(Math.random()*wordList.length)];
        if (!(wordCount == 0)) {
            while ((!(word[0] == selectedWords[wordCount-1][selectedWords[wordCount-1].length-1])) || (selectedWords.includes(word))) {
                word = wordList[Math.floor(Math.random()*wordList.length)]; }}
        startCoords[wordCount] = [tempX, tempY];
        if (wordDirection == "a") {
            for (let i=0; i < word.length; i++) {crosswordGrid[tempY][tempX+i] = word[i];}
            tempX = tempX+word.length-1;
            wordDirection = "d";
        } else { 
            for (let i=0; i < word.length; i++) {crosswordGrid[tempY+i][tempX] = word[i];}
            tempY = tempY+word.length-1;
            wordDirection = "a"; }
        endCoords[wordCount] = [tempX,tempY];
        selectedWords[wordCount] = word;
        wordCount=wordCount+1;
    }
    //generates first 4 words

    document.getElementById("testText1").innerHTML=crosswordGrid[0];
    document.getElementById("testText2").innerHTML=crosswordGrid[1];
    document.getElementById("testText3").innerHTML=crosswordGrid[2];
    document.getElementById("testText4").innerHTML=crosswordGrid[3];
    document.getElementById("testText5").innerHTML=crosswordGrid[4];
    document.getElementById("testText6").innerHTML=crosswordGrid[5];
    document.getElementById("testText7").innerHTML=crosswordGrid[6];
    document.getElementById("testText8").innerHTML=crosswordGrid[7];
    document.getElementById("testText9").innerHTML=crosswordGrid[8];
    document.getElementById("testText10").innerHTML=crosswordGrid[9];
    document.getElementById("testText11").innerHTML=crosswordGrid[10];
    document.getElementById("testText12").innerHTML=crosswordGrid[11];
    document.getElementById("testText13").innerHTML=crosswordGrid[12];
    document.getElementById("testText14").innerHTML=crosswordGrid[13];
    document.getElementById("testText15").innerHTML=crosswordGrid[14];
    document.getElementById("testText16").innerHTML=crosswordGrid[15];
}
