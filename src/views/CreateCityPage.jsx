import React, { useState, useEffect } from 'react'
import { HookFormCity } from '../Hooks/HookFormCity';
import axios from 'axios'

export const CreatCityView = () => {

    const [dataUrl, setDataUrl] = useState([]);

    const {
        dataForm,
        resultado,
        changeHandler,
        submitHandler
    } = HookFormCity();

    const cargarData = async () => {
        const url = `http://localhost:3000/states`;
        const result = await axios.get(url);
        setDataUrl(result.data); 
        
    }
    
    useEffect(() => {
        cargarData();  
      }, []);

    return (
        <>
            <h1 className='mb-4 mt-5'>Registro de Municipios</h1>
            
            <form onSubmit={submitHandler} >
                <div className="container-sm">
                    <div className="row">
                        <div className="col-12">
                            <div className='mb-3'>
                                <label className='form-label'>Nombre del Municipio</label>
                                <input name='name' className='form-control' onChange={changeHandler} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='mb-3'>
                                <label className='form-label'>Departamento</label>
                                <select className='form-control' name='id_state' onChange={changeHandler}>
                                    {
                                        dataUrl.map((item) => (
                                            <option  key={item.departamento_id} value={item.departamento_id}>{item.departamento_name}</option>
                                        ))
                                    }                                
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button type='submit' > Enviar </button>
            </form>
            <p>{resultado}</p>
        </>
      );
}