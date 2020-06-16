var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender()
{
  var led_amarillo = new jf.Led(9);
  var led_rojo = new jf.Led(13);
  led_amarillo.blink(200);
  led_amarillo.blink(700);
  console.log("Test");
}
