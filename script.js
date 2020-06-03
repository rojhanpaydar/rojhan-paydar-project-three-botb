$(document).ready(function(){
    console.log('ready')
    event.preventDefault();
    
    // → User is sent to a menu to select “character” displayed on a six grid menu(with some CSS styling, hover effects with mouse, and more)
});

// cache variables for the DOM (r p s video recommendation)
const userScore = "0";
const computerScore = "0"; 


// → Each “character” is stored in an object. Each object will hold information containing their name and their image

babyYoda = {
    name: "Baby Yoda",
    age: "?????",
    home: "?????"

};

babyGroot = {
    name: "Baby Groot",
    age: "Two Years Old",
    home: "Planet X"
};

babyJackJack = {
    name: "Baby Jack Jack",
    age: "One Years Old",
    home: "Metroville"
}

babyMario = {
    name: "Baby Mario",
    age: "Three Years Old",
    home: "Yoshi's Island"
}

babySpongeBob = {
    name: "Baby SpongeBob",
    age: "Two Years Old",
    home: "Bikini Bottom"
}

babyPatrick = {
    name: "Baby Patrick",
    age: "Two Years Old",
    home: "Bikini Bottom"
}

// → After character selection, the user views “fight mode” (similar to old school 1 vs 1 arcade mode).The users opponent will be randomly selected from an array of villains







// Pseudo Code:

// →  When user is ready for the round, they will click “START FIGHT” button
// → This button click triggers a function to determine the logic of who will win
// → This logic will be a random selection of either “win”, “lose”, or “tie”
// → A screen will appear saying “you lose” or “you win” or “tie” with an option to return to the main menu page and select a new character! 
