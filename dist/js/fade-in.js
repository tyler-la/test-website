// document.addEventListener("DOMContentLoaded", function(e) {
//   document.body.classList.remove('fade');
// });

// Transition testing
function fadeInPage() {
  if (!window.AnimationEvent) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}
