class Ranking{
    constructor(firstPlace, secondPlace, thirdPlace) {
      this.firstPlace = firstPlace;
      this.secondPlace = secondPlace;
      this.thirdPlace = thirdPlace;
    }
    setFirstPlace(firstPlace) {
        this.firstPlace = firstPlace;
    }
    setSecondPlace(secondPlace) {
        this.secondPlace = secondPlace;
    }
    setThirdPlace(thirdPlace) {
        this.thirdPlace = thirdPlace;
    }
    getFirstPlace() {
        return this.firstPlace;
    }
    getSecondPlace() {
        return this.secondPlace;
    }
    getThirdPlace() {
        return this.thirdPlace;
    }
}

var easyRanking = new Ranking("","","");
var normalRanking = new Ranking("","","");
var hardRanking = new Ranking("","","");