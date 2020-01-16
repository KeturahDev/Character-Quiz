$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var q1 = parseInt($('select#q1').val());
    var q2 = parseInt($('select#q2').val());
    var q3 = parseInt($('select#q3').val());
    var q4 = parseInt($('select#q4').val());
    var q5 = parseInt($('select#q5').val());
    var q6 = parseInt($('select#q6').val());

    var score = q1 + q2 + q3 + q4 + q5 + q6;

    if (score > 120 ) {
      $("#black-science-man").show();
      $("#trollol").hide();
      $("#cat-getting-pointed-at").hide();
    } else if (score <= 120 && score > 60) {
      $("#trollol").show() 
      $("#black-science-man").hide();
      $("#cat-getting-pointed-at").hide();
    } else if (score <= 60 ) {
      $("#cat-getting-pointed-at").show();
      $("#trollol").hide() 
      $("#black-science-man").hide();
    }
  });
});