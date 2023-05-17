import React from 'react';
import '../Style/testimonio.css';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img className='img-testimonio' src={require(`../imagenes/testimonio-${ props.imagen }.png`)} alt='fotoEmma' />
            <div className='contenedor_texto'>
                <p className='nombre_testimonio'> <strong>{props.nombre}</strong>  en <strong>{props.pais}</strong></p>
                <p className='cargo'><strong>{props.cargo}</strong> en <strong>{props.empresa}</strong></p>
                <p className='texto'>{props.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio;
