import React from 'react';
import './Game.css'
// import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
// import '../../Watch/Dot.css';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import Underline from '../Shared/Component/Underline';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';



function Game() {
    return (
        <div className='gameContainer'>
            <div className='gameLeftSide'>
                <div className='gameLeftSideTop'>
                    <h4>Groups</h4> <SettingsRoundedIcon />
                </div>
                <div className='groupDivScroll'>
                    <div className='gameLeftSideTop2' >
                        <input type="text" placeholder='Search groups' />
                    </div>
                    <div className='gameLeftSideBottom' >
                        <div className='gameLeftSideBottomIn'>
                            <VideogameAssetRoundedIcon /> <h6>Play Games</h6>
                        </div>
                    </div>
                    <div className='gameLeftSideBottom2' >
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notifications</h6>
                        </div>
                    </div>
                    <Underline />
                    <div className='gamecategory'>
                        <div className='gamecategoryheading'><h6>Your games</h6> <button>See all</button></div>
                        <h5>Save a game to Your games to create a shortcut for it here.</h5>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                    </div>
                    <Underline />
                    <div className='gamecategory'>
                        <h6 className='gamecategoryheading'>Categories</h6>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='gameLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gameRightSide'>

            </div>
        </div>
    )
}

export default Game