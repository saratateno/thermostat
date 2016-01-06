function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.up = function() {
  if (this.powerSaving) {
    return this._setMaxTemp(25);
  } else {
    return this._setMaxTemp(32);
  }
};

Thermostat.prototype.down = function() {
  if(this.temperature > 10){
    return --this.temperature;
  }
};

Thermostat.prototype.switchPowerSaving = function() {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype._setMaxTemp = function(maximum) {
  return this.temperature >= maximum ? this.temperature = maximum : ++this.temperature;
};
