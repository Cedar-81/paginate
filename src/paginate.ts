let STRING_ARRAY_POSITION: number = 0; // text string array positon
let FONTSIZE: number;
let FONTFAMILY: string;
let LINEHEIGHT: number;
let TEXTCOLOR: string;
let WORDS: Array<string>;
let CANVAS: HTMLCanvasElement;
let CTX: CanvasRenderingContext2D;

export function paginate(
  stringToPaginate: string,
  lineHeight: number = 25,
  fontSize: number = 16,
  fontFamily: string = "Helvetica",
  textColor: string = "#a6adba"
) {
  LINEHEIGHT = lineHeight;
  FONTSIZE = fontSize;
  FONTFAMILY = fontFamily;
  TEXTCOLOR = textColor;

  WORDS = stringToPaginate.split(" "); // the text to be paginated

  const nextButton: HTMLButtonElement | null = document.getElementById(
    "next"
  ) as HTMLButtonElement;
  const prevButton: HTMLButtonElement | null = document.getElementById(
    "prev"
  ) as HTMLButtonElement;
  const canvas: HTMLCanvasElement | null = document.getElementById(
    "paginate"
  ) as HTMLCanvasElement;
  if (!canvas) throw new Error("Canvas element not found.");

  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
  if (!ctx) throw new Error("2D rendering context not supported.");

  // Make canvas width and height adapt to canvas container
  canvas.style.width = "100%"; // Or any desired percentage
  canvas.style.height = "100%"; // Or any desired percentage

  // Set the canvas resolution to match the displayed size (optional)
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  // Set font style
  ctx.fillStyle = TEXTCOLOR;
  ctx.font = `${FONTSIZE}px ${FONTFAMILY}`;

  CANVAS = canvas;
  CTX = ctx;

  calculatePageText(STRING_ARRAY_POSITION);
}

function calculatePageText(newPosition: number) {
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
    } else {
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
