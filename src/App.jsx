import React from 'react' 
import img from './img/imagenes'
import BtnsMenu from './components/BtnsMenu'

function Menu(props) { 
  return(
    <div className="menubar px-6 w-screen h-12 py-4 fixed z-50 bg-black"> 
      <img className="icono h-6 float-left" src={props.imagen} alt="!"/> 
      <i className="imenu fas fa-bars float-right text-white"  /> 
    </div>
  );
} 

export function App() {  
    return ( 
      <div className="body grid grid-flow-row auto-rows-max overflow-x-hidden ">   
       
        <Menu imagen={img.Logo} /> 

        <div className="presentacion mt-12">
          <img className="w-screen fixed h-80 xl:h-screen" src={img.Sunset} />  
          <div className="px-6 py-14 h-80 bg-black  bg-opacity-30 w-screen text-white relative text-2xl z-40">
            <b>Hola mundo</b><br/>
            <h1>En ocasiones puede ser muy útil indicar que algún texto.</h1>  
          </div> 
        </div>

        <div className="sec_1 grid  grid-flow-col ">
          <div className="bg-red-700 px-6 py-4 w-screen text-white text-2xl h-screen absolute ">
            <h1 className="text-center mb-4">Titulo</h1>
            <h3 className="text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed tincidunt augue turpis, in ornare eros efficitur non.
             Quisque ac dolor ultrices, posuere ligula ac, sodales turpis.</h3> 
          </div>
        </div>

      </div>
    );
}
