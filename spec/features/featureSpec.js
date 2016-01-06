describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts with a temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases the temperature with the up button", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("decreases the temperature with the down button", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees", function(){
    thermostat.temperature = 10;
    thermostat.down();
    expect(thermostat.temperature).toEqual(10);
  });

  it("can turn powerSaving off", function() {
    thermostat.switchPowerSaving();
    expect(thermostat.powerSaving).toBe(false);
  });

  it("can turn powerSaving on", function() {
    thermostat.switchPowerSaving();
    thermostat.switchPowerSaving();
    expect(thermostat.powerSaving).toBe(true);
  });

  it("resets the temperature to 20", function() {
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  describe("colours the display according to temperature", function() {
    it("displays yellow when the temperature is between 18 to 25", function() {
      expect(thermostat.displayColour).toEqual("yellow");
    });

    it("displays green when the temperature is 18 or less", function() {
      thermostat.temperature = 18;
      thermostat._checkColour();
      expect(thermostat.displayColour).toEqual("green");
    });
  });

  describe("powerSaving off", function() {
    beforeEach(function() {
      thermostat.powerSaving = false;
    });

    it("has a maximum temperature of 32 degrees", function() {
      thermostat.temperature = 32;
      thermostat.up();
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("powerSaving mode", function() {
    it("has a power saving mode on by default", function() {
      expect(thermostat.powerSaving).toBe(true);
    });

    it("has a maximum temperature of 25 degrees", function() {
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.temperature).toEqual(25);
    });
  });
});
