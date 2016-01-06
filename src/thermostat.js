function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MEDIUM_ENERGY_USE_LIMIT = 18;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSaving = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.powerSaving) {
      this._setMaxTemp(this.MAX_LIMIT_PSM_ON);
  } else {
      this._setMaxTemp(this.MAX_LIMIT_PSM_OFF);
  }
  this._checkColour();
};

Thermostat.prototype.down = function() {
  if(this._isMinTemp()){
    return;
  }
  this.temperature -= 1;
  this._checkColour();
};

Thermostat.prototype.switchPowerSaving = function() {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.isPowerSavingOn = function() {
  return this.powerSaving === true;
};

Thermostat.prototype._isMinTemp = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype._setMaxTemp = function(maximum) {
  return this.temperature >= maximum ? this.temperature = maximum : this.temperature += 1;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature <= this.MEDIUM_ENERGY_USE_LIMIT) {
     this.energyUsage = "low";
  } else if(this.temperature >= this.MAX_LIMIT_PSM_ON) {
    this.energyUsage = "high";
  } else {
     this.energyUsage = "medium";
  }
};
