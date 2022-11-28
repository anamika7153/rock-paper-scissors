const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const board = document.querySelector('#board')

const handler = (event) => {
    const action = event.target.id;

    switch(action) {
        case "rock" :
            board.innerHTML = "Rock crushes scissors";
            break;
        case "paper" :
            board.innerHTML = "Paper traps Rock";
            break;
        case "scissors" :
            board.innerHTML = "Scissors cuts Paper";
            break;
        default :
            board.innerHTML = "Click something";
    }
}

rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissors.addEventListener('click', handler)

