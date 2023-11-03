import React from 'react';
import Avatar from './Avatar';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import '../Component/Mind.css'
import Underline from './Underline';



function mind() {
    return (
        <div className='mindContainer'>
            <div className='topContainer'>
                <Avatar icon=<PersonRoundedIcon /> />
                <input type="text" placeholder='whats on your mind Eben' />
            </div>
            <div className='underline'>
                <Underline />
            </div>
            <div className='mindbottomContainer'>
                <div> <div className='mindbottomicon1'><VideogameAssetRoundedIcon /></div> <h6>Live Video</h6></div>
                <div> <div className='mindbottomicon2'><VideogameAssetRoundedIcon /></div> <h6>Photo/video</h6></div>
                <div> <div className='mindbottomicon3'><VideogameAssetRoundedIcon /></div> <h6>Live Video</h6></div>
            </div>
        </div>
    )
}

export default mind