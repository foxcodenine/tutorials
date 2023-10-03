document.addEventListener("DOMContentLoaded", function () {
    class Game {
        constructor() {
            // Initialize the game by setting up event listeners
            this.buttonsContainer = document.getElementById("buttons");
            this.buttonsContainer.addEventListener("click", this.handleButtonClick.bind(this));
        }

        async handleButtonClick(event) {
            // Handle button click events

            // Find the closest button element to the clicked target
            const clickedButton = event.target.closest("button");

            if (clickedButton) {
                // Get the value from the button's dataset
                const choiceValue = Number(clickedButton.dataset.value);

                // Make an asynchronous request to the server to play the game
                const response = await fetch(`/play?c=${choiceValue}`);
                const responseData = await response.json();
                console.log('Server response:', responseData);

                // Map the choiceValue to a user-friendly string
                let userChoice;
                switch (choiceValue) {
                    case 0:
                        userChoice = "Player chose ROCK";
                        break;
                    case 1:
                        userChoice = "Player chose PAPER";
                        break;
                    case 2:
                        userChoice = "Player chose SCISSORS";
                        break;
                }

                // Update the user interface 
                document.getElementById('player_choice').innerHTML = userChoice;
                document.getElementById('computer_choice').innerHTML = responseData.computer_choice;
                document.getElementById('round_result').innerHTML = responseData.round_result;
                document.getElementById('round_message').innerHTML = responseData.round_message;

                
            }
        }
    }

    // Initialize the game when the DOM is loaded
    new Game();
});
