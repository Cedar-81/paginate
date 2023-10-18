let my_string = `
  <h1>Lobortis</h1>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod. Facilisis gravida neque convallis a cras semper auctor. Vitae congue eu consequat ac felis donec et odio. Ut ornare lectus sit amet. Nulla aliquet enim tortor at auctor urna nunc. Id eu nisl nunc mi. Scelerisque viverra mauris in aliquam sem. Auctor elit sed vulputate mi sit amet mauris commodo. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Velit euismod in pellentesque massa placerat duis ultricies. Iaculis urna id volutpat lacus laoreet.

Eget sit amet tellus cras. Amet nisl purus in mollis nunc sed id semper. Sit amet nulla facilisi morbi tempus. At augue eget arcu dictum. Massa tempor nec feugiat nisl pretium fusce id velit. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Cursus metus aliquam eleifend mi in nulla posuere. Turpis cursus in hac habitasse platea dictumst quisque. Commodo sed egestas egestas fringilla phasellus. Lectus nulla at volutpat diam ut. Tellus rutrum tellus pellentesque eu tincidunt tortor. Quis viverra nibh cras pulvinar mattis nunc sed.

Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Turpis cursus in hac habitasse platea. Adipiscing elit ut aliquam purus. Velit dignissim sodales ut eu sem integer vitae justo eget. Cursus risus at ultrices mi tempus imperdiet nulla. Sed faucibus turpis in eu mi bibendum. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Eget mauris pharetra et ultrices neque ornare. Nibh venenatis cras sed felis. Mus mauris vitae ultricies leo integer malesuada nunc vel. Ut enim blandit volutpat maecenas. Commodo ullamcorper a lacus vestibulum sed arcu non odio.

Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Neque ornare aenean euismod elementum nisi quis. Lacus sed viverra tellus in hac habitasse platea dictumst. Ut placerat orci nulla pellentesque dignissim enim sit amet. Erat velit scelerisque in dictum non consectetur a. Euismod elementum nisi quis eleifend quam. Vitae aliquet nec ullamcorper sit amet risus nullam. Ullamcorper morbi tincidunt ornare massa eget. Aenean pharetra magna ac placerat. Ipsum nunc aliquet bibendum enim facilisis. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Tristique risus nec feugiat in fermentum posuere urna. Congue nisi vitae suscipit tellus mauris a diam. Habitant morbi tristique senectus et netus et. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Sit amet nisl purus in mollis. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa massa ultricies mi quis.

Fermentum dui faucibus in ornare quam viverra orci sagittis. Et molestie ac feugiat sed. Id velit ut tortor pretium viverra suspendisse potenti. In ante metus dictum at tempor commodo. Vitae turpis massa sed elementum tempus. Tortor at auctor urna nunc id cursus metus. Vitae elementum curabitur vitae nunc sed velit. Augue interdum velit euismod in pellentesque massa placerat. Eget arcu dictum varius duis. Dignissim convallis aenean et tortor at risus viverra adipiscing. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Faucibus turpis in eu mi bibendum neque. Pellentesque pulvinar pellentesque habitant morbi. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Suspendisse ultrices gravida dictum fusce ut. Pharetra vel turpis nunc eget lorem dolor. Ut consequat semper viverra nam. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Bibendum neque egestas congue quisque egestas diam in arcu cursus.


`;


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Split the text into words
const words = my_string.split(" ");
let wordPosition = 0;
let prevPosition = 0;

canvas.style.width = "100%"; // Or any desired percentage
canvas.style.height = "100%"; // Or any desired percentage

// Set the canvas resolution to match the displayed size (optional)
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let lineHeight = 25
let fontSize = 16
let fontFamily = 'Helvetica'
let pages = []
let pageCounter = 0

console.log(canvas.width, canvas.height)

const showWord = (newPosition, type) => {
  pages[pageCounter] = newPosition
  pageCounter++
  if (pages.length == 3) {
    pageCounter = 0
  }

  console.log('position', newPosition, pages, pageCounter)

  if (newPosition > words.length) {
    nextButton.disabled = true
  }

  // Clear the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = false;

  // Set font style and size
  ctx.font = `${fontSize}px ${fontFamily}`;

  // Define the maximum width of each line
  const maxWidth = canvas.width - 10;

  // Define the starting position
  let x = 10;
  let y = 15;

  let modWords = words.slice(newPosition);
  console.log('modWords: ', modWords)

  let line = "";



  for (const word of modWords) {
    const testLine = line + (line === "" ? "" : " ") + word;
    const testLineMetrics = ctx.measureText(testLine);

    // console.log('text line', testLine)

    if (testLineMetrics.width <= maxWidth) {
      line = testLine;
    } else {
      // Check if the new line exceeds the canvas height
      if (y + lineHeight > canvas.height) {
        // Text has reached the end of the canvas
        console.log(
          "Text has reached the end of the canvas.",
        );
        break;
      }

      ctx.fillText(line, x, y); // Draw the line
      y += lineHeight; // Adjust the line height as needed
      line = word; // Start a new line
    }

    wordPosition++;
  }

  // Draw the last line
  ctx.fillText(line, x, y);
};


// Add a click event listener to the button
nextButton.addEventListener("click", function () {
  // Code to execute when the button is clicked
  showWord(wordPosition); // Example: Show an alert
});

// Add a click event listener to the button
prevButton.addEventListener("click", function () {
  // Code to execute when the button is clicked
  pageCounter--
  wordPosition = pages[-1]
  showWord(pages[0]); // Example: Show an alert
});