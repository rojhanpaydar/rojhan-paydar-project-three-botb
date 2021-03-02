// → User is sent to a menu to select "character" displayed on a 3 grid menu(with some CSS styling, hover effects with mouse, and more)
let userChoice;
let cpuChoice;
let audioClicked = false;

// Each "character" is stored in an object. Each object will hold information containing their name, image, age, home, stat image, identifier, left and right facing battle characters
const characters = [
  {
    identifier: "babyYoda",
    name: "Baby Yoda",
    gif: "assets/baby_yoda_stats.gif",
    age: "?????",
    home: "?????",
    url: "assets/baby_yoda_icon_4.png",
    left: "assets/baby_yoda_facing_left.png",
    right: "assets/baby_yoda_facing_right.png",
    select: "SELECT",
  },
  {
    identifier: "babySpongeBob",
    name: "Baby SpongeBob",
    gif: "assets/baby_spongebob_stats.gif",
    age: "Two Years Old",
    home: "Bikini Bottom",
    url: "assets/baby_spongebob.png",
    left: "assets/baby_spongebob_facing_left.png",
    right: "assets/baby_spongebob_facing_right.png",
    select: "SELECT",
  },
  {
    identifier: "babyGroot",
    name: "Baby Groot",
    gif: "assets/baby_groot_stats.gif",
    age: "Two Years Old",
    home: "Planet X",
    url: "assets/baby_groot_new_icon.png",
    left: "assets/baby_groot_facing_left.png",
    right: "assets/baby_groot_facing_right.png",
    select: "SELECT",
  },
];

// music player (theme music for the entire game)

$("#volumeToggle").on("click", function () {
  themeMusic = document.getElementById("themeMusic");
  if (audioClicked === false) {
    themeMusic.play();
  } else {
    themeMusic.muted = !themeMusic.muted;
  }

  // set audio volume
  themeMusic.paused = false;

  // change audio to "on"
  audioClicked = true;

  // change favicon to indicate audio status
  $("i").toggleClass("fa-volume-mute").toggleClass("fa-play-circle");
});

// game starts with a title screen, that fades and hides once you click start button
// .characterSelect class (character select menu) is revealed for the user to choose a character as their "fighter"
$("#startButton").click(function () {
  $(".startTitleScreen").fadeToggle("slow", "linear");
  $(".characterSelect").removeClass("hidden");
});

// audio for the "start button" in the title screen
const startAudio = document.getElementById("startAudio");

$(document).ready(function () {
  $(".start").click(function () {
    startAudio.play();
    startAudio.volume = 0.1;
  });
});

// button for footer with credits toggles on and off throughout the app
// unhides

$(".hideFooterButton").on("click", function () {
  $("footer").fadeToggle("footerHidden");
  //hides
  $(".hideAgain").on("click", function () {
    $("footer").addClass("footerHidden");
  });
});

// dynamically loops and displays character title, character image, and a "select" button. This is done by appending the li, h3, img, button to a <ul> with class of '.characters'. The for loops applies this for each character within the array, and pulls the information that matches the key within each individual object (aka character).
const displayCharacters = (characters) => {
  for (let i = 0; i < characters.length; i++) {
    const characterContainer = $("<li>").addClass(characters[i].identifier);
    const characterName = $("<h3>").text(characters[i].name);
    const characterImage = $("<img>").attr("src", characters[i].url);
    const characterSelect = $('<button class="selection">')
      .text(characters[i].select)
      .attr("value", i);
    characterContainer.append(characterName, characterImage, characterSelect);
    $(".characters").append(characterContainer);
  }
};

// audio plays when mouse hovers over <li> in the character selection menu
const menuSelectAudio = document.getElementById("menuSelectAudio");
$(document).ready(function () {
  $("li").hover(function () {
    menuSelectAudio.play();
    menuSelectAudio.volume = 0.1;
  });
});

//in the "const characterSelect button", there is a class of selection. This is the "select" button on the character selection menu.
const displayChosenCharacter = () => {
  $(".selection").on("click", function (event) {
    event.preventDefault();
    const buttonIndex = this.value;
    userChoice = characters[buttonIndex];
    cpuChoice = generateCPUCharact();

    //When you click the "select" button,  it hides the '.characters' section, and reveals the characters stats which are displayed below in $('.characterStats').html. User can view a gif image of the character, the character name, the character age, and the characters home town.
    $(".characterStats").html(`
                <img src = "${userChoice.gif}"/>
                <p>Name: ${userChoice.name}</p>
                <p>Age: ${userChoice.age}</p>
                <p>Home: ${userChoice.home}</p>
                <button class="chosen hideCharacters">SELECT THIS CHARACTER</button>
                <button class="return hideCharacters">BACK TO MAIN MENU </button>
                `);

    //  There are also two buttons rendered in the characterStats.The button titled "SELECT THIS CHARACTER" allows the user to enter battle mode.The button titled "BACK TO MAIN MENU" hides the.characterStats section and unhides the.characters section

    // .hideCharacters class in the "SELECT THIS CHARACTER" button tells jQuery to hide .characterStats once it is clicked. In this instances, .characterStats allow the user to hide and unhide creating the illusion of toggling between a menu and a stats section
    $(".hideCharacters").on("click", function () {
      $(".characterStats").hide();
    });
    //.characters.hide will hide the menu of the character selection
    //.characterStats.show will show the characters stats again. This allows the user to toggle back and forth multiple times before they make a character choice.
    $(".characters").hide();
    $(".characterStats").show();
    // the class of .return on the button tells jQuery to continue showing the character menu until the user selects a character
    $(".return").click(function () {
      $(".characters").show();
    });

    // on select this character:
    $(".chosen").click(function () {
      // hide character selection menu and fade into the battle mode
      $(".characterSelect").fadeToggle("slow", "linear");
      // display battle mode
      $(".battleMode").removeClass("hidden");
    });

    // this audio is trigged once the user clicks select, and the battle mode page loads. It says "ready, fight!". This tells the user they must battle.
    const attack = document.getElementById("attack");

    $(document).ready(function () {
      $(".chosen").click(function () {
        attack.play();
        attack.volume = 0.1;
      });
    });

    // characterChoice info loaded into battle mode

    $(".displayUser").html(`
        <img src="${userChoice.right}">
        `);
    $(".displayCpu").html(`
            <img src="${cpuChoice.left}">
        `);
  });
};
// create a random index
// store random index in varaible (compChoice)
// load compChoice info
const generateCPUCharact = () => {
  let cpuIndex = Math.floor(Math.random() * (2 - 0 + 1));
  let cpuChoice = characters[cpuIndex];
  return cpuChoice;
};
// create user choice of character variable <
const startBattle = (userChoice) => {
  $(".displayUser").html();
};

// event listener to fight button:
// use if else statements
// added "health bars" to let user see their health points.
let babyYoda = characters[0];
let babySpongeBob = characters[1];
let babyGroot = characters[2];

$(".startFight").on("click", function () {
  let health = document.getElementById("health");
  let cpuHealth = document.getElementById("cpuHealth");
  if (userChoice === babyYoda) {
    if (cpuChoice === babySpongeBob) {
      health.value -= 0;
      cpuHealth.value -= 100;
      gameOverWin("win!");
    } else if (cpuChoice === babyYoda) {
      health.value -= 50;
      cpuHealth.value -= 50;
      gameOverTie("tie!");
    } else {
      health.value -= 100;
      cpuHealth.value -= 0;
      gameOverLose("lose!");
    }
  } else if (userChoice === babySpongeBob) {
    if (cpuChoice === babySpongeBob) {
      health.value -= 50;
      cpuHealth.value -= 50;
      gameOverTie("tie!");
    } else if (cpuChoice === babyYoda) {
      health.value -= 100;
      cpuHealth.value -= 0;
      gameOverLose("lose!");
    } else {
      health.value -= 0;
      cpuHealth.value -= 100;
      gameOverWin("win!");
    }
  } else if (userChoice === babyGroot) {
    if (cpuChoice === babyGroot) {
      health.value -= 50;
      cpuHealth.value -= 50;
      gameOverTie("tie!");
    } else if (cpuChoice === babyYoda) {
      health.value -= 100;
      cpuHealth.value -= 0;
      gameOverLose("lose!");
    } else {
      health.value -= 0;
      cpuHealth.value -= 100;
      gameOverWin("win!");
    }
  }
});

// if user loses, hide the button to "start the fight", and reveal their results. User will have the choice to return to the main menu
let gameOverLose = function (results) {
  $(".startFight").hide();
  $(".displayCpu").addClass("hellaKickLeft");
  $(".displayUser").addClass("hellaKickRight");
  setTimeout(
    function() 
    {
      $(".displayCpu").addClass("jump");
      $(".displayUser").addClass("losingBabyLeft");
    }, 1400);
     setTimeout(
    function() 
    {
      $(".displayUser").addClass("hideBaby");
    }, 1800);
    setTimeout(
    function() 
    {
      $(".fightResultsBox")
        .append(
          `<p>Oh no... you ${results}</p>
            <button class="backToStart">PLAY AGAIN</button>
            `
        )
        .fadeToggle();
      $(".backToStart").on("click", function () {
        location.reload();
      });
    }, 2000);
};
// if user ties, hide the button to "start the fight", and reveal their results. User will have the choice to return to the main menu
let gameOverTie = function (results) {
  $(".startFight").hide();
  $(".displayCpu").addClass("bounceRight");
  $(".displayUser").addClass("bounceLeft");
  setTimeout(
    function() 
    {
      $(".displayCpu").addClass("shook");
      $(".displayUser").addClass("shook");
    }, 1400);
    setTimeout(
    function() 
    {
      $(".fightResultsBox")
        .append(
          `<p>You've met your match.. you ${results}</p> 
                <button class="backToStart">PLAY AGAIN</button>
            `
        )
        .fadeToggle();
      $(".backToStart").on("click", function () {
        location.reload();
      });
    }, 2000);
};
// if user wins, hide the button to "start the fight", and reveal their results. User will have the choice to return to the main menu
let gameOverWin = function (results) {
  $(".startFight").hide();
  $(".displayCpu").addClass("hellaKickLeft");
  $(".displayUser").addClass("hellaKickRight");
  setTimeout(
    function() 
    {
      $(".displayUser").addClass("jump");
      $(".displayCpu").addClass("losingBabyRight")
    }, 1400);

    setTimeout(
    function() 
    {
      $(".displayCpu").addClass("hideBaby");
    }, 1800);

    setTimeout(
    function() 
    {
      $(".fightResultsBox")
        .append(
          `<p>You are the strongest baby... you ${results}</p> 
                <button class="backToStart">PLAY AGAIN</button>
            `
        )
        .fadeToggle();
      $(".backToStart").on("click", function () {
        location.reload();
      });
    }, 2000);

};

// audio plays after user selects "start fight button"
const resultsAudio = document.getElementById("resultsAudio");

$(document).ready(function () {
  $(".startFight").click(function () {
    setTimeout(
        function() 
        {
          resultsAudio.play();
          resultsAudio.volume = 0.2;
        }, 1000);
  });
});


// provides randomized images with the game results
function getRandomImage() {
  let images = [
    "assets/baby_groot_you_win.gif",
    "assets/baby_spongebob_you_win.gif",
    "assets/baby_yoda_you_win.gif",
    "assets/baby_yoda_sipping_gif.gif",
    "assets/baby_yoda_sleeping.gif",
    "assets/baby_yoda_waving.gif",
    "assets/baby_spongebob_plankton.gif",
    "assets/baby_groot_dancing.gif",
    "assets/baby_groot_angry.gif",
    "assets/baby_groot_cheer.gif",
  ];
  let image = images[Math.floor(Math.random() * images.length)];

  return image;
}

function displayRandomImage() {
  let htmlImage = document.getElementById("randomImage");
  htmlImage.src = getRandomImage();
}
displayRandomImage();

// randomizes video game backgrounds
$(function () {
  images = [
    "nYuVFMI.gif",
    "bg1.gif",
    "bg2.gif",
    "bg3.gif",
    "bg4.gif",
    "bg5.gif",
    "bg6.gif",
    "bg7.gif",
    "bg8.gif",
    "bg9.gif",
    "bg10.gif",
    "bg11.gif",
    "bg12.gif",
    "bg13.gif",
    "bg14.gif",
    "bg15.gif",
    "bg16.gif",
    "bg17.gif",
    "bg18.gif",
    "bg19.gif",
    "bg20.gif",
  ];
  $("#battleMode").css({
    "background-image":
      "url(assets/" + images[Math.floor(Math.random() * images.length)] + ")",
  });
});

const init = () => {
  displayCharacters(characters);
  userChoice = displayChosenCharacter();
  startBattle(userChoice);
};
$(document).ready(init());
