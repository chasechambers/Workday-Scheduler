// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const currentDayText = $('#currentDay');
const currentHourTime = dayjs().hour();

$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

// listen for save button clicks
$(document).on('click', '.saveBtn', function () {
  // get nearby values
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, value);
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

$('.time-block').each(function(){

  let hour = $(this).attr('id').replace('hour-', '');

  console.log(hour);

  if (currentHourTime > hour) {
    $(this).removeClass('present').removeClass('future').addClass('past');
  } else if (currentHourTime == hour) {
    $(this).removeClass('past').removeClass('future').addClass('present');
  } else {
    $(this).removeClass('past').removeClass('present').addClass('future');
  }
});

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  for(var i=0; i<=17; i++)
    {
      $('#hour-' + i +' .description').text(localStorage.getItem('hour-'+ i))
    }

  // TODO: Add code to display the current date in the header of the page.


let currentDay = dayjs().format('MM-DD-YYYY');

currentDayText.text(currentDay);

});