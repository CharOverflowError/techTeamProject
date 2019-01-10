var screenWidth;
var screenHeight;
var boxWidth;
var boxMarginLeft;
var boxMarginTop;
var redSquare;
var boxPressed;
var boxClickX;
var boxClickY;

document.addEventListener("turbolinks:load", function () {
  screenWidth = screen.availWidth;
  screenHeight = screen.availHeight;
  boxWidth = screenWidth/8;
  boxMarginLeft = (screenWidth - boxWidth) / 2;
  boxMarginTop = (screenHeight - boxWidth) / 2;


  redSquare = document.getElementById("redSquare");
  if (redSquare) {
  	redSquare.style.width           = boxWidth   + "px";
	  redSquare.style.height          = boxWidth   + "px";

	  changeBoxMargin(boxMarginLeft, boxMarginTop);

	  // Setup dragging for the boxMarginLeft
	  document.onmousemove = handleMouseMove;
	  document.onmouseup   = handleBoxMouseUp;  // Adress case where users mouse will not end on box
	  boxPressed = false;
	  boxClickX = 0;
	  boxClickY = 0;
  }
});

// Change position of box
function changeBoxMargin (leftMargin, topMargin) {
  redSquare.style.marginLeft      = leftMargin + "px";
  redSquare.style.marginTop       = topMargin  + "px";
}

// Get new box margins and strip excess characters
function updateBox () {
  boxMarginLeft = parseInt(redSquare.style.marginLeft, "10");
  boxMarginTop  = parseInt(redSquare.style.marginTop, "10");
}

function handleMouseMove (event) {
  x = event.pageX;
  y = event.pageY;
  
  if (boxPressed) {
    // Find value where box was clicked
    if (boxClickX === 0 && boxClickY === 0) {
      boxClickX = x;
      boxClickY = y;
    }
    
    var newBoxMarginLeft = boxMarginLeft + (x-boxClickX);
    var newBoxMarginTop = boxMarginTop + (y-boxClickY);
    changeBoxMargin(newBoxMarginLeft, newBoxMarginTop);
  }
}

function handleBoxMouseDown (event) {
  boxPressed = true;
}

function handleBoxMouseUp (event) {
  if (boxPressed) {
    boxPressed = false;

    // Reset click values for next click
    boxClickX = 0;
    boxClickY = 0;
    
    // Update box margins
    updateBox();
  }
}
