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

});
