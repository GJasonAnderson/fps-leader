# Movement Conference | July 11-15
<a class="btn btn-default btn-block" href="https://movementconf.com/" role="button"><span id="MyTimer"></span></a>  
Check out [ **the official Movement Conference website.** ]( https://movementconf.com/ ) for speakers, schedules, and more!

### Lodging and Travel Form - Due July 1st!
All Movement group leaders need to [complete this Lodging and Travel Form](http://links.faithpromise.org/wf/click?upn=JkS-2BJyj8fMakwOuymoIbuH8FW-2BGX7qJtUqyvqQVe0wEoq6C5V6D23l5T4Z3bwbI0mWYSzMuYF1DcShrdRaVzXGc-2FIYqOKhT9owJLyCsoho4-3D_OPOrC1bVJJ4nLLVGwKrmYGDg9jz3C1-2B7qjcNSz-2B6HaMSFBvHoRJZoKsfpU-2FGvnULvb3BxwIY0ULghILTfHf72JEFsleaNaRKZQJH893D4KsBdLNagkzlJ0fLRVn0ueFXETWmWGlQnUTXWLSqQTfE97FUTbUnWKzwH7ck7qlS-2FTvr32NQ7uqtJTXJ2F78mFLnhhgAqTvuxtmSu6r4A7-2Fv2MaO8KheJkWtPUcZaLgJ7UgcvSmfSmV6z5qpfmjI-2FhUuf5-2BuPoUT-2BAAax8TaoecyelJcKBV3ykfiBW0uL5mWHdZpTX82GTSrF9pSfVw3FFJ-2F) to let FPS know your group's plans for Movement by July 1st.

### Pre-Movement Meetings  
* Date & Time TBA: Leader Prayer Gathering
* July 1st & 8th (times TBA): Parent Information Meetings
* July 10th 6:30 PM - 7:30 PM: Prayer Gathering for all Promisors at each campus

### Student Registration Roster
We are working on a method to post a roster of registered students here in a secure way; until then, you can request the latest copy of the roster by checking with *gjasonanderson at outlook dot com*.

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
