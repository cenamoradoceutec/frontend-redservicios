import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ListPointPage = () => {
    const [puntos, setPutos] = useState([]);

    const cargarPuntos = async () => {
        const url = `http://localhost:3000/services-point/list`;
        const result = await axios.get(url);
        setPutos(result.data);  
    }


    useEffect(() => {
        cargarPuntos();   
    }, []);
    return (
        <>
            <h1 className='mb-4 mt-5'>Listado de Puntos</h1>
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre del punto</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Tipo de punto</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        puntos.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.state_name}</td>
                                <td>{item.city_name}</td>
                                <td>{item.type_name}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}