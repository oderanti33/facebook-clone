import React from 'react';
import '../../Watch/YourPage.css';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Avatar from './Avatar';
import ModelTrainingRoundedIcon from '@mui/icons-material/ModelTrainingRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';

function YourPage() {
    return (
        <div className='YourPageContainer'>
            <div className='YourPageTop'>
                <h6>Your Pages and profile</h6><MoreHorizRoundedIcon />
            </div>
            <div className='YourPageTop1'>
                <Avatar icon='RJ' />
                <h6>RCCG, Jesus Our Saviour Parish</h6>
            </div>
            <div className='YourPageTop2'>
                <ModelTrainingRoundedIcon />
                <h6>Switch into Page</h6>
            </div>
            <div className='YourPageTop2'>
                <CampaignRoundedIcon />
                <h6>Create promotion</h6>
            </div>
        </div>
    )
}

export default YourPage