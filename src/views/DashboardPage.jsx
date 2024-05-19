import React, { useState, useEffect } from 'react'
import {Link } from "react-router-dom";
export const DashboardVew = () => {  

    return (
        <>
            <h1 className='mb-4 mt-5'>DashBoard</h1>
            <div className="container">
                <div className="list-group">
                    <Link className="list-group-item list-group-item-action" to="/create-point">Creacion de Puntos</Link>
                    <Link className="list-group-item list-group-item-action" to="/create-state">Creacion de departamentos</Link>
                    <Link className="list-group-item list-group-item-action" to="/create-city">Creacion de municipios</Link>
                    <Link className="list-group-item list-group-item-action" to="/create-type">Creacion de tipo de puntos</Link>
                    <Link className="list-group-item list-group-item-action" to="/list-point">Listado de puntos</Link>
                    <Link className="list-group-item list-group-item-action" to="/map">Ver Mapa</Link>
                </div>
            </div>
        </>
    );
}