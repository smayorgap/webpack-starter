
import '../css/componentes.css';


//exportamos 'export' para que puedan hacer uso de las funciones de este archivo
export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1');


    const h1 = document.createElement('h1');

    h1.innerText = `Hola, ${nombre}`;

    document.body.append( h1 );
}