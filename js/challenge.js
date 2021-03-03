// /**
//  * Manipulate the DOM to increment the timer when the page has been loaded
//  * .addEventListener to to listen to when the page has been refreshed
//  * grab the element by id or D.queryS
//  * Timer's init start should be 0
//  * setInterval takes a function as an arg set the interval for 1000 ms
//  * Build func that does the work of incrementing the timer and pass back into setInterval
//  */


//As a user, I should see the timer increment every second once the page has loaded.

document.addEventListener("DOMContentLoaded", function() {
    const numCounter = document.getElementById('counter');
    let counter = 0
    setInterval((timer) => setTime(timer), 1000 );
  
    function setTime() {
        ++counter;
    numCounter.textContent = counter
    }
    
})


// //As a user, I can manually increment and decrement the counter using the plus and minus buttons.

function manualSet() {
    const increment = document.getElementById('plus');
    const decrement = document.getElementById('minus');
    const numCounter = document.getElementById('counter');

    increment.addEventListener('click', () => {
        numCounter.innerHTML ++
        //console.log(counter)
    })

    decrement.addEventListener('click', function() {
        if (numCounter.innerHTML > 0){
        numCounter.innerHTML -- 
        }
        //console.log('Nah, keep going')
    })

}
manualSet()


// //As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.

// //DOM Selectors
const likeBtn = document.querySelector('#heart')
const ul = document.querySelector('ul')
const numCounter = document.getElementById('counter');


//DOM Manipulation
const newLi = document.createElement('li')
newLi.textContent = `${parseInt(numCounter.innerHTML)} has been clicked 1 time.`


likeBtn.addEventListener('click', () => {
    ul.appendChild(newLi).innerHTML
    console.log("ikd")
})



