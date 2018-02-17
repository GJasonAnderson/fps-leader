# Fusion Weekend | February 23-25
<button id="MyButton" onclick="myFunction()">What is Fusion?</button>
<div id="MyToggleDiv" style="display: none;">
Fusion is an overnight weekend retreat that begins on Friday evening and ends on Sunday afternoon. Leaders and students will stay in a local host home for fellowship, small group time, some meals, and trying to get some sleep every night. Live worship services are held each night at the Pellissippi campus. Schedules and more details will be communicated as the event approaches.
</div>

**Fusion begins <span id="MyTimer"></span>**    

## Tasks To Do Now
- Last minute leader and host home registration links are below if you haven't already done so
- Plan to attend a Parent Info Meeting; details below

## Host Home Info Card
**Review your Host Home Info Card that will be sent by email / text on Friday 2/16 and notify your coach IMMEDIATELY if any corrections below are needed before they are distributed at the parent info meetings:**  
- Is the host home address correct?
- Is the host home phone number correct?
- Is there enough room in your host home? (Please contact host home for all of these, if needed)
- Is the leader information correct?
- Are the students correct?
- Do you have enough seatbelts?

## Fusion Leader Guide
This year's [ Fusion Leader Guide ]( fusion\Fusion Leader Guide 2018.pdf ) is available now - please review it and let your coach know if you have any questions.

## Registration Links

- Student Registration is <s>$50</s> CLOSED
- [ Leader Registration is FREE and STILL OPEN ]( https://my.faithpromise.org/portal/event_signup.aspx?id=421230 )
- [ Host Home Registration ]( https://fpstudents.wufoo.com/forms/pel-fusion-host-homes-2018/ )
- [ Email Taylor Henry ]( mailto:taylorh@faithpromise.org ) if you are just now registering your host home

## Parent Info Meeting
The mandatory Fusion parent meeting is on February 17th & 18th at the Pellissippi campus in Room 222 during all services - just pick which date and service time works best. **Leaders are highly encouraged to attend a meeting session, preferably with your host home family.** The two busiest meetings will be Sunday at 10:00 AM & 11:30 AM; please try attending on Saturday at 5:00 PM, 6:30 PM, or Sunday at 8:45 AM if you can.

## Fusion Leader Meeting
This year we will *not* be having a leader meeting for Fusion; however, your coach and/or veteran co-leader should be able to answer any questions you may have, and attending a parent info meeting detailed above would be very helpful.

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
var countDownDate = new Date("Feb 23, 2018 19:00:00").getTime();

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
