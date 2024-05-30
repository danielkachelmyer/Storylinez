/*
Step 1.1: Design Tracking Pixels and Tracker Scripts
Task: Develop lightweight JavaScript tracking codes.
Details:
Tracking Pixel: A 1x1 transparent image that logs an event when loaded.
Tracker Script: JavaScript snippets that collect data on page load and 
user interactions.
URL Parameters: Use UTM parameters (source, medium, campaign) 
to track campaign performance.
Step 1.2: Embed Pixels and Scripts
Task: Create documentation and templates for clients to embed pixels 
and scripts.
Details:
Provide easy-to-follow instructions for various platforms (websites, emails, ads).
Ensure compatibility with major content management systems (WordPress, Shopify).
*/

//test how many times a buttoned has been clicked***

const buttonClicked = document.getElementById("clicks");
const numClicksP = document.getElementById("numClicks");
let numClicks = 0;

buttonClicked.addEventListener("click", event =>{
    numClicks++;
    numClicksP.textContent = numClicks;
});

//how long a user is on the webpage***


// Function to update time counter every second
function updateTimeCounter() {
    // Get the current time in seconds
    let currentTime = Math.floor(Date.now() / 1000);
    // Calculate the time difference between current time and page load time
    let timeElapsed = currentTime - pageLoadTime;
    // Update the time counter element
    document.getElementById("timeCounter").textContent = timeElapsed + " seconds";
}

// Store the time when the page is loaded
let pageLoadTime = Math.floor(Date.now() / 1000);

// Update time counter every second
setInterval(updateTimeCounter, 1000);


//did a user hover over a button***

const hoverButton = document.getElementById("hoverButton");
const numHoverP = document.getElementById("numHover");
let numHover = 0;

hoverButton.addEventListener("mouseover", event => {
    numHover++;
    numHoverP.textContent = numHover;
})

//Did user go to another web page

const newPage = document.getElementById("newPage");
console.log(newPage);