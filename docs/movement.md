# Movement Conference 2019 | July 18-20
<a class="btn btn-default btn-block" href="https://movementconf.com/" role="button"><span id="MyTimer"></span></a>  
Encourage your students to [ **register now for Movement Conference 2019 for only $89.99** ]( https://movementconf.com/ ) - that's the lowest price all year!

# Movement 2018

## Emergency Contact Info
In the event of an emergency during conference, please contact your coach or senior coach. If you cannot reach them, please contact FPS Guest Services at 865-251-2590 ext. 1305 or fpsglobal@faithpromise.org.

## Important Movement Documents  
* **[Volunteer Info Packet](mvmt-volunteer.pdf)** - ALL Group Leaders need to read this - it details exactly what you and others are responsible for during Movement
* **[Middle School Leader Guide](mvmt-guide-middle.pdf)** - you will need this for all community group sessions
* [High School Leader Guide](mvmt-guide-high.pdf) - just in case any HS leaders check this site
* [Parent Info Packet](mvmt-parent.pdf) - this is what we handed out during the parent meetings

## Rosters and Lodging / Travel Plans
* [Final Student Registration Roster](mvmt-roster.xlsx)
* [Completed Lodging and Travel Plans](mvmt-travel.xls)  
The files above are password-protected, as they contain personal info - check with your coach for the password.  

<!--End of Markdown Content-->

<!--Bottom Page Nav Buttons-->
<a class="btn btn-default btn-sm" href="/" role="button"><i class="fa fa-arrow-left"></i>&nbsp;<b>This Week @ FPS</b></a>
<a class="btn btn-default btn-sm" href="/fusion" role="button"><b>Fusion Weekend</b>&nbsp;<i class="fa fa-arrow-right"></i></a>

<!--Count Down Timer-->
<script>
// Set the date we are counting down to
var countDownDate = new Date("July 18, 2019 18:00:00").getTime();

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
    var message = "Movement 2019 starts in ";
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
