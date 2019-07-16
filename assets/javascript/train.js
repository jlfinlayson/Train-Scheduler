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

$("#ctime").text("Current Time: " + (moment().format("HH:mm")));

//Create submit button
$("#add-train-btn").on("click", function (event) {
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

//Push train date to database
database.ref().on("child_added", function (childSnapshot) {

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().first;
    var trainFrequency = childSnapshot.val().frequency;

    // Current Time
    var currentTime = moment();

    // Difference between the times
    var diffTime = moment().diff(moment(firstTrain, "HH:mm"), "minutes");

    // Time apart (remainder)
    var tRemainder = diffTime % trainFrequency;

    // Minute Until Train
    var tMinutesTillTrain = trainFrequency - tRemainder;

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("HH:mm");

    //Create new row with content
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainFrequency),
        $("<td>").text(nextTrain),
        $("<td>").text(tMinutesTillTrain)
    );

    //Append new row to table
    $("#train-table > tbody").append(newRow);

});
