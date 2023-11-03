import React from 'react';
import '../../Watch/ContactAvartar.css';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

function ContactAvartar(props) {
    return (
        <div className='contactAvartarContainer'>
            <div className='contactAvartar'>
                <img src={props.contactImage} alt={props.contactName} />
                <div className='contactDot'>
                    <CircleRoundedIcon />
                </div>
            </div>
            <h6>{props.contactName}</h6>
        </div>
    )
}

export default ContactAvartar