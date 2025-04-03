$(document).ready(function() {

    // Reveal the answer when the button is clicked
    $(".reveal-answer").click(function() {
      $(this).next(".answer").slideDown();
      $(this).prop("disabled", true); // Disable button after it's clicked
    });
  });