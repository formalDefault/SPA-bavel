import React, { Component } from 'react'

export default function btnsMenu(props)
{
    function redir(e) {
        e.preventDefault();
        alert('Hola');
        window.open(props.urlLink);
      }
      
    return(
        <div className="btnsMenu">
            <a href="" onClick={redir} className={props.clase}>
                {props.valor}
            </a>
        </div>
    );
}
