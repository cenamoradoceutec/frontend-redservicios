import React from 'react'
import { HookFormState } from '../Hooks/HookFormState';

export const CreatStateView = () => {

    const {
        dataForm,
        resultado,
        changeHandler,
        submitHandler
    } = HookFormState();

    return (
        <>
            <h1 className='mb-4 mt-5'>Registro de Departamentos</h1>
            <div className="container-sm">
                <form onSubmit={submitHandler} >
                    <div className="col-12">
                        <div className='mb-3'>
                            <label className='form-label'>Nombre del departamento</label>
                            <input name='name' type="text" className='form-control' onChange={changeHandler} />
                        </div>
                    </div>
                    <button type='submit' > Enviar </button>
                </form>
            </div>
            <p>{resultado}</p>
        </>
      );
}