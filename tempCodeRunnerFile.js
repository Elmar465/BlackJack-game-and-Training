let firstCard = getRandomCard()

// let secondCard = getRandomCard()

// let sum = firstCard + secondCard
// let hasBlackJack = false
// //* Write the conditional according to these rules:
// //* 1. Create a variable called isAlive and assign it to true
// let isAlive = true
// //* 1. Declare a variable called message and assign its value to an empty string
// let message = ""
// //*Creating array render out all the cards
// let cards = [firstCard, secondCard,] //* array - ordered list of items
// //* 2. Reassign the message variable to the string  we're logging out 
// message = "we're logging out"
// //* 2. Flip its value to false in the appropriate code block+

// //* if less than or equal to 20  -> "Do you want to draw a new card?"
// //* else if exactly 21 -> "Whoo! You've got Blackjack"
// //* else -> "You're out of the game!"

// //* 1. Store the message-el paragraph in a variable called message
// let messageEl = document.getElementById("message-el")
// // console.log(messageEl)
// //* 2. Store the sum paragraph in a variable called sumEl
// //let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector(".sum-el")
// //* 2.Store the cards paragraph in a variable called cardsEl
// let cardsEl = document.getElementById("cards-el")
// //* Log it out the check that you're doing it right
// console.log(isAlive)

// //* 3. Log it out !


// //* Create a function, getRandomCard(), that always returns the number 5
// function getRandomCard(){

//     return 5; 
// }

// //* Create a new fucntion called function startGame() that calls renderGame()
// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     //* 3. Render the sum on the  page using this format  -> "Sum:14"
//     if (sum <= 20) {
//         message = ("Do you want to draw new card ? ")
//     } else if (sum === 21) {
//         message = ("You've got the Blacjack! ")
//         hasBlackJack = true
//     } else {
//         message = ("You're out of the game! ")
//         isAlive = false
//     }
//     // console.log(message)
//     //* 2. Display the message in the messageEl using messageEl
//     messageEl.innerText = message
//     sumEl.innerText = "Sum: " + sum
//     //* Render the cards on  the page using this format -> "Cards: 10 4"
//     cardsEl.textContent = "Cards: " 

//     //* Creaete a loop that renders out all the cards instead of just two
//     for(let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }

// }


// function newCard() {

//     //* 1. Create a card variable, and hard code its value to a number (2-11)

//     //* 3. Use the getRandomCard() to set the value of card

//     let card = getRandomCard()
//     //* 2. Add the new card to the sum variable
//     sum += card
//     //* 3. Call startGame()
//     //* Push the card to the  cards array
//     cards.push(card)
//     renderGame()
// }   

