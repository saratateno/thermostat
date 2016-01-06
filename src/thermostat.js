var Thermostat = (function() {
  function Thermostat() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  Thermostat.prototype.up = function() {
    if (this.powerSaving) {
      return this.temperature >= 25 ? this.temperature = 25 : ++this.temperature;
    } else {
      return this.temperature >= 32 ? this.temperature = 32 : ++this.temperature;
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

  return Thermostat;

}());
