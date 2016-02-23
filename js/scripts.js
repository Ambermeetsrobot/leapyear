var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }

  else {
  return false;
  }
};


$(document).ready(function(){
  $("#leap-year form").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (year < 0 || isNaN(year) || year === "") {
      alert("Please enter a number...ya dummy!");
      $("#result").hide();
    } else if (!result) {
      $(".year").append(" is not a Leap Year.");
      // $(".not").text("not");
      $("#result").show();
    } else {
      //  $(".not").text("");
      $(".year").append(" is a Leap Year.");
      $("#result").show();
    }
  event.preventDefault();
});
});
