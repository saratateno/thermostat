describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts with a temperature of 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases the temperature with the up button", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases the temperature with the down button", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees", function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("can turn powerSaving off", function() {
    thermostat.switchPowerSaving();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it("can turn powerSaving on", function() {
    thermostat.switchPowerSaving();
    thermostat.switchPowerSaving();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it("resets the temperature to 20", function() {
    for(var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe("gives the level of energy usage according to temperature", function() {
    it("returns medium when the temperature is between 18 to 25", function() {
      expect(thermostat.energyUsage()).toEqual("medium");
    });

    it("returns low when the temperature is 18 or less", function() {
      for(var i = 0; i < 3; i--) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual("low");
    });

    it("returns high when the temperature is 25 or more", function() {
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high");
    });
  });

  describe("powerSaving off", function() {
    beforeEach(function() {
      thermostat.switchPowerSaving();
    });

    it("has a maximum temperature of 32 degrees", function() {
      for(var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe("powerSaving mode", function() {
    it("has a power saving mode on by default", function() {
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

    it("has a maximum temperature of 25 degrees", function() {
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });
});
