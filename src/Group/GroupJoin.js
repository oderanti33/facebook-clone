import React from 'react';
import './GroupJoin.css';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


function GroupJoin(props) {
    return (
        <div className='groupJoinContainer'>
            <div className='groupJoinLeft'>
                <img src={props.image} alt={props.groupName} /> <div className='groupIn'> <h6> {props.groupName}</h6> <h5> Last active {props.lastSeen} ago</h5> </div>
            </div>
            <div className='groupJoinRight'>
                <KeyboardArrowDownRoundedIcon />
            </div>
        </div>
    )
}

export default GroupJoin