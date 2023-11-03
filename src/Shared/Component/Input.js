import React from 'react';
import './Input.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


function Input(props) {
    return (
        <div className='inputContainer'>
            <div className='inputIcon'><SearchRoundedIcon /></div><input type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default Input