var difficulty = "normal";
var wordList = ['audience', 'amateur', 'accused', 'anomaly', 'absent', 'asylum', 'apathy', 'adept', 'anthem', 'beverage', 'blanket', 'behalf', 'blaze', 'coronary', 'candid', 'conduct', 'consent', 'census', 'drone', 'distress', 'dignity', 'dessert', 'elevator', 'eruption', 'epilogue', 'erosion', 'eclipse', 'eminent', 'erotic', 'equine', 'fugitive', 'fantasy', 'festive', 'fiber', 'genocide', 'glory', 'gallows', 'grudge', 'hysteria', 'hologram', 'hormone', 'hostage', 'inferior', 'indulge', 'incest', 'impair', 'idiom', 'jugular', 'justice', 'jungle', 'kilobyte', 'kneecap', 'kidney', 'karma', 'leisure', 'lunatic', 'launch', 'lesion', 'montage', 'modest', 'manor', 'magma', 'negative', 'neglect', 'nebula', 'ninja', 'outcast', 'ornate', 'organ', 'optimum', 'pregnant', 'preacher', 'plasma', 'quartet', 'quirk', 'quaint', 'release', 'reunion', 'riddle', 'retail', 'scarce', 'surgery', 'secular', 'surplus', 'shallow', 'scrap', 'throttle', 'tragic', 'triumph', 'thermal', 'thunder', 'ultimate', 'umpire', 'union', 'venture', 'valiant', 'vocal', 'welfare', 'whisper', 'wretch', 'yarrow', 'yacht', 'yeast', 'zealous', 'zodiac'];
var startCoords = [];
var endCoords = [];
var selectedWords = [];
var crosswordGrid = [[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
var clues = [];
var enteredWords = [".",".",".",".",".",".","."];
var gridLocations = []
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
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
    let tempNumber = 0;
    //declare local variables

    crosswordGrid = [[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
    startCoords = [];
    endCoords = [];
    selectedWords = ["........"];
    // reset the global variables 

    for (let i=0; i < 7; i++) {
        document.getElementById("gapFill"+i).innerHTML="";
    } enteredWords = [".",".",".",".",".",".","."];
    //resets all of the gapFill elements

    document.getElementById("puzzleGenerateB").disabled = true;
    //disables the button
    
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
    } //generates first 4 words

    tempNumber = selectedWords[0].length-3;
    tempNumber = Math.floor(Math.random()*tempNumber)+1;
    word = wordList[Math.floor(Math.random()*wordList.length)];
    while ((!(word[0] == selectedWords[0][tempNumber])) || (selectedWords.includes(word))) {
        word = wordList[Math.floor(Math.random()*wordList.length)]; }
    startCoords[wordCount] = [tempNumber, 0]
    for (let i=0; i < word.length; i++) {crosswordGrid[i][tempNumber]= word[i];}
    selectedWords[wordCount] = word;
    endCoords[wordCount] = [tempNumber,word.length-1];
    wordCount=wordCount+1;
    //generates 5th word

    tempNumber = selectedWords[2].length-3;
    tempNumber = Math.floor(Math.random()*tempNumber)+1;
    word = wordList[Math.floor(Math.random()*wordList.length)];
    while ((!(word[0] == selectedWords[2][tempNumber])) || (selectedWords.includes(word))) {
        word = wordList[Math.floor(Math.random()*wordList.length)]; }
    startCoords[wordCount] = [startCoords[2][0]+tempNumber,startCoords[2][1]];
    for (let i=0; i < word.length; i++) {crosswordGrid[startCoords[2][1]+i][startCoords[wordCount][0]]= word[i];}
    selectedWords[wordCount] = word;
    endCoords[wordCount] = [startCoords[wordCount][0],startCoords[wordCount][1]+word.length-1];
    wordCount=wordCount+1;
    //generates 6th word

    tempNumber = selectedWords[1].length-3;
    tempNumber = Math.floor(Math.random()*tempNumber)+1;
    word = wordList[Math.floor(Math.random()*wordList.length)];
    while ((!(word[0] == selectedWords[1][tempNumber])) || (selectedWords.includes(word))) {
        word = wordList[Math.floor(Math.random()*wordList.length)]; }
    startCoords[wordCount] = [endCoords[0][0],tempNumber];
    for (let i=0; i < word.length; i++) {crosswordGrid[tempNumber][startCoords[wordCount][0]+i]= word[i];}
    endCoords[wordCount] = [startCoords[wordCount][0]+word.length-1,tempNumber];
    selectedWords[wordCount] = word;
     //generates 7th word

    generateClues();
}

function generateClues() {
    let word = "";
    let tempNumber = 0;
    let wordClue = "";
    //declare local variables

    clues = [];
    //resets global variables

    for (let i=0; i < 7; i++) {
        word = selectedWords[i];
        fetch(url+word)
        .then (res => res.json())
        .then (result => data(result, i));
        //iteratively runs function which generates the clues
    }

    document.getElementById("puzzleGenerateB").disabled = false;
    generateVisuals();
}

function data(result, i) {
    let randomMeaning = 0;
    let randomDef = 0;
    let tempNumber = i + 1; tempNumber = tempNumber+". ";
    let meaning = "To let go, as a legal claim; to discharge or relinquish a right to, as lands or tenements, by conveying to another who has some right or estate in possession, as when the person in remainder releases his right to the tenant in possession; to quit.";
    //declares global variables

    while (meaning.length > 195) {
    //imposes a character limit on the clue
     randomMeaning = result[0].meanings;
     randomMeaning = Math.floor(Math.random()*randomMeaning.length);

     randomDef = result[0].meanings[randomMeaning].definitions;
     randomDef = Math.floor(Math.random()*randomDef.length);
     //randomizes the process

     meaning = result[0].meanings[randomMeaning].definitions[randomDef].definition;
    }
    
    clues[i] = meaning;
    if (i < 7) {document.getElementById("clue"+i).innerHTML=tempNumber+meaning;}
    //writes the clue to clues and displays it
}

function generateVisuals() {
    let directionHolder = "hvhvvvh";
    let xValue = "";
    let xValueText = "";
    let yValue = "";
    let imageName = "";
    let gridLocation = ["0px","0px"];
    //declare local variables

    for (let i=0; i < 7; i++) {
        xValue = startCoords[i][0]*35;
        xValue = 145 + xValue;
        xValueText = xValue + 5;
        xValueText = xValueText + "px";
        xValue = xValue + "px";
        yValue = startCoords[i][1]*35;
        yValue = 145 + yValue;
        yValue = yValue + "px";
        gridLocation = [xValue, yValue];
        gridLocations[i] = gridLocation;
        //translates the startCoords to the in-ratio gridLocation

        imageName = selectedWords[i];
        imageName = imageName.length;
        if (directionHolder[i] == "h") {
            document.getElementById("gap"+i).style.height="35px";
            xValue = 35*imageName;
            xValue = xValue + "px";
            document.getElementById("gap"+i).style.width=xValue;
        } else {
            document.getElementById("gap"+i).style.width="35px";
            yValue = 35*imageName;
            yValue = yValue + "px";
            document.getElementById("gap"+i).style.height=yValue;
        } // sets height and width of gap element to length-corresponding values

        imageName = directionHolder[i] + imageName;
        imageName = "images/" + imageName + ".png";
        document.getElementById("gap"+i).src=imageName;
        //changes the gap element to the right image

        document.getElementById("gap"+i).style.top=gridLocation[1];
        document.getElementById("gap"+i).style.left=gridLocation[0];
        //moves the gap element to the right place
        
        document.getElementById("gap"+i).style.display="block";
        //document.getElementById("testText15").innerHTML=imageName;

        document.getElementById("gapText"+i).style.top=gridLocation[1];
        document.getElementById("gapText"+i).style.left=xValueText;
        document.getElementById("gapText"+i).style.display="block";
        //visually numbers each gap
    }
}

function fillGap() {
    let nList = [1, 2, 3, 4, 5, 6, 7, 8]
    let wordValue = document.getElementById("wordEnter").value;
    let gapValue = document.getElementById("gapEnter").value;
    let gridLocation = "";
    let xValue = "";
    let yValue = "";
    //declare local variables

    if (gapValue == "") {
        alert("You must enter a gap value(1-7)")
     } else if (gapValue in nList == false) {
        alert("Gap input must be between 1 and 7");
     } else if (((/^[a-zA-Z]+$/.test(wordValue) == false) && (wordValue != "")) || (wordValue.length > selectedWords[gapValue-1].length)){
        alert("word must contain only letters, and not exceed the length of the gap")
     }
     //input validation

     else {
        gapValue = gapValue - 1;
        wordValue = wordValue.toLowerCase();
        enteredWords[gapValue] = wordValue;
        // records the entered word to a global list 'enteredWords'

        if ((gapValue==0) || (gapValue==2) || (gapValue==6)) {
            document.getElementById("gapFill"+gapValue).style.letterSpacing="17px";
            xValue = startCoords[gapValue][0]*35;
            xValue = 157 + xValue;
            xValue = xValue + "px";
            yValue = startCoords[gapValue][1]*35;
            yValue = 115 + yValue;
            yValue = yValue + "px";
            //sets the x and y value if the word needs to generate horizonally
        }
        else {
            document.getElementById("gapFill"+gapValue).style.letterSpacing="1.5px";
            xValue = startCoords[gapValue][0]*35;
            xValue = 118 + xValue;
            xValue = xValue + "px";
            gridLocation = gridLocations[gapValue];
            yValue = gridLocation[1];
            //sets the x and y value if the word needs to generate vertically
        }

        document.getElementById("gapFill"+gapValue).style.left=xValue;
        document.getElementById("gapFill"+gapValue).style.top=yValue;
        document.getElementById("gapFill"+gapValue).innerHTML=wordValue;
        //moves the word to the right place
        }
    }









generateCrossword()
alert(selectedWords)
