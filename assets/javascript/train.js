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

//Clear content from text boxes
$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-input").val("");
$("#frequency-input").val("");
});

//Function to calculate "Next Arrival"

//Function to calculate "Minutes Away"

//Push train date to database

//Create new row with content

//Append new row to table

