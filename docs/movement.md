# Movement Conference | July 11-15
<a class="btn btn-default btn-block" href="https://movementconf.com/" role="button"><span id="MyTimer"></span></a>  
Check out [ **the official Movement Conference website** ]( https://movementconf.com/ ) for speakers, schedules, and more!

## Pre-Movement Meetings  
* <s>June 30th 5:00 PM - 6:00 PM: Leader Prayer Gathering in Room 222</s>
* July 10th 6:30 PM - 7:30 PM: Global Prayer Gathering for all Promisors at each campus

## Parent Information Meetings
* Pellissippi Campus, Room 222
* <s>Saturday, June 30th @ 6:15 PM</s>  
* Sunday, July 8th @ 10:00 AM or 11:30 AM (*the previously scheduled 8:45 AM meeting has been cancelled*)

## Rosters and Lodging / Travel Plans
* [mvmt-roster.xlsx](Final Student Registration Roster)
* [mvmt-travel.xls](Completed Lodging and Travel Plans) - if your group isn't listed, you need to [complete the Lodging and Travel Form ASAP!](http://links.faithpromise.org/wf/click?upn=JkS-2BJyj8fMakwOuymoIbuH8FW-2BGX7qJtUqyvqQVe0wEoq6C5V6D23l5T4Z3bwbI0mWYSzMuYF1DcShrdRaVzXGc-2FIYqOKhT9owJLyCsoho4-3D_OPOrC1bVJJ4nLLVGwKrmYGDg9jz3C1-2B7qjcNSz-2B6HaMSFBvHoRJZoKsfpU-2FGvnULvb3BxwIY0ULghILTfHf72JEFsleaNaRKZQJH893D4KsBdLNagkzlJ0fLRVn0ueFXETWmWGlQnUTXWLSqQTfE97FUTbUnWKzwH7ck7qlS-2FTvr32NQ7uqtJTXJ2F78mFLnhhgAqTvuxtmSu6r4A7-2Fv2MaO8KheJkWtPUcZaLgJ7UgcvSmfSmV6z5qpfmjI-2FhUuf5-2BuPoUT-2BAAax8TaoecyelJcKBV3ykfiBW0uL5mWHdZpTX82GTSrF9pSfVw3FFJ-2F)  
All of these files are password-protected, as they contain personal info. Check with your coach for the password.  

## Important Movement Documents  
* [Volunteer Info Packet](mvmt-volunteer.pdf) - ALL Group Leaders need to read this!
* [Parent Info Packet](mvmt-parent.pdf) - this is what we're handing out during the parent meetings
* [Middle School Leader Guide](mvmt-guide-middle.pdf) - you will need this for all community group sessions
* [High School Leader Guide](mvmt-guide-high.pdf)

<!--
## Student Registration Roster
We are working on a method to post a roster of registered students here in a secure way; until then, you can request the latest copy of the roster by checking with *gjasonanderson at outlook dot com*.
-->

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
