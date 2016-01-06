$( document ).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temp_up').click(function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });
});
