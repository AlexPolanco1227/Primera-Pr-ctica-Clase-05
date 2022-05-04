import './style.css'

let valor1;

let valor2=2; //definir una variable mutable
valor2=3;

const iva=12; //Definir una variable constante o inmutable

var variableGlobal=0; //Es una variable global, se debe evitar usarla

generar1.addEventListener('click', generarTablaDeMultiplicar(6))

let valorAMultiplicar= Number(multiplicar.value);

generarTablaDeMultiplicar(valorAMultiplicar)

function generarTablaDeMultiplicar(tabla)
{
  for (let i=1; i<13; i++)
  {
    //console.log(i+"X"+valorAMultiplicar+"="+ i*valorAMultiplicar);
    //console.log(`${i} X ${valorAMultiplicar}  =  ${i*valorAMultiplicar}`)
    console.log(`${i} X ${tabla}  =  ${i*tabla}`)
  }
}

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
