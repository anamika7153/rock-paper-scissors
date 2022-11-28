const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const handler = (event) => {
    const action = event.target.id;
    if(action === 'rock') {
        console.log("Rock crushes scissors")
    } else if(action === 'paper') {
        console.log("Paper traps Rock")
    } else if(action === 'scissors') {
        console.log("Scissors cuts Paper")
    } else {
        console.log("Click something")
    }
}

rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissors.addEventListener('click', handler)

