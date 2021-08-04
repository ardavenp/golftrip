function dragStart( event, chosenClass ) {
  // console.log("DRAG START");
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData( 'text', event.target.id );
  event.target.classList.add( "draggable--active" );
}

function dragOver( event ) {
  // console.log( 'DRAG OVER' );
  event.preventDefault();
  event.dataTransfer.effectAllowed = 'move';
  event.target.closest( ".drop-zone" ).classList.add( "drop-zone--active" );
}

function dragLeave( event ) {
  // console.log( "DRAG LEAVE" );
  event.target.classList.remove( "drop-zone--active" );
}

function dragDrop( event ) {
  // console.log( 'DROP' );

  event.target.closest( ".drop-zone" ).append( document.getElementById( event.dataTransfer.getData( 'text' ) ) )

  document.getElementsByClassName( "draggable--active" )[0].classList.remove( "draggable--active" );

  if ( document.getElementsByClassName( "drop-zone--active" )[0] ) {
    document.getElementsByClassName( "drop-zone--active" )[0].classList.remove("drop-zone--active" );
  }

  event.preventDefault();

}

function dragEnd( event ) {

  // event.preventDefault();

  console.log( 'DRAG END' );
  
  document.getElementsByClassName( "console" )[0].innerHTML = "<h4>CONSOLE: DRAG END</h4>";
  
  timeDelay();
  
  // remove applied active classes, regardless of where released.
  if ( document.getElementsByClassName( "draggable--active" )[0] ) {
    document.getElementsByClassName( "draggable--active" )[0].classList.remove( "draggable--active" );
  }
  if ( document.getElementsByClassName( "dropzone--active" )[0] ) {
    document.getElementsByClassName( "dropzone--active" )[0].classList.remove( "dropzone--active" );
  }

}

// dragenter listener
function dragEnter( event ) {
	 event.preventDefault();
}

// UTILITY FUNCTIONS
function timeDelay() {
  timeoutID = window.setTimeout(clearConsole, 2000);
}

function clearConsole() {
  document.getElementsByClassName( "console" )[0].innerHTML = "<h4>CONSOLE:</h4>";
}