var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var l_space;
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    l_space = espacio * l;
    dibujarLinea("red", 0, l_space, 10+l_space, 300);
    dibujarLinea("blue", 300, 300-l_space, 290-l_space, 0);
  }

  dibujarLinea("red", 1,1,1,299);
  dibujarLinea("red", 1,299,299,299);
  dibujarLinea("blue", 1,1,299,1);
  dibujarLinea("blue", 299,1,299,299);
}
