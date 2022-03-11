
// Select the A href and sets the attribute "href" to "http://www.yahoo.com"
$("a").attr("href", "http://www.yahoo.com");

// Select all buttons and adds class "big" to all of them
$("button").addClass("big");

// Select all buttons and set an attribute "background-color" to "red"
$("button").css("background-color", "red");

// Added an event listener to button with click action
// and changing the h1 attribute "color" to "blue"
$("button").click(function() {
  $("h1").css("color", "blue");
});

// Adding an event listener to "whole document" with keypress
// function and changing a "h1" html attribute to event that fired
// the function
$(document).keydown(function(event) {
  $("h1").html(event.key);
});
