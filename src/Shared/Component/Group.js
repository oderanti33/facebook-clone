import React from 'react';
import '../../Watch/Group.css';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function Group() {
    return (
        <div className='groupContainer'>
            <h6>Group conversations</h6>
            <div className='groupBottom'>
                <AddCircleRoundedIcon /> <h6>Create new group</h6>
            </div>
        </div>
    )
}

export default Group