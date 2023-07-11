// // callback function
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.appendChild(script);
// }

// loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js', (script) => {
//   console.log('script is loaded',loadScript);
// });

// Create a new paragraph element
const paragraph = document.createElement('script');

// Set the text content of the paragraph
paragraph.textContent = 'Hello, World!';

// Append the paragraph to the body of the document
// document.body.appendChild(paragraph);
// document.body.remove(paragraph);
document.body.append(paragraph);
