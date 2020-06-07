// → User is sent to a menu to select "character" displayed on a six grid menu(with some CSS styling, hover effects with mouse, and more)
// → Each "character" is stored in an object. Each object will hold information containing their name and their image
let userChoice;
const characters = [
    {
        identifier: 'babyYoda',
        name: 'Baby Yoda',
        gif: 'assets/baby_yoda_stats.gif',
        age: '?????',
        home: '?????',
        url: 'assets/baby_yoda_icon.jpg',
        left: 'assets/baby_yoda_facing_left.png',
        right: 'assets/baby_yoda_facing_right.png',
        select: 'SELECT',
    },
    {
        identifier: 'babySpongeBob',
        name: 'Baby SpongeBob',
        gif: 'assets/baby_spongebob_stats.gif',
        age: 'Two Years Old',
        home: 'Bikini Bottom',
        url: 'assets/baby_spongebob.jpg',
        left: 'assets/baby_spongebob_facing_left.png',
        right: 'assets/baby_sponegbob_facing_right.png',
        select: 'SELECT',
    },
    {
        identifier: 'babyGroot',
        name: 'Baby Groot',
        gif: 'assets/baby_groot_stats.gif',
        age: 'Two Years Old',
        home: 'Planet X',
        url: 'assets/baby_groot_icon.jpg',
        left: 'assets/baby_groot_facing_left.png',
        right: 'assets/baby_groot_facing_right.png',
        select: 'SELECT',
    },
];

$('.start').click(function () {
    $('.startTitleScreen').hide();
    $('.characterSelect').removeClass('hidden');
});


const displayCharacters = (characters) => {
    // console.log(characters);
    for (let i = 0; i < characters.length; i++) {
        const characterContainer = $('<li>').addClass(characters[i].identifier);
        const characterName = $('<h3>').text(characters[i].name);
        const characterImage = $('<img>').attr('src', characters[i].url);
        const characterSelect = $('<button>').text(characters[i].select).attr('value', i);
        characterContainer.append(characterName, characterImage, characterSelect);
        $('.characters').append(characterContainer);
    }
}
const displayChosenCharacter = () => {
    $('button').on('click', function (event) {
        event.preventDefault();
        const buttonIndex = this.value;
        let userChoice = characters[buttonIndex];
        let cpuChoice = generateCPUCharact(characters);

        $('.characterStats').html(`
                <img src = "${userChoice.gif}"/>
                <p>Name: ${userChoice.name}</p>
                <p>Age: ${userChoice.age}</p>
                <p>Home: ${userChoice.home}</p>
                <button class="chosen">SELECT THIS CHARACTER</button>
                <button>BACK TO MAIN MENU </button>
                `)
        $('button').click(function () {
            $('.characterStats').toggle();
        });
        // on select this character:
        $('.chosen').click(function () {
            $('.characterSelect').hide();
            // hide character selection menu 
            $('.battleMode').removeClass('hidden');
            // display battle mode 
            // const userChoice = documents.getElementById(characters[i].identifier);
            // create user choice of character variable <- store index 
            // console.log(userChoice);
            // characterChoice info loaded into battle mode
        });
        $('.displayUser').html(`
            <img src="${userChoice.right}">
        `);
        $('.displayCpu').html(`
            <img src="${cpuChoice.left}">
        `)
    });
}
const generateCPUCharact = (characterSelect) => {
    let cpuIndex = Math.floor(Math.random() * (2 - 0 + 1));
    let cpuCharacter = characters[cpuIndex];
    return cpuCharacter;
}
const startBattle = (userChoice) => {
    $('.displayUser').html()
    console.log(userChoice);
}

    $('.startFight').on('click', function(){
        if (userChoice ===  characters[0] ){
            console.log('you win!');
        } 
    })


// create a random index 
// store random index in varaible (compChoice)
// load compChoice info 
//append button onto page (for fighting)
// event listener to fight button: 
// use if else statements ==> i.e. if name = baby yoda & name = spongebob then spongebob wins
// once theres a winner, the results will appear on the page 
// append one button (main menu)



// // 4. Create a simple "rock-paper-scissors" game. Prompt the user to enter their choice of "rock", "paper" or "scissors" and store this value in a variable. AAssume the computer always throws "rock" (we'll work on making this more dynamic later). If the user's input is "paper" then print to the console "You win!" If the input is "rock" then print "Tie!" and print "You lose!" if the user's input is "scissors". 
// let userInput = prompt("Choose rock, paper, or scissors.")
// if (userInput === "paper" || userInput === "Paper") {
//     console.log("You win!")
// } else if (userInput === "rock" || userInput === "Rock") {
//     console.log("Tie!")
// } else if (userInput === "scissors" || userInput === "Scissors") {
//     console.log("You lose!")
// }
const init = () => {
    displayCharacters(characters);
    userChoice = displayChosenCharacter()
    console.log(userChoice);
    startBattle(userChoice);
}
$(document).ready(init());