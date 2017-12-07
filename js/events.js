//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
    alert("Hey!");
  })
}

function pressIt() {

}

function submitIt() {

}

$(document).ready(function(){

// call functions here
getIt();
});
