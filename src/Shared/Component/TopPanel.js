import React from 'react';
import '../../Watch/TopPanel.css';
import CarolTest from '../../NavBar/CarolTest';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import Underline from '../Component/Underline'


function TopPanel() {
    return (
        <div className='TopPanelContainer'>
            <div className='TopPanelHeader'>
                <button className='TopPanelLeft'>
                    <MenuBookRoundedIcon /> <h4>Stories</h4>
                </button>
                <button className='TopPanelRight'>
                    <LiveTvRoundedIcon /><h4>Reels</h4>
                </button>
            </div>
            <Underline />
            <div className='TopPanelBottom'>
                <CarolTest />
            </div>
        </div>
    )
}

export default TopPanel