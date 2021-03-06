//constructor 
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

 //Callback function, will be called every 1000 millisec until call the StopClick
 Chronometer.prototype.timerHandler = function () {
     this.currentTime += 1; //seconds
     console.log("Incrementing currentTime... new val: " + this.currentTime);
     printTime();
 };

 Chronometer.prototype.startClick = function () {
     this.intervalId = setInterval(this.timerHandler.bind(this),1000); 
 };

 Chronometer.prototype.setMinutes = function () {
     //this.min = ...
     return Math.floor(this.currentTime / 60);     
};

Chronometer.prototype.setSeconds = function () {
    //this.sec = ... = 
     return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if (number < 10) {
        return "0" + number;
      } else return "" + number;
};

Chronometer.prototype.setTime = function () {

    var rawMinutes = this.setMinutes(this.currentTime);
    var rawSeconds = this.setSeconds(this.currentTime);

    var digitMin = this.twoDigitsNumber(rawMinutes);
    var digitSec = this.twoDigitsNumber(rawSeconds);
    return digitMin + digitSec;
};

Chronometer.prototype.setMilliseconds = function () {
 };

//this function stops the timerHandler
 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
     this.currentTime = 0;
     printTime();
 };

 Chronometer.prototype.splitClick = function () {
 };
