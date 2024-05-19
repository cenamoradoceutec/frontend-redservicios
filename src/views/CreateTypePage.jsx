import React from 'react'
import { HookFormType } from '../Hooks/HookFormType';

export const CreateTypeView = () => {

    const {
        dataForm,
        resultado,
        changeHandler,
        submitHandler
    } = HookFormType();

    return (
        <>
            <h1 className='mb-4 mt-5'>Registro de tipo de Punto</h1>
            <div className="container-sm">
                <form onSubmit={submitHandler} >
                    <div className="col-12">
                        <div className='mb-3'>
                            <label className='form-label'>Tipo de punto</label>
                            <input name='name' type="text" className='form-control' onChange={changeHandler}/>
                        </div>
                    </div>
                    <button type='submit' > Enviar </button>
                </form>
            </div>            
            <p>{resultado}</p>
        </>
      );
}