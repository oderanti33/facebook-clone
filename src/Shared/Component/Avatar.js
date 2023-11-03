import React from 'react';
import '../Component/Avatar.css';

function Avatar(props) {
    return (
        <div className='containeravatar'>{props.icon} </div>
    )
}

export default Avatar