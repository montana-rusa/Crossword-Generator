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
    let tempNumber = 0;
    let tempNumber2 = 0;
    //declare local variables

    crosswordGrid = [[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
    startCoords = [];
    endCoords = [];
    selectedWords = [];
    // reset the global variables 

    word = wordList[Math.floor(Math.random()*wordList.length)];
    startCoords[0] = [0,0];
    endCoords[0] = [word.length-1,0];
    for (let i=0; i < word.length; i++) {
        crosswordGrid[0][i] = word[i];
    } selectedWords[0] = word;
    // generates first word

    tempNumber = Math.floor(Math.random()*3);
    tempNumber = endCoords[0][0] - tempNumber;
    word = wordList[Math.floor(Math.random()*wordList.length)];
    while ((!(word[0] == selectedWords[0][tempNumber])) || (selectedWords.includes(word))) {
        word = wordList[Math.floor(Math.random()*wordList.length)];
    } startCoords[1] = [tempNumber,0];
    endCoords[0] = [tempNumber, 0+word.length];
    for (let i=0; i < word.length; i++) {
        crosswordGrid[i][tempNumber] = word[i];
    } selectedWords[1] = word;
    //generates second word

    document.getElementById("testText1").innerHTML=crosswordGrid[0];
    document.getElementById("testText2").innerHTML=crosswordGrid[1];
    document.getElementById("testText3").innerHTML=crosswordGrid[2];
    document.getElementById("testText4").innerHTML=crosswordGrid[3];
    document.getElementById("testText5").innerHTML=crosswordGrid[4];
    document.getElementById("testText6").innerHTML=crosswordGrid[5];
    document.getElementById("testText7").innerHTML=crosswordGrid[6];
    document.getElementById("testText8").innerHTML=crosswordGrid[7];
}
