function Thermostat() {
  this.temp = 20;
  this.powerSave = true;
  this.colorOption = ['blue', 'green', 'red'];
  this.currentColor = this.colorOption[1];
}

Thermostat.prototype.increase = function () {
  if (!this.powerSave && this.temp >= 32) throw new Error("Cannot exceed 32 degrees");
  if (this.powerSave && this.temp >= 25 ) throw new Error("Can't go higher: 25 degrees is the maximum temperature on power save!");
  this.temp += 1;
  this.changeColor();
  return this.temp;
};

Thermostat.prototype.decrease = function () {
  var MIN_TEMP = 10;
  if (this.temp <= MIN_TEMP ) throw new Error("Can't go below: 10 degrees is the minimum temperature!");
  this.temp -= 1;
  this.changeColor();
  return this.temp;
};

Thermostat.prototype.switchMode = function() {
  if(this.powerSave) {
    this.powerSave = false;
  } else {
    this.powerSave = true;
  }
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.changeColor = function() {
  if (this.temp <= 18) {
    this.currentColor = this.colorOption[0];
  } else if (this.temp > 25) {
    this.currentColor = this.colorOption[2];
  } else {
    this.currentColor = this.colorOption[1];
  }
};