let STRING_ARRAY_POSITION = 0; // text string array positon
let FONTSIZE;
let FONTFAMILY;
let LINEHEIGHT;
let WORDS;
let CANVAS;
let CTX;
export function paginate(stringToPaginate, lineHeight = 25, fontSize = 16, fontFamily = "Helvetica") {
    LINEHEIGHT = lineHeight;
    FONTSIZE = fontSize;
    FONTFAMILY = fontFamily;
    WORDS = stringToPaginate.split(" "); // the text to be paginated
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    const canvas = document.getElementById("paginate");
    if (!canvas)
        throw new Error("Canvas element not found.");
    const ctx = canvas.getContext("2d");
    if (!ctx)
        throw new Error("2D rendering context not supported.");
    // Make canvas width and height adapt to canvas container
    canvas.style.width = "100%"; // Or any desired percentage
    canvas.style.height = "100%"; // Or any desired percentage
    // Set the canvas resolution to match the displayed size (optional)
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    // Set font style and size
    ctx.font = `${FONTSIZE}px ${FONTFAMILY}`;
    CANVAS = canvas;
    CTX = ctx;
    calculatePageText(STRING_ARRAY_POSITION);
}
function calculatePageText(newPosition) {
    // Clear the entire canvas when creating new page
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    // Define the maximum width of each line
    const maxWidth = CANVAS.width - 10;
    // Define the starting position
    let x = 10;
    let y = 15;
    // slice the string array to contain texts that havent been displayed
    let modWords = WORDS.slice(newPosition);
    let line = "";
    for (const word of modWords) {
        const testLine = line + (line === "" ? "" : " ") + word;
        const testLineMetrics = CTX.measureText(testLine);
        // console.log('text line', testLine)
        if (testLineMetrics.width <= maxWidth) {
            line = testLine;
        }
        else {
            // Check if the new line exceeds the canvas height
            if (y + LINEHEIGHT > CANVAS.height) {
                // Text has reached the end of the canvas
                console.log("Text has reached the end of the canvas.");
                break;
            }
            CTX.fillText(line, x, y); // Draw the line
            y += LINEHEIGHT; // Adjust the line height as needed
            line = word; // Start a new line
        }
        STRING_ARRAY_POSITION++;
    }
    // Draw the last line
    CTX.fillText(line, x, y);
}
export const loadNext = () => {
    calculatePageText(STRING_ARRAY_POSITION);
};

export function updateFontSize(newSize) {
  FONTSIZE = Number(newSize);
  CTX.font = CTX.font.replace(/\d+px/, `${newSize}px`);
  calculatePageText(0);
}

export function updateLineHeight(newHeight) {
  LINEHEIGHT = Number(newHeight);
  calculatePageText(0);
}