enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function doSomething(keyPressed: Direction) {
  // do something.
  if(keyPressed === Direction.Up) {
    console.log('Going up!');
  }
    if(keyPressed === Direction.Down) {
        console.log('Going down!');
    }
    if(keyPressed === Direction.Left) {
        console.log('Going left!');
    }
    if(keyPressed === Direction.Right) {
        console.log('Going right!');
    }
}

doSomething(Direction.Up);
