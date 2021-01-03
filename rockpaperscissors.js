const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()

  output = userInput === 'rock' ? userInput : userInput === 'paper' ? userInput : userInput === 'scissors' ? userInput : console.log('Error, please enter rock, paper or scissors.')
  return output
}

const getComputerChoice = () => {
  let choice = Math.floor(Math.random()*3)

  return choice === 0 ? 'rock' : choice === 1 ? 'paper' : choice === 2 ? 'scissors' : console.log('Unknown Error') 
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie!'
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lose!'
    } else {
      return 'You win!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You lose!'
    } else {
      return 'You win!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You lose!'
    } else {
      return 'You win!'
    }
  }
}

const choice = 'paper' // User choice

const playGame = () => {
  const userChoice = getUserChoice(choice)
  const computerChoice = getComputerChoice()

  console.log(`User chose: ${userChoice}`)
  console.log(`Computer chose: ${computerChoice}`)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()