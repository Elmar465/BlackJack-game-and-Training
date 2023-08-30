//*1. Create two variables,firstCard and secondCard
//* Set their values to random number between 2 - 11

//* 2. Create a variable, sum, and set it to the sum of the two cards

// //* 2. Use getRandom() to set the values of firstCard and secondCard 
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let sum = firstCard + secondCard
let cards = []
let sum = 0 
let hasBlackJack = false
//* Write the conditional according to these rules:
//* 1. Create a variable called isAlive and assign it to true
let isAlive = false
//* 1. Declare a variable called message and assign its value to an empty string
let message = ""
//*Creating array render out all the cards
// let cards = [firstCard, secondCard,] //* array - ordered list of items
//* 2. Reassign the message variable to the string  we're logging out 
message = "we're logging out"
// * 2. Flip its value to false in the appropriate code block+

// * if less than or equal to 20  -> "Do you want to draw a new card?"
// * else if exactly 21 -> "Whoo! You've got Blackjack"
// * else -> "You're out of the game!"

// * 1. Store the message-el paragraph in a variable called message
let messageEl = document.getElementById("message-el")
// console.log(messageEl)
//* 2. Store the sum paragraph in a variable called sumEl
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")
//* 2.Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")
//* Log it out the check that you're doing it right
// console.log(isAlive)
// console.log(cards)

//*Object in JavaScripts
let player = {
     name:  "Elmar",
     chips:  145
}
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" +  player.chips
//* 3. Log it out !


//* Create a function, getRandomCard(), that always returns the number 5


//* Make this function return a random number between 1 and 13
function getRandomCard(){
    //* if 1   -> return 11
    //* if 11 - 13  return 10
    let randomCard =  Math.floor(Math.random() * 13) + 1
    if(randomCard > 10) {
        return 10
    }  else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
    return randomCard; 
}

//* Create a new fucntion called function startGame() that calls renderGame()
function startGame() {
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum =  firstCard + secondCard
    //* Generate two random numbers
    //* Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function renderGame() {
    //* 3. Render the sum on the  page using this format  -> "Sum:14"
    if (sum <= 20) {
        message = ("Do you want to draw new card ? ")
    } else if (sum === 21) {
        message = ("You've got the Blacjack! ")
        hasBlackJack = true
    } else {
        message = ("You're out of the game! ")
        isAlive = false
    }
    // console.log(message)
    //* 2. Display the message in the messageEl using messageEl
    messageEl.innerText = message
    sumEl.innerText = "Sum: " + sum
    //* Render the cards on  the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " 

    //* Creaete a loop that renders out all the cards instead of just two
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

}


function newCard() {

    //* 1. Create a card variable, and hard code its value to a number (2-11)

    //* 3. Use the getRandomCard() to set the value of card

    //* Only allow the player to get a new card if she isALive and does not have blackJack
    if(isAlive === true &&  hasBlackJack === false) {
        let card = getRandomCard()
        //* 2. Add the new card to the sum variable
        sum += card
        //* 3. Call startGame()
        //* Push the card to the  cards array
        cards.push(card)
        renderGame()
    } 

}   





//! burdan yuxari acarsan






// console.log(4 === 3) //* false
// console.log(5 > 2) //*  true
// console.log(12 > 12) //* false
// console.log(3 < 0) //* false
// console.log(3 >= 3) //* true
// console.log(11 <= 11) //* true
// console.log(3 <= 2) //* false




//*! CASH OUT!

// if (sum < 21) {
//     console.log("Do you want to draw new card ? 😀")
// } else if (sum ==  21) {
//     console.log("Whoo You've got the Blacjack! 🤩")
// } else   {
//     console.log("You're out of the game! 😭")
// }


//* Check if the person is old enough to enter the nightclub (21)
//* Log a suitable message to the console in both cases

// let age1 = 21

// //* if less than 21 -> "You can not enter the club!"

// //* else            -> "Welcome"

// if (age1 <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome")
// }

// //* Check if the person is eligible for a birthday card from the King! (100)


// let age = 101

// //* if less 100   -> "Not elegible"
// //* else if exactly 100 -> "Here is your birthday card from the King"
// //* else                -> "Not eligible, you have already gotten one"


// if(age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your birtday card from the King!") 
// } else {
//     console.log("Not elegible, you have already gotten one")
// }

//* Array - ordered lists of items

// let featuredPosts = ["Check out my netflix", "Here is code for my project", "I've just relaunched my portfolio"]

// console.log(featuredPosts)

//* Create an array that lists your i.e experience, education, license, skills, or similar
// let aboutMe = ["Expreience:Web Developer, Mobile Application Developer,Bac End Develoer",
//                 "Education: Bachelor degree",
//                     "Skilss:HTML/CSS,JAVASCRIPT,FLUTTER,DART,C,C++,GIT,GITHUB"]


// //* The items of the array should be string
// for(let i = 0; i < aboutMe.length; i +=1){
//     console.log(aboutMe[i])
// }
//! DRY - Dry Don't repeat yourself
// console.log(aboutMe[0])
// console.log(aboutMe[1])
// console.log(aboutMe[2])

//* Push the newMessage to the message array and then log out the array
// let newMessage  = "Same here"

// aboutMe.push(newMessage)
// console.log(aboutMe)

// //* How can you remove the last them in an array? Try to google it 
// aboutMe.pop()
// console.log(aboutMe)

//* Array - ordered list of items - coposite /complex data type

//* Create an array that describes yourself.Use the three primitive  data types you've learned
//* It should contain your name (string), your age (number), and weather you like pizza (boolean)

// let abMe = ["Name:ELmar", "Age: 28" , false]

// console.log(abMe[0])
// console.log(abMe[1])
// console.log(abMe[2])


// let cards = [7,4]

// cards.push(6)

// console.log(cards)


//* Count to ten

//* We need to specify...

//* Where should we Start counting?
//* Where is the Finish line?
//* What's the step STEP SIZE we should use?

//*   Start          Finish     Step Size
// for(let count = 10; count < 21; count +=1) {
//     console.log(count)
// }   

//* Create a for loop that counts from 10 to 100 in steps 10
// for(let count = 10; count < 101; count += 10) {
//     console.log(count)
// }
//* Use console.log() to log out 


// let cards = [7,3 ,9]x

//* Create a for loop that logs out all the cards in the array
//* Use cards.length to specify how long the loop should run
// for(let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// } 



// let sentence = ["Hello", "my", "name", "is", "Elmar"]
// let greetingEl = document.getElementById("greeting-el")

// //*Render the sentence in the greetingEL paragraph using a for loop and, textContent

// for(let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// } 

// let player1Time = 102
// let player2Time = 107

// //* to change same data types cmd +d , for windows ctrl + d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {

//         return   player1Time
//     } else if (player1Time > player2Time) {

//         return  player2Time
//         } else {
//             return  player1Time
//     }
// }

// // let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

//* Write a function that returns the total race time
//* Call/invoke the function and store the returned value in a new variable 
//* FInally, log the variable out

// function gettotalRaceTime(){

//     return player1Time + player2Time
// }
// let totalRaceTime = gettotalRaceTime()
// console.log(totalRaceTime)


//* Math in JavaScript

// let randomNumber =  Math.random() * 6

// console.log(randomNumber)


/* 
    What does Math.random() do

   //* Your answer: It generates a random number between 0 and 1 (not includes of 1)
*/

/* 
    //*  In which range will our randomNumber be now ?


    //* From : 0
    
    //* To : 5.999
*/

//* Math.random() in JavaScript

// let floorNumber = Math.floor(3.45632)

// console.log(floorNumber)

/* 
   //*  What Math.floor() do to positive numbers ?


   //* Your answer : It gives direct numbers and removes decimals 
*/

//* Try to modify the expression so that we get a range from 1 to 6
// let randomNumber  = Math.floor(Math.random() * 6)  + 1

// console.log(randomNumber)


/* 
    //* Write down all the posibile values randomNumber can hold now!
    //* From 0  to 5
*/

//* Create a function, rollDice() that returns a random between 1 and 6
// function rollDice() {

//     let randomDice =  Math.floor(Math.random() * 6) + 1

//     return randomDice
// }
// console.log(rollDice())


// * Logical operators

// let hasComplete = true
// let givesCertificate = true


//* Nesting if/else statement 
// if(hasComplete === true && givesCertificate === true) {
//     // if(givesCertificate == true) {
//     //     generateCertificate()
//     // }
// }
// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// console.log(generateCertificate())

// let hasSolveChallange = false
// let hasHintLeft = false

//* Create an if statement  that checks that both variables are false.
//* If so, run the showSolution() function

// if(hasSolveChallange === false && hasHintLeft == false) {
//     showSolution()
// }
// function showSolution() {
//     console.log("Showing the solution...")
// }

//* Create two booleans variables, likeDocumentries and likesStartups 
//* Use an OR statement (||) to call recommendMovie() if either of those variables are true

// let likeDocumentries = true
// let likesStartups = false

// if(likeDocumentries ==  true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey , check out this new film we think you will like")
// }

//* Objects - store data in-depth - composite / complex data type
//* key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree : true,
//     tags: ["HTML", "CSS"]
// }

// console.log(course["tags"])

//* Create an object that represent an aitbnb castle listing
//* It should contain at least one boolean, one string one number, and one array
//* Log out at least two of the keys using the dot notation

// let castleInfo = {
//         name: "Sotadel",
//         price: 1312313,
//         isOnSale: true,
//         tags: ["Northern Side", "200 years olds"],
// }
//     console.log(castleInfo.name)
//     console.log(castleInfo["price"])
