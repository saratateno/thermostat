function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.displayColour = "yellow";
}

Thermostat.prototype.up = function() {
  if (this.powerSaving) {
      this._setMaxTemp(25);
  } else {
      this._setMaxTemp(32);
  }
  this._checkColour();
};

Thermostat.prototype.down = function() {
  if(this.temperature > 10){
    --this.temperature;
  }
  this._checkColour();
};

Thermostat.prototype.switchPowerSaving = function() {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype._setMaxTemp = function(maximum) {
  return this.temperature >= maximum ? this.temperature = maximum : ++this.temperature;
};

Thermostat.prototype._checkColour = function() {
  if (this.temperature <= 18) {
     this.displayColour = "green";
  } else {
     this.displayColour = "yellow";
  }
};
