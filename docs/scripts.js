// COUNTDOWN TIMER
// Set the date we are counting down to
var countDownDate = new Date("July 17 2019 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="MyTimer"
    var message = "";
    if (days > 14) {
      message = message + days + " days";
    } else if (days > 0) {
      message = message + days + " days " + hours + " hours";
    } else {
      message = message + hours + "h " + minutes + "m " + seconds + "s";
    }
    document.getElementById("MyTimer").innerHTML = message

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("MyTimer").innerHTML = "---";
    }
}, 1000);

// EXAMPLE TEXT BLOCK for referring page
// add class of 'btn-primary' to make it blue & 'btn-danger' to make it red
// <a class="btn btn-default btn-block" href="https://movementconf.com/" role="button">there is only <b><span id="MyTimer"></span></b> left until something happens</a>
