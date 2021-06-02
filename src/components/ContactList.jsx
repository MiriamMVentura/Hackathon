import React,{useRef} from 'react'


import './ContactList.css';
const ContactList = (props) => {
    console.log(props)
 const inputEl=useRef('');
    const getSearchTerm=()=>{

        console.log(inputEl.current.value)
        props.searchKeyword(inputEl.current.value);

    }

    return (
        <div className='container'>
      <input 
      ref={inputEl}
      type='text'
      placeholder='Buscar por nombre o contraseña' className='prompt'
      value={props.term}
      onChange={getSearchTerm}></input>
        </div>
    )
}

export default ContactList;
