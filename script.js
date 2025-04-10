$(document).ready(function() {

  // Hide all answers initially
  $(".answer").hide();

  // Reveal the answer when the button is clicked
  $(".reveal-answer").click(function() {
    $(this).next(".answer").slideDown();
    $(this).text("Answer Shown").prop("disabled", true); // Optional text change
  });

});
