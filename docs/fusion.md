# Fusion Weekend | February 23-25
<button id="MyButton" onclick="myFunction()">What is Fusion?</button>
<div id="MyToggleDiv" style="display: none;">
Fusion is an overnight weekend retreat that begins on Friday evening and ends on Sunday afternoon. Leaders and students will stay in a local host home for fellowship, small group time, some meals, and trying to get some sleep every night. Live worship services are held each night at the Pellissippi campus. Schedules and more details will be communicated as the event approaches.
</div>

## Tasks To Do Now
**Fusion begins <span id="MyTimer"></span>**    
We still have several small group leaders who are not signed up for Fusion. We can’t place students in their groups unless we know that their group is going to exist at Fusion. Our top priority is getting all leaders registered and submitting your host home information ASAP (links to both online forms can be found below). **The deadline for student registrations is February 14th at midnight!**

## Fusion Leader Guide
This year's [ Leader Guide ]( Fusion Leader Guide 2018.pdf ) is available now - hard copies will also be available on Wednesday.

## Registration Links
*Some links were down temporarily due to a software transition; they are all working now.*  

- [ Student Registration is $50 ]( https://my.faithpromise.org/portal/event_signup.aspx?id=420353 )
- [ Leader Registration is FREE ]( https://my.faithpromise.org/portal/event_signup.aspx?id=421230 )
- [ Host Home Registration ]( https://fpstudents.wufoo.com/forms/pel-fusion-host-homes-2018/ )

## Parent Info Meeting
The mandatory Fusion parent meeting is on February 17th & 18th at the Pellissippi campus in Room 222 during all services - they just pick which date and service time works best.

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
