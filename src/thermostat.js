function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.up = function() {
  return (this.powerSaving && (this.temperature >= 25)) ? this.temperature : this.temperature++;

};

Thermostat.prototype.down = function() {
  if(this.temperature > 10){
    this.temperature--;
  }
};
