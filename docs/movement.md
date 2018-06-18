# Movement Conference | July 11-15
<a class="btn btn-default btn-block" href="https://movementconf.com/" role="button"><span id="MyTimer"></span></a>  
Movement Conference is more than an event; it's a spark to an awakening in the next generation! Discover more details at [ **the official Movement Conference website.** ]( https://movementconf.com/ )  

### Student Registration Roster
We are working on a method to post a roster of registered students here in a secure way; until then, you can request the latest copy of the roster by checking with *gjasonanderson at outlook dot com*.

### FAQs
- **[Movement Q&A from Pastor Zac](movement.pdf)**
- **When:** July 11 - 15, 2018
- **Where:** Knoxville Civic Coliseum
- **Why:** To Awaken a Generation
- **How Much:** Student registrations range from $99 to $199 - the earlier they register, the less they pay
- **What's Included:** Admission, wristbands / lanyards, conference materials, 3 meals (lunch & dinner Friday and lunch Saturday)
- **What's Different This Year:** Lower cost, no overnight lodging, open to churches across the region

### Schedule
- Wednesday Night opening service at FPS
- Thursday Night through Saturday Evening at Movement Conference / Knoxville Civic Coliseum
- Sunday Morning at your local FP campus

<!--End of Markdown Content-->

<!--Bottom Page Nav Buttons-->
<a class="btn btn-default btn-sm" href="/" role="button"><i class="fa fa-arrow-left"></i>&nbsp;<b>This Week @ FPS</b></a>
<a class="btn btn-default btn-sm" href="/fusion" role="button"><b>Fusion Weekend</b>&nbsp;<i class="fa fa-arrow-right"></i></a>

<!--Count Down Timer-->
<script>
// Set the date we are counting down to
var countDownDate = new Date("July 11, 2018 18:00:00").getTime();

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
    var message = "Movement starts in ";
    if (days > 14) {
      message = message + days + " days ";
    } else if (days > 0) {
      message = message + days + " days " + hours + " hours ";
    } else {
      message = message + hours + "h " + minutes + "m " + seconds + "s ";
    }
    document.getElementById("MyTimer").innerHTML = message

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("MyTimer").innerHTML = "Movement has begun!";
    }
}, 1000);
</script>
