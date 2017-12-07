//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input:first').on('keydown', function(key) {
    if(key.which == 71);
    alert("You have pressed the G Key!")
  })
}

function submitIt() {

}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
});
