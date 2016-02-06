/**
 * Created by dev on 6/02/16.
 */
// a javascript plugin that displays countdown;

function calculateRemainingTime(endTimeMilliSeconds){
            console.log("calculate remaining time called");

            var totalTime =  endTimeMilliSeconds -  Date.parse(new Date());

            // get the difference between deadline time and now;
            // get the difference time from Now and Deadlien;

            console.log("Total time ", totalTime);

            // get the exact seconds, minutes, hours, and days till deadline;
            var seconds = Math.floor((totalTime / 1000) % 60); // get the smallest whole seconds;
            var minutes = Math.floor(((totalTime / 1000) / 60) % 60); // get the whole minutes;
            var hours = Math.floor( (totalTime / (1000 * 60 * 60)) % 24 ); // get the whole hours;
            var days = Math.floor(totalTime / (1000 * 60 * 60 * 24)); // get the whole days;
            console.log('seoncds ', seconds);
            console.log('minutes ', minutes);
            console.log('hours ', hours);
            console.log('days ', days);
            return {
                totalTime: totalTime,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        }// end calculateRemainingTime;


function setUpClock(endTime, clockElement, linkURL, funcallBack){

    function updateClock(){
        // get the time;
        var clockTime = calculateRemainingTime(endTime);
        // get the clock reference;
        var days = clockTime.days < 10 ? "0" + clockTime.days : clockTime.days;
        var hours = clockTime.hours < 10 ? "0" + clockTime.hours : clockTime.hours;
        var minutes = clockTime.minutes < 10 ? "0" + clockTime.minutes : clockTime.minutes;
        var seconds = clockTime.seconds < 10 ? "0" + clockTime.seconds : clockTime.seconds;

        //$('span.days').text(days);
        //$('span.hours').text(hours);
        //$('span.minutes').text(minutes);
        //$('span.seconds').text(seconds);
        //hours  = hours <= 1 ? hours + " Hour" : hours + " Hours";
        //minutes = minutes <= 1 ? minutes + " Minute" : minutes + " Minutes";
        //seconds  = seconds <= 1 ? seconds + " Second" : seconds + " Seconds";

        console.log("Inside updateClock, and clockElement is ", clockElement);

        //$(clockElement).text("Time Remaining: " + hours + " " + minutes + " " + seconds);
        $(clockElement).text("Time Remaining: " + days + ":" + hours + ":" + minutes + ":" + seconds);


        if(clockTime.totalTime <=0 ){
            clearInterval(currentClock); // if the time remaining <= 0, we stop the clock;
            console.log("clocktime clearInterval to stop clock");

            console.log("Now call the call back function inside updateClock");
            funcallBack(linkURL);
            console.log('Call back go to other link finished');
        } // end if;

        console.log("inside set interval clocktime");
    } // end updateClock;

    console.log("set up clock called;");
    updateClock();

    var currentClock = setInterval(updateClock, 1000); // end setInterval;
} // end setUpClock;


function launchCountdown(minutesToCountDown, clockElement, linkURL){
    var countDownMilliseconds = minutesToCountDown * 60 * 1000;
    var currentMilliseconds =  Date.parse(new Date());

    var deadLineTime = currentMilliseconds + countDownMilliseconds;

    setUpClock(deadLineTime, clockElement, linkURL, clickLinkToGoToOtherPage)

} // end launchCountdown;

// a function that go to another page based on the URL;
function clickLinkToGoToOtherPage(linkURL){
    //$('a[name=" + linkName + "]').click();
    window.location.href = linkURL;
    console.log('Link name is ', linkURL);
    console.log("Link cliked");
    } // end callback;