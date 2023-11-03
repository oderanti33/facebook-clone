import React from 'react';
import TabPanel2 from './TabPanel2';
import '../Component/Detail1.css';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import Mind from '../Component/Mind';
import Post from './Post';
import Shortcut from './Shortcut';
import Sponsored from './Sponsored';
import Underline from './Underline';
import Menu from './Menu';
import Chats from './Chats';
import Notification from './Notification';
import Account from './Account';
import CarolTest from '../../NavBar/CarolTest';
import TopPanel from './TopPanel';


function Detail1() {
    return (
        <div className='detailContainer'>
            <div className='detailContainerone'>
                <div className='detail1'>
                    <div><AccountCircleRoundedIcon /> <h6>Ebenezer Opeyemi Oderanti</h6></div>
                    <div><GroupRoundedIcon /><h6>Friends</h6></div>
                    <div><LiveTvRoundedIcon /><h6>Reels</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Most Recent</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Groups</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Marketplace</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Watch</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Watch</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Watch</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Watch</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Saved</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Pages</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>Memories</h6></div>
                    <div><WorkHistoryRoundedIcon /><h6>See More</h6></div>
                    <Underline />
                    <Shortcut />
                </div>
                <div className='detail1Middle'>
                    <div className='middlePanel'>
                        <TopPanel />
                    </div>
                    <div className='secondPanel'>
                        <Mind />
                    </div>
                    <div className='secondPanel'>
                        <Post />
                    </div>
                </div>
                <div className='detail2'>
                    <Sponsored />
                </div>
                <div>
                    <Account />
                </div>
            </div>
        </div>
    )
}

export default Detail1