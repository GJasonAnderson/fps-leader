# Movement Conference | July 11-15
<a class="btn btn-primary btn-block" href="#" role="button"><span id="MyTimer"></span></a>  
Movement Conference is more than an event; it's a spark to an awakening in the next generation! Movement is a three-day local church conference where students from across the state of Tennessee are encouraged and inspired to join the Movement and take it back to their schools and communities. More than anything, our desire is to see this generation walk in the power of Jesus and change the world around them for His kingdom. At Movement Conference, students will experience incredible worship and music, be inspired by world-class communicators, and have an unforgettable experience with friends. An awakening is coming to our nation, and we believe it will start right here in Tennessee! Will you join the Movement?

### Registration
[ **Movement Registration** ]( https://www.universe.com/events/movement-conference-2018-tickets-knoxville-17QGJL ) is FREE for FPS Leaders when you use the promo code `OWNER18`.

### FAQs
- **When:** July 11 - 15, 2018
- **Where:** Knoxville Civic Coliseum
- **Why:** To Awaken a Generation
- **How Much:** Student registrations range from $99 to $199 - the earlier they register, the less they pay
- **What's Included:** Admission, wristbands / lanyards, conference materials, 3 meals (lunch & dinner Friday and lunch Saturday)
- **What's Different This Year:** Lower cost, no overnight lodging, open to churches across the region

### The Movement Experience  
The experience at Movement Conference will be absolutely unforgettable. Students will love it. Leaders will love it. No one will ever forget it! People who attend Movement will be talking about it for years, and those who miss it will regret it for just as long. This will be the best conference we have ever done!  

***Students will experience...***  
Killer Worship | Fun with Friends | Small Groups | World Class Preaching | Unforgettable Moments  

***Leaders will experience...***  
Free Admission | 100% Ministry Time with Students | Only One Weekday Off Work (Friday) | Done by 10:00 PM Each Night

### Schedule
- Wednesday Night opening service at FPS
- Thursday Night through Saturday Evening at Movement Conference / Knoxville Civic Coliseum
- Sunday Morning at your local FP campus

<!--End of Markdown Content-->

<!--Bottom Page Nav Buttons-->
<div align="left">
    <a class="btn btn-default btn-sm" href="/" role="button"><i class="fa fa-arrow-left"></i>&nbsp;<b>This Week @ FPS</b></a>
    <a class="btn btn-default btn-sm" href="/fusion" role="button"><b>Fusion Weekend</b>&nbsp;<i class="fa fa-arrow-right"></i></a>
</div>

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
