document.getElementById('button').addEventListener('click', check)
let age = 0

const person = prompt('Please enter your name', "[NAME]");

if (person != null) {
  document.getElementById("demo").innerHTML =
  'Hello, ' + person + '! Welcome to this mini guessing game! If you can guess the age of my creator, you win... um... something! Yeah! Your hints are...'

  document.getElementById('demo2').innerHTML = 'This creator is 5'9. He's also still in school, the tenth grade.'
}

function check () {
  // Taking user input to display appropriate message
  
  while (age !== 15) {
    age = prompt ('Take a guess!')
    age = parseInt(age)
    } if (age > 15) {
   alert ('Nope, too high! You gotta try again.')
    } else if (age < 15) {
   alert ('Nope, too low! You gotta try again.')
    } else if (age === 15) {
    alert ('You got it right! Congratulations, you win... um... bragging rights! Yeah, that there is your prize!')
    }
  }
}
