// /**
//  * Manipulate the DOM to increment the timer when the page has been loaded
//  * .addEventListener to to listen to when the page has been refreshed
//  * grab the element by id or D.queryS
//  * Timer's init start should be 0
//  * setInterval takes a function as an arg set the interval for 1000 ms
//  * Build func that does the work of incrementing the timer and pass back into setInterval
//  */


//As a user, I should see the timer increment every second once the page has loaded.

let myInterval = 0

document.addEventListener("DOMContentLoaded", setUpTimer)

function setUpTimer() {
    const numCounter = document.getElementById('counter');
    let counter = parseInt(numCounter.innerHTML)
    myInterval = setInterval((timer) => setTime(timer), 1000 );
  
    function setTime() {
        ++counter;
    numCounter.textContent = counter
    }
}


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


//As a user, I can 'like' an individual number of the counter. 
//I should see the count of the number of 'likes' associated with that number displayed.

// //DOM Selectors
const likeBtn = document.querySelector('#heart')
const ul = document.querySelector('ul')
const numCounter = document.getElementById('counter');


//DOM Manipulation
likeBtn.addEventListener('click', () => {
    const newLi = document.createElement('li')
    newLi.textContent = `${numCounter.innerHTML} has been clicked 1 time.`
    ul.appendChild(newLi).innerHTML
    console.log("Testing the click button")
})


// As a user, I can pause the counter, which should:

// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"

function BuildTimerStop() {
    const pauseBtn = document.getElementById("pause"); 

    pauseBtn.addEventListener("click", () => {
        //if pauseBtn = resume then I want to resume the timer
        //else pause the time
        const increment = document.getElementById('plus');
        increment.disabled = true;

        if (pauseBtn.innerHTML == "resume"){
            pauseBtn.innerHTML = "pause"
            setUpTimer();

            const increment = document.getElementById('plus');
            increment.disabled = false;

        }
        else {
            clearInterval(myInterval)
            pauseBtn.innerHTML = "resume"
        }
//debugger
        
        //const exampleAttr= increment.getAttribute('disabled');
        
        console.log("Still not working")
    })
 }
BuildTimerStop()

// function addComment(e){
//     e.target.comment.value
// }


let form = document.querySelector('#comment-form')
// btn = document.querySelector('#submit')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    console.log(e.target['new-comment'].value)
    let div = document.createElement('div')
    div.textContent = e.target.comment.value
    let commentsContainer = document.querySelector('.comments')
    commentsContainer.appendChild(div)

    // ul.appendChild(li);
    // comments.appendChild(ul)

    // li.textContent = "Hi"
}
//buildComment()




/**
 * 
 * Needed Assistance from 03-dom-and-events
 */
