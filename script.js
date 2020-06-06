
    // → User is sent to a menu to select “character” displayed on a six grid menu(with some CSS styling, hover effects with mouse, and more)
    
    
    // → Each “character” is stored in an object. Each object will hold information containing their name and their image

    let chosenCharacter;

    
    const characters = [
    
        {
            identifier: 'babyYoda',
            name: 'Baby Yoda',
            age: '?????',
            home: '?????',
            url: 'assets/baby_yoda_icon.jpg',
            select: 'SELECT',
            
        },            
        {
            identifier:'babySpongeBob',
            name: 'Baby SpongeBob',
            age: 'Two Years Old',
            home: 'Bikini Bottom',
            url: 'assets/baby_spongebob.jpg',
            select: 'SELECT',
        },
        {
            identifier: 'babyGroot',
            name: 'Baby Groot',
            age: 'Two Years Old',
            home: 'Planet X',
            url: 'assets/baby_groot_icon.jpg',
            select: 'SELECT',
        },

    ]  
    
$(function(){

    const characterSelectArray = characters.filter((character) => {
        return character.url && character.name;
    }) 

    const displayCharacters = (characters) => {



        for (let i = 0; i < characters.length; i++) {
            const characterContainer = $('<li>').addClass(characters[i].identifier);
            const characterName = $('<h2>').text(characters[i].name);
            const characterImage = $('<img>').attr('src', characters[i].url);
            const characterSelect = $('<button>').text(characters[i].select).attr('value', i);

            characterContainer.append(characterName, characterImage, characterSelect);

            $('.characters').append(characterContainer);

        }


    }

    displayCharacters(characterSelectArray); 
        

    $('button').on('click', function(event){
        event.preventDefault(); 
        const buttonIndex = this.value;

        for (let info in characters[buttonIndex]) {

        }   
       

        $('.characterStats').html(`
            <img src = "${characters[buttonIndex].url}"/>
            <p>Name: ${characters[buttonIndex].name}</p>
            <p>Age: ${characters[buttonIndex].age}</p>
            <p>Home: ${characters[buttonIndex].home}</p>
                <button class="chosen">SELECT THIS CHARACTER</button>
                <button>BACK TO MAIN MENU </button>
        `)
        
        $('button').click(function () {
                $('.characterStats').toggle(); 
                
                
                
            }); 
            
            $('.chosen').click(function () {
                $(this).data('clicked', true)
                $('.characterSelect').hide();
                $('.battleMode').removeClass('hidden')
        });

    
    });


});





        // on select this character:
                // mainMenuSection to hide 
                // display battle mode 

        // $('.characterSelect').addClass('hidden')
        // $('.battleMode').removeClass('hidden')

                // create characterChoice variable <- store index 
                // characterChoice info loaded into battle mode
                // create a random index 
                // store random index in varaible (compChoice)
                // load compChoice info 
                //append button onto page (for fighting)
            
        
        // event listener to fight button: 
                // use if else statements ==> i.e. if name = baby yoda & name = spongebob then spongebob wins
                // once theres a winner, the results will appear on the page 
                // append one button (main menu)