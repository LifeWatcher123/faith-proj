function checkRankings() {
  var rank1 = document.getElementById("rank1").value;
  var rank2 = document.getElementById("rank2").value;
  var rank3 = document.getElementById("rank3").value;

  var warningMessage = document.getElementById("warningMessage");

  if (rank1 === rank2 || rank1 === rank3 || rank2 === rank3) {
    // Display the warning in the modal
    warningMessage.textContent = "Warning: Duplicate rankings detected. Please ensure there are no duplicate rankings.";
    $('#warningModal').modal('show');
  } else {
    // Redirect to the next page if there are no conflicts
    window.location.href = "guide1.html";
  }
}

// Add this script to close the modal and go back to the page when the close button (X) is clicked
$(document).ready(function() {
  $('#warningModal .close').on('click', function() {
    // Close the modal
    $('#warningModal').modal('hide');
    // Go back to the previous page
    window.history.back();
  });
});
