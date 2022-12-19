// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const textDisplay = document.getElementById('text')
const phrases = [ ' I am  a : ' , 'UX / UI Developer ' , '  Graphic Designer , ' , '  and Photographer . ']

let i = 0
let j = 0
let currentPhrase = []
let isDeleting =false
let isEND = false

function loop ( ) {
  isEND = false
  textDisplay.innerHTML = currentPhrase.join('')

if (i < phrases.length ) {
  
  if( ! isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases [i] [j])
    j++
    
  }

  if (isDeleting && j<= phrases[i].length){
    currentPhrase.pop(phrases[i][j])
    j--
    
  }

  if (j == phrases [i] . length) {
    isEND =true
   isDeleting=true
  }

  if ( isDeleting && j === 0){
    currentPhrase = []
    isDeleting = false
    i++

    if (i == phrases.length) {
      i = 0
    }
  }

  const spedUp = Math.random() * ( 80-50) +50
   const normalSpeed = Math.random() * (300 -200) + 200
   const deleteSpeed = Math.random() *(80-50) +50
   const time = isEND ? 1500 : isDeleting ? spedUp : normalSpeed
   setTimeout (loop, time)
}


}
loop ( )