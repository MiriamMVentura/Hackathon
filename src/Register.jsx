import React, { useState } from 'react';

import { db } from './firebase'


const initialInputs = {
    name:'',
    email:'',
    date:'',
    time:''
}

const Register = () => {

    const [ inputData, setInputData ] = useState(initialInputs);

    const handleChange = (e) => {
        const { id, value } = e.target;
        const newObject = ({...inputData, [id]: value});
        console.log(newObject);
        setInputData(newObject);
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        db.collection('meets').add(inputData)
        .then((docRef) => {
            console.log('id:', docRef.id)
        }).catch((error) => {
            console.error('Error adding document:', error);
        });
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Ingresa tu nombre' id='name' value={inputData.name} onChange = {handleChange}/>
            <input type='email' placeholder='Ingresa tu correo' id='email' value={inputData.email} onChange = {handleChange}/>
            <p>Elige tu sucursal</p>
            <p>Elige tu fecha</p>
            <input type='date' id='date' value={inputData.date} onChange = {handleChange}/>
            <p>Elige tu hora</p>
            <input type='time' id='time' value={inputData.time} onChange = {handleChange}/>
            <input type='submit' value='Confirmar'></input>
            </form>
        </div>
    );
}

export default Register;