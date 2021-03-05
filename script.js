let userChoice;
let cpuChoice;
let audioClicked = false;

$("#volumeToggle").on("click", function () {
  themeMusic = document.getElementById("themeMusic");
  if (audioClicked === false) {
    themeMusic.play();
  } else {
    themeMusic.muted = !themeMusic.muted;
  }
  themeMusic.paused = false;
  audioClicked = true;
  $("i").toggleClass("fa-volume-mute").toggleClass("fa-play-circle");
});


$("#startButton").click(function () {
  $(".startTitleScreen").fadeToggle("slow", "linear");
  $(".characterSelect").removeClass("hidden");
});


const startAudio = document.getElementById("startAudio");

$(document).ready(function () {
  $(".start").click(function () {
    startAudio.play();
    startAudio.volume = 0.1;
  });
});


$(".hideFooterButton").on("click", function () {
  $("footer").fadeToggle("footerHidden");
  //hides
  $(".hideAgain").on("click", function () {
    $("footer").addClass("footerHidden");
  });
});

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

const menuSelectAudio = document.getElementById("menuSelectAudio");
$(document).ready(function () {
  $("li").hover(function () {
    menuSelectAudio.play();
    menuSelectAudio.volume = 0.1;
  });
});

const displayChosenCharacter = () => {
  $(".selection").on("click", function (event) {
    event.preventDefault();
    const buttonIndex = this.value;
    userChoice = characters[buttonIndex];
    cpuChoice = generateCPUCharact();

    $(".characterStats").html(`
      <img src = "${userChoice.gif}"/>
      <p>Name: ${userChoice.name}</p>
      <p>Age: ${userChoice.age}</p>
      <p>Home: ${userChoice.home}</p>
      <button class="chosen hideCharacters">SELECT THIS CHARACTER</button>
      <button class="return hideCharacters">BACK TO MAIN MENU </button>
    `);

    $(".hideCharacters").on("click", function () {
      $(".characterStats").hide();
    });

    $(".characters").hide();
    $(".characterStats").show();
    $(".return").click(function () {
      $(".characters").show();
    });

    $(".chosen").click(function () {
      $(".characterSelect").fadeToggle("slow", "linear");
      $(".battleMode").removeClass("hidden");
    });

    const attack = document.getElementById("attack");

    $(document).ready(function () {
      $(".chosen").click(function () {
        attack.play();
        attack.volume = 0.1;
      });
    });

    $(".displayUser").html(`
        <img src="${userChoice.right}">
        `);
    $(".displayCpu").html(`
            <img src="${cpuChoice.left}">
        `);
  });
};

const generateCPUCharact = () => {
  let cpuIndex = Math.floor(Math.random() * (2 - 0 + 1));
  let cpuChoice = characters[cpuIndex];
  return cpuChoice;
};

const startBattle = (userChoice) => {
  $(".displayUser").html();
};

let babyYoda = characters[0];
let babySpongeBob = characters[1];
let babyGroot = characters[2];

$(".startFight").on("click", function () {
  let health = document.getElementById("health");
  let cpuHealth = document.getElementById("cpuHealth");
  if (userChoice === babyYoda) {
    if (cpuChoice === babySpongeBob) {
      setTimeout(
        function() 
        {
          health.value -= 0;
          cpuHealth.value -= 100;
    }, 1000);
      gameOverWin("win!");
    } else if (cpuChoice === babyYoda) {
      setTimeout(
        function() 
        {
      health.value -= 50;
      cpuHealth.value -= 50;
    }, 1000);
      gameOverTie("tie!");
    } else {
      setTimeout(
        function() 
        {
      health.value -= 100;
      cpuHealth.value -= 0;
    }, 1000);
      gameOverLose("lose!");
    }
  } else if (userChoice === babySpongeBob) {
    if (cpuChoice === babySpongeBob) {
      setTimeout(
      function() 
      {
        health.value -= 50;
        cpuHealth.value -= 50;
        
      }, 1000);
      gameOverTie("tie!");
    } else if (cpuChoice === babyYoda) {
        setTimeout(
    function() 
    {
      health.value -= 100;
      cpuHealth.value -= 0;
    }, 1000);
      gameOverLose("lose!");
    } else {
        setTimeout(
    function() 
    {
      health.value -= 0;
      cpuHealth.value -= 100;
    }, 1000);
      
      gameOverWin("win!");
    }
  } else if (userChoice === babyGroot) {
    if (cpuChoice === babyGroot) {
       setTimeout(
    function() 
    {
      health.value -= 50;
      cpuHealth.value -= 50;
    }, 1000);
      gameOverTie("tie!");
    } else if (cpuChoice === babyYoda) {
      setTimeout(
    function() 
    {
      health.value -= 100;
      cpuHealth.value -= 0;
    }, 1000);
      gameOverLose("lose!");
    } else {
       setTimeout(
    function() 
    {
      health.value -= 0;
      cpuHealth.value -= 100;
    }, 1000);
      gameOverWin("win!");
    }
  }
});

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
    }, 1600);

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

const resultsAudio = document.getElementById("resultsAudio");
const giggle = document.getElementById("giggle");
const cry = document.getElementById("cry");

$(document).ready(function () {
  $(".startFight").click(function () {
    setTimeout(
        function() 
        {
          resultsAudio.play();
          resultsAudio.volume = 0.2;
        }, 1000);
        setTimeout(
        function() 
        {
          cry.play();
          cry.volume = 0.2;
        }, 1000);
        setTimeout(
        function() 
        {
          giggle.play();
          giggle.volume = 0.3;
        }, 2000);
  });
});


function getRandomImage() {
  let image = resultsImages[Math.floor(Math.random() * resultsImages.length)];

  return image;
}

function displayRandomImage() {
  let htmlImage = document.getElementById("randomImage");
  htmlImage.src = getRandomImage();
}
displayRandomImage();


$(function () {
  $("#battleMode").css({
    "background-image":
      "url(assets/" + backgroundImages[Math.floor(Math.random() * backgroundImages.length)] + ")",
  });
});

const init = () => {
  displayCharacters(characters);
  userChoice = displayChosenCharacter();
  startBattle(userChoice);
};
$(document).ready(init());
