const messages = document.getElementById('message');
let count = 0;
const name = prompt("Enter name: ");
const messagesHub = [
  "You are amazing!",
  "Keep shining, star!",
  "You light up the room.",
  "You’re a treasure to everyone around you.",
  "Your smile is contagious.",
  "You inspire me every day.",
  "You are loved beyond measure.",
  "You’re a gift to the world.",
  "You’re stronger than you think.",
  "You make life so much better!",
  "You are unique and beautiful.",
  "Your kindness touches everyone.",
  "You bring joy to all.",
  "Your laughter is music to my ears.",
  "You are unstoppable.",
  "The world is better with you in it.",
  "You have a heart of gold.",
  "Your strength is unmatched.",
  "You are a blessing to all.",
  "You are my inspiration."
];

function showNextMessage() {
    if (count < messagesHub.length) {
        messages.style.fontFamily = "'Sofia', sans-serif"; // Apply font for all messages
        const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        
        // Update the message
        if (count === 0) {
            messages.textContent = "Welcome to my world " + capitalized + " ‧°𐐪♡𐑂°‧";
        } else {
            messages.textContent = messagesHub[count]; // Show message from the array
        }

        count++; // Increase count to move to the next message
    } else {
        messages.textContent = "You've seen all the messages!"; // Once all messages are shown
    }
}
