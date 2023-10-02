document.addEventListener("DOMContentLoaded", function() {
    class Play {
        constructor() {
            this.btns = document.getElementById("buttons");
            this.btns.addEventListener("click", this.choose.bind(this));
        }

        choose(e) {
            const targetButton = e.target.closest('button');
            if (targetButton) {
                const value = Number(targetButton.dataset.value);
                let x;
                switch (value) {
                    case 0:
                        x = "You clicked rock";
                        break;
                    case 1:
                        x = "You clicked paper";
                        break;
                    case 2:
                        x = "You clicked scissors";
                        break;
                }
                document.getElementById('player_choice').innerHTML = x;
            }
        }
    }

    new Play();
});