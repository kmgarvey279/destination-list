//back end logic

//define function that will create the 'DestinationList' object and give it property #1: empty .destinations array and property #2: 'currentId' set at zero.
function DestinationList() {
  this.destinations = [],
  this.currentId = 0
}

//define/create new 'addDestination' constructor property in 'DestinationList' object. The constructor calls a function which takes a destination as an argument, gives it an 'id' property by calling the 'assignId' function, and pushes the argument into the 'destinations' array.
DestinationList.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

//add new 'assignId' property to our DestinationList object. This property calls a function which targets the currentId property of our object and adds one to it. It then returns the updated currentId property.
DestinationList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//add new 'findDestination' property to our DestinationList object. This property calls a function which runs a for loop until it reaches the end of the length of the contacts array. Each iteration of this loop checks if our object's array contains an item in this position, then checks if the id property of the item in this position is the same as the index value. If it is, it returns the object in this position. if the index value does not match an array item position, or if the id of the item in this position doesn't match   it returns
DestinationList.prototype.findDestination = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.destinations[i]) {
      if (this.destinations[i].id == id) {
        return this.destinations[i];
      }
    }
  };
  return false;
}

DestinationList.deleteDestination = function(id) {
  for (var i=0; i<this.destinations.length; i++) {
    if (this.destinations[i]) {
      if (this.destinations[i].id == id) {
        delete this.destinations[i];
        return true;
      }
    }
  };
  return false
}

//business logic for Destinations
function Destination(name, country, landmark, yearVisited, reasonVisited) {
  this.name = name,
  this.country = country,
  this.landmark = landmark,
  this.yearVisited = yearVisited,
  this.reasonVisited = reasonVisited
}

Destination.prototype.destinationAndCountry = function() {
  return this.name + ", " + this.country;
}
//user input logic

//define global variable at the 'top level' which is available to the entire file - mimicing a database.
var destinationList = new DestinationList();

//Event handler which tells the program to call the following function after the form is submitted.
$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();
    var inputtedName = $('input#new-name').val();
    var inputtedCountry = $('input#new-country').val();
    var inputtedLandmark = $('input#new-landmark').val();
    var inputtedYearVisited = $('input#new-year-visited').val();
    var inputtedReasonVisited = $('input#new-reason-visited').val();

    var newDestination = new Destination(inputtedName, inputtedCountry, inputtedLandmark, inputtedYearVisited, inputtedReasonVisited);

    destinationList.addDestination(newDestination);
    for (var i = 0; i < destinationList.length; i++) {
      
    }
    $("#destinationInfo").append(destinationList.destinations[i].name + "<br>");
  });

    // $("#show-destination").show();
  $("#destinationInfo").click(function(event) {
    $("#destinationInfo").append("Country: " + destinationList.destinations[i].country + "<br>");
    $("#destinationInfo").append("Landmark: " + destinationList.destinations[i].landmark + "<br>");
    $("#destinationInfo").append("Year Visited: " + destinationList.destinations[i].yearVisited + "<br>");
    $("#destinationInfo").append("Reason Visited: " + destinationList.destinations[i].reasonVisited + "<br>");
  });
});
