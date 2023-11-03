import React from 'react';
import '../../Watch/InputInside.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


function InputInside(props) {
    return (
        <div className='inputInsideContainer'>
            <div className='inputInsideIcon'><SearchRoundedIcon /></div><input type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default InputInside