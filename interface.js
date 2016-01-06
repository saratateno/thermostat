$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updatePowerSavingStatus();

  $('#temp_up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp_down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp_reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#PSM_switch').click(function() {
    thermostat.switchPowerSaving();
    updatePowerSavingStatus();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

  function updatePowerSavingStatus() {
    if (thermostat.powerSaving) {
      $('#PSM_status').text("Power Saving is On");
    } else {
      $('#PSM_status').text("Power Saving is Off");
    }
  }

});
