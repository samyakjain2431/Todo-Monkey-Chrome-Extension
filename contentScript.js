// console.log("I'm from content script but you find me in the webpage inspect");

// // Define the element outside the message listener to ensure it's not re-created on each message
// let myDiv = document.createElement('p');
// myDiv.id = 'myp';

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log("Receiving request: ", request);

//   if (request === true && !document.contains(myDiv)) {
//     // Set the content and styles only if the element doesn't exist
//     myDiv.textContent = "I'm injected in the webpage only when the message is true";
//     myDiv.style.position = 'fixed';
//     myDiv.style.top = '100px';
//     myDiv.style.left = '30px';

//     console.log("Creating");
//     document.body.appendChild(myDiv);
//   } else if (request === false && document.contains(myDiv)) {
//     console.log("Removing the element");
//     myDiv.remove();
//   }
// });
