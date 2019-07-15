// Linking Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAIT13oXrhTVJCwfFnqEOnTUsBKS7zxAmY",
        authDomain: "jess-test-7ce10.firebaseapp.com",
        databaseURL: "https://jess-test-7ce10.firebaseio.com",
        projectId: "jess-test-7ce10",
        storageBucket: "jess-test-7ce10.appspot.com",
        messagingSenderId: "374587731069",
        appId: "1:374587731069:web:c8ef28ca494d6232"
      };
    
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//Create submit button
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

//Grab user input
var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var firstTrain = $("#first-train-input").val().trim();
var trainFrequency = $("#frequency-input").val().trim();

var newTrain = {
    name: trainName,
    destination: trainDestination,
    first: firstTrain,
    frequency: trainFrequency
  };

//Push data to database
database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.first);
console.log(newTrain.frequency);

console.log("Train successfully added");


//Clear content from text boxes
$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-input").val("");
$("#frequency-input").val("");
});

//Function to calculate "Next Arrival"

//Function to calculate "Minutes Away"

//Push train date to database
database.ref().on("child_added", function(childSnapshot) {
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().first;
    var trainFrequency = childSnapshot.val().frequency;
  
//Create new row with content
var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency),
    // $("<td>").text(nextTrain),
    // $("<td>").text(minutesAway)
  );
//Append new row to table
$("#train-table > tbody").append(newRow);

});
