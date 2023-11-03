import React from 'react';
import '../../Watch/MiddleInput.css';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


function Search(props) {
    return (
        <div className='MiddleInputContainer'>
            <div className='SenderIcon'><PersonRoundedIcon /><div className='MoreArrow'><KeyboardArrowDownRoundedIcon /></div></div> <input type="text" placeholder={props.placeholder} />
            <div className='emojiContainer'>
                <CameraAltOutlinedIcon />
                <CameraAltOutlinedIcon />
                <CameraAltOutlinedIcon />
                <CameraAltOutlinedIcon />
                <CameraAltOutlinedIcon />
            </div>
        </div>
    )
}

export default Search