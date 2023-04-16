// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const saveButton = $('.saveBtn');
const currentDayText = $('#currentDay');
const currentHourTime = dayjs().format('H');
const hour9 = $('#9am');
// const hour10 = $('#hour-10');
// const hour11 = $('#hour-11');
// const hour12 = $('#hour-12');
// const hour1 = $('#hour-1');
// const hour2 = $('#hour-2');
// const hour3 = $('#hour-3');
// const hour4 = $('#hour-4');
// const hour5 = $('#hour-5');



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


$('#9am .saveBtn').click(function() {

  input9 = $(this).prev().val();
  localStorage.setItem("input9", input9);

});
$('#10 .saveBtn').click(function() {

  input10 = $(this).prev().val();
  localStorage.setItem("input10", input10);

});

$('#11 .saveBtn').click(function() {

  input11 = $(this).prev().val();
  localStorage.setItem("input11", input11);

});
$('#12 .saveBtn').click(function() {

  input12 = $(this).prev().val();
  localStorage.setItem("input12", input12);

});
$('#13 .saveBtn').click(function() {

  input13 = $(this).prev().val();
  localStorage.setItem("input13", input13);

});
$('#14 .saveBtn').click(function() {

  input14 = $(this).prev().val();
  localStorage.setItem("input14", input14);

});
$('#15 .saveBtn').click(function() {

  input15 = $(this).prev().val();
  localStorage.setItem("input15", input15);

});

$('#16 .saveBtn').click(function() {

  input16 = $(this).prev().val();
  localStorage.setItem("input16", input16);

});

$('#17 .saveBtn').click(function() {

  input17 = $(this).prev().val();
  localStorage.setItem("input17", input17);

});


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

console.log(currentHourTime);


$('.time-block').each(function(i, j){


  
});




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $('#9am .description').text(localStorage.getItem("input9"));
  $('#10 .description').text(localStorage.getItem("input10"));
  $('#11 .description').text(localStorage.getItem("input11"));
  $('#12 .description').text(localStorage.getItem("input12"));
  $('#13 .description').text(localStorage.getItem("input13"));
  $('#14 .description').text(localStorage.getItem("input14"));
  $('#15 .description').text(localStorage.getItem("input15"));
  $('#16 .description').text(localStorage.getItem("input16"));
  $('#17 .description').text(localStorage.getItem("input17"));





  // TODO: Add code to display the current date in the header of the page.


let currentDay = dayjs().format('MM-DD-YYYY');

currentDayText.text(currentDay);

});