// Generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Initialize the game
const targetNumber = getRandomNumber(1, 10);
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);

    // Check if the input is a valid number
    if (isNaN(guess)) {
        setMessage("Please enter a valid number.");
        return;
    }

    // Increment the number of attempts
    attempts++;

    // Compare the guess with the target number
    if (guess === targetNumber) {
        // Guessed correctly
        // setMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        
        setMessage("You Win");
        
        
        //if we don't want to disable input button;

        disableInputAndButton();
    } 
    else if (guess < targetNumber) {
        // Guessed too low
        setMessage(" Correct answer is greater!");
    }
    else {
        // Guessed too high
        setMessage("Correct answer is smaller!");
    }

    // Clear the input field after each guess
    guessInput.value = "";
}

// Helper function to set the message
function setMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}

// Helper function to disable the input and button after correct guess
function disableInputAndButton() {
    const guessInput = document.getElementById("guessInput");
    const submitButton = document.querySelector("button");
    guessInput.disabled = true;
    submitButton.disabled = true;
}