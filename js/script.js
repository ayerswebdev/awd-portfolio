$(document).ready(function() {
  setUpDropdownFunctions();
});

function setUpDropdownFunctions() {
  var dropdowns = ["hhs", "weather", "chess", "simon", "tic-tac-toe", "pomodoro", "calculator"];

  for(var i = 0; i < dropdowns.length; i++) {
    (function(id) {
      console.log(id);
      $("#" + id + "-drop").click(function() {
        $("#" + id + "-dropdown-more").toggle();
        $("#" + id + "-dropdown-less").toggle();
        $("#" + id + "-more").slideToggle();
      });
    })(dropdowns[i]);
  }
}
