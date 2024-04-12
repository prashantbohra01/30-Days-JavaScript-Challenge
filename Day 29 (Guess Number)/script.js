   // Generate a random number between 1 and 100
   const randomNumber = Math.floor(Math.random() * 100) + 1;
   let attempts = 0;

   function checkGuess() {
       const guess = parseInt(document.getElementById('guess').value);
       const message = document.getElementById('message');

       if (isNaN(guess) || guess < 1 || guess > 100) {
           message.textContent = "Please enter a valid number between 1 and 100.";
           return;
       }

       attempts++;

       if (guess === randomNumber) {
           message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
           disableInput();
       } else if (guess < randomNumber) {
           message.textContent = "Too low! Try a higher number.";
       } else {
           message.textContent = "Too high! Try a lower number.";
       }
   }

   function disableInput() {
       document.getElementById('guess').disabled = true;
       document.querySelector('button').disabled = true;
   }