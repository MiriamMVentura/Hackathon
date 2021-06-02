import {React, useState} from 'react'

function MeetCard({meet}) {
    
    const {name, time, phone, creationDate, id}= meet;
    const createAt = (meet.date.seconds);
    console.log(createAt)
    const fecha= new Date(createAt*1000);
    console.log(fecha)



    return (
        <div>
            <p>MEET CARD</p>
            <p>Nombre del cliente: {name}</p>
            <p>Teléfono: {phone}</p>
            <p>{fecha.toString()}</p>
            <p>Hora de la cita: {time}</p>
            {/* <p>{creationDate}</p> */}
            <p>Folio de la cita: {id}</p>
            
        </div>
    )
}

export default MeetCard;