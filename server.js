var five = require("johnny-five");
var board = new five.Board();
const cors = require('cors');
const app = require('express')();
app.use(cors());

board.on("ready", function() {
  this.pinMode(7, this.MODES.OUTPUT);
  this.digitalWrite(7, 1);

  const servoBase  = new five.Servo(10);
  const servoHand  = new five.Servo(12);
  const leftElbow  = new five.Servo(11);
  const rightElbow = new five.Servo(13);

  // Servo alternate constructor with options
  /*
  var servo = new five.Servo({
    id: "MyServo",     // User defined id
    pin: 10,           // Which pin is it attached to?
    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
    range: [0,180],    // Default: 0-180
    fps: 100,          // Used to calculate rate of movement between positions
    invert: false,     // Invert all specified positions
    startAt: 90,       // Immediately move to a degree
    center: true,      // overrides startAt if true and moves the servo to the center of the range
  });
  

  // Add servo to REPL (optional)
  this.repl.inject({
    servo: servo
  });
  */

  // Servo API

  // min()
  //
  // set the servo to the minimum degrees
  // defaults to 0
  //
  // eg. servo.min();

  // max()
  //
  // set the servo to the maximum degrees
  // defaults to 180
  //
  // eg. servo.max();

  // center()
  //
  // centers the servo to 90°
  //
  // servo.center();

  // to( deg )
  //
  // Moves the servo to position by degrees
  //
  // servo.to( 90 );

  // step( deg )
  //
  // step all servos by deg
  //
  // eg. array.step( -20 );
  app.get('/base/precise', (req, res)=>{//isso é muito chato
    const position = req.query.position;
    servoBase.to(position);
    return res.status(200).json('base moved to '+position);
  })

  app.get('/base/left', (req, res)=>{
    servoBase.max();
    return res.status(200).json('moved 180');
  })

  app.get('/base/right', (req, res)=>{//caramba
    servoBase.min();
    return res.status(200).json('moved 0');
  })

  app.get('/hand/close', (req, res)=>{
    servoHand.to(180);
    return res.status(200).json('Hand get');
  })

  app.get('/hand/open', (req, res)=>{//vsf k
    servoHand.to(70);
    return res.status(200).json('Hand open');
  })

  app.get('/elbow/left/up', (req, res)=>{
    leftElbow.min();
    return res.status(200).json('Left elbow up');
  })

  app.get('/elbow/left/down', (req, res)=>{
    leftElbow.max();
    return res.status(200).json('Left elbow down');
  })

  app.get('/elbow/left/precise', (req, res)=>{
    const position = req.query.position;
    leftElbow.to(position);
    return res.status(200).json('Elbow left moved to '+position);
  })

  app.get('/elbow/right/up', (req, res)=>{
    rightElbow.min();
    return res.status(200).json('Right elbow up');
  })

  app.get('/elbow/right/down', (req, res)=>{
    rightElbow.max();
    return res.status(200).json('Right elbow down');
  })

  app.get('/elbow/right/precise', (req, res)=>{
    const position = req.query.position;
    rightElbow.to(position);
    return res.status(200).json('Elbow right moved to '+position);
  })



});

app.listen(3000, ()=>{
  console.log('Linstenning on port 3000');
})