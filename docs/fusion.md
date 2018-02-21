# Fusion Weekend | February 23-25
<button id="MyButton" onclick="myFunction()">What is Fusion?</button>
<div id="MyToggleDiv" style="display: none;">
Fusion is an overnight weekend retreat that begins on Friday evening and ends on Sunday afternoon. Leaders and students will stay in a local host home for fellowship, small group time, some meals, and trying to get some sleep every night. Live worship services are held each night at the Pellissippi campus. Schedules and more details will be communicated as the event approaches.
</div>

**Fusion begins <span id="MyTimer"></span>**    

## Emergency Contacts
Phone: 865-251-2590 x1305  
Email: [ fpsglobal@faithpromise.org ]( mailto:fpsglobal@faithpromise.org )

## Leader Guide
[ Fusion Leader Guide 2018.pdf ]( fusion\Fusion Leader Guide 2018.pdf )

## Parent Info Meetings
The final mandatory Fusion parent meeting will be this Wednesday at 8:00 PM at the Pellissippi campus.

## Schedule

### Friday February 23

| Time     | Event                         |
| -------- | ----------------------------- |
| 6:00 PM  | Leaders arrive at Host Homes  |
| 6:30 PM  | Students arrive at Host Homes |
| 8:00 PM  | Large Group Session #1 @ PEL  |
| 10:00 PM | Return to Host Homes          |
| 10:30 PM | Small Group Session #1        |

### Saturday February 24

| ----------------- | --------------------------------------- |
| 8:30 AM           | Breakfast at Host Homes                 |
| 10:00 AM          | Large Group Session #2 @ PEL            |
| 12:00 PM          | Lunch: MS @ KMS, HS @ HVA               |
| 1:30 PM - 5:30 PM | Afternoon Activities & Prayer Session   |
| 6:00 PM           | Dinner at Host Homes                    |
| 6:30 PM - 7:30 PM | Prayer Service @ Farragut HS (optional) |
| 8:30 PM           | Large Group Session #3 @ PEL            |
| 11:00 PM          | Return to Host Homes                    |

### Sunday February 25

| 8:00 AM  | Breakfast at Host Homes                      |
| 8:30 AM  | Small Group Session #2                       |
| 9:00 AM  | Clean Host Home, Pack & Get Ready for Church |
| 10:00 AM | MS Groups Attend 2nd Service @ PEL           |
| 11:30 AM | HS Groups Attend 3rd Service @ PEL           |

<!--
## Where Do You Stand? Let Us Know!
<form name="fusion-status" netlify>
	Your Name: <input type="text" name="name">  
	Your Fusion Status:  
		<input type="radio" name="response" value="hard-yes">I'm registered as a leader and have registered my host home - I'm ready!  
		<input type="radio" name="response" value="yes">I'm registered as a leader; still working on my host home.  
		<input type="radio" name="response" value="soft-yes">I'm going to be there the whole weekend but haven't registered as a leader yet.  
		<input type="radio" name="response" value="soft-no">I'll be in & out but not there for the whole event.  
		<input type="radio" name="response" value="no">Sorry - I can't make it at all this year.  
	<button type="submit">Send</button>
</form>
*Responses so far from: Gary, Jacob*
-->

<script>
// Set the date we're counting down to
var countDownDate = new Date("Feb 23, 2018 18:00:00").getTime();

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
    document.getElementById("MyTimer").innerHTML = "in " + days + " days " + hours + " hours "
    + minutes + " min " + seconds + " sec ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("MyTimer").innerHTML = "NOW!";
    }
}, 1000);
</script>

<style>
#MyToggleDiv {
	background-color: lightgray;
	border: none;
	border-radius: 12px;
	padding: 10px 10px;
}
#MyButton {
    background-color: #555555;
    border: none;
	border-radius: 12px;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
</style>

<script>
function myFunction() {
    var x = document.getElementById("MyToggleDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
</script>
