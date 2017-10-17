var five = require("johnny-five");
var board = new five.Board();
const cors = require('cors');
const app = require('express')();
app.use(cors());

board.on("ready", ()=>{//quando a placa estiver pronta, então...
  this.pinMode(7, this.MODES.OUTPUT);
  this.digitalWrite(7, 1);

  const servoBase  = new five.Servo(10);//entradas no arduíno, servos
  const servoHand  = new five.Servo(12);
  const leftElbow  = new five.Servo(11);
  const rightElbow = new five.Servo(13);

 /*
    as funções são acessadas fazendo requisição para o servidor, feito com javascript.
    nodejs e uma biblioteca feita em javascript chamada johnny-five (http://johnny-five.io/) pode ser usado com várias outras
    plataformas além do arduíno, como Intel Galileo, raspberry pi e etc
 */
  app.get('/base/precise', (req, res)=>{//endpoints, acessados dessa forma: localhost:3000/base/precise?position=30
    const position = req.query.position;//<--na requisição foi passada a variável position=30, logo req.query.position = 30
    servoBase.to(position);//mover base para posição "position", que guarda um ângulo passado na requisição
    return res.status(200).json('base moved to '+position);
  })

  app.get('/base/left', (req, res)=>{//"endpoint" ou "rotas"
    servoBase.max();//vai pra o grau máximo (180)
    return res.status(200).json('moved 180');
  })

  app.get('/base/right', (req, res)=>{//"endpoint" ou "rotas"
    servoBase.min();//vai pra o grau mínimo (0)
    return res.status(200).json('moved 0');
  })

  app.get('/hand/close', (req, res)=>{//"endpoint" ou "rotas"
    servoHand.to(180);//poe o servo da mão pra 180 graus, fechada
    return res.status(200).json('Hand get');
  })

  app.get('/hand/open', (req, res)=>{//"endpoint" ou "rotas"
    servoHand.to(70);//poe o servo da mão pra 70 graus, aberta
    return res.status(200).json('Hand open');
  })

  app.get('/elbow/left/up', (req, res)=>{//"endpoint" ou "rotas"
    leftElbow.min();//põe o "cotovelo" esquerdo no grau mínimo (0), 
    return res.status(200).json('Left elbow up');
  })

  app.get('/elbow/left/down', (req, res)=>{//"endpoint" ou "rotas"
    leftElbow.max();//põe o "cotovelo" esquerdo no grau máximo 
    return res.status(200).json('Left elbow down');
  })

  app.get('/elbow/left/precise', (req, res)=>{//"endpoint" ou "rotas"
    const position = req.query.position;
    leftElbow.to(position);//põe o "cotovelo" esquerdo em um grau específico passado na requisição, igual na linha 21
    return res.status(200).json('Elbow left moved to '+position);
  })

  app.get('/elbow/right/up', (req, res)=>{//"endpoint" ou "rotas"
    rightElbow.min();//põe o "cotovelo" direito no grau mínimo
    return res.status(200).json('Right elbow up');
  })

  app.get('/elbow/right/down', (req, res)=>{//"endpoint" ou "rotas"
    rightElbow.max();//põe o "cotovelo" direito no grau máximo
    return res.status(200).json('Right elbow down');
  })

  app.get('/elbow/right/precise', (req, res)=>{//"endpoint" ou "rotas"
    const position = req.query.position;
    rightElbow.to(position);//põe o "cotovelo" direito em um grau específico passado na requisição, igual na linha 21
    return res.status(200).json('Elbow right moved to '+position);
  })



});

app.listen(3000, ()=>{//põe o servidor no ar
  console.log('Linstenning on port 3000');
})