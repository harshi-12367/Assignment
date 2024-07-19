$(document).ready(function () {
  var countDownDate = new Date("Oct 22, 2024 11:16:25").getTime();

  var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format hours, minutes, and seconds as two digits
      hours = hours.toString().padStart(2, '0');
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');

      document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
  }, 1000);

  $(".popup-header").click(function () {
      $(".popup-body").toggle();
  });
});
