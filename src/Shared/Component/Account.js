import React from 'react';
import '../../Watch/Account.css';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import Underline from './Underline';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';
import LogoutIcon from '@mui/icons-material/Logout';


function Account() {
    return (
        <div className='accountContainer'>
            <div className='accountTop'>
                <div className='accountTop1'>
                    <img src="https://media.licdn.com/dms/image/C5603AQEFOpJXPOizXw/profile-displayphoto-shrink_800_800/0/1516889372364?e=2147483647&v=beta&t=Czo8oC1y0NM8qxI6xCl7CYUDCDy706FQGoNBUVPjAdw" alt="Group Picture" /> <h6> Ebenezer Opeyemi Oderanti</h6> <div className='changeGroup'><img src="https://media.licdn.com/dms/image/C5603AQEFOpJXPOizXw/profile-displayphoto-shrink_800_800/0/1516889372364?e=2147483647&v=beta&t=Czo8oC1y0NM8qxI6xCl7CYUDCDy706FQGoNBUVPjAdw" alt="Group Picture" /> <AutorenewRoundedIcon /> </div>
                </div>
                <Underline />
                <div className='accountTop2'>
                    <h5>See all profiles</h5> <h6>2</h6>
                </div>
            </div>
            <div className='accountDown'>
                <div className='accountDownLeft'><SettingsRoundedIcon /> <h6>settings & privacy</h6></div>  <div className='accountDownRight'><ArrowForwardIosRoundedIcon /></div>
            </div>
            <div className='accountDown'>
                <div className='accountDownLeft'><HelpRoundedIcon /> <h6>Help & support</h6></div>  <div className='accountDownRight'><ArrowForwardIosRoundedIcon /></div>
            </div>
            <div className='accountDown'>
                <div className='accountDownLeft'><NightlightRoundRoundedIcon /> <h6>Display & accessibility</h6></div>  <div className='accountDownRight'><ArrowForwardIosRoundedIcon /></div>
            </div>
            <div className='accountDown'>
                <div className='accountDownLeft'><AnnouncementRoundedIcon /> <h6>Give feedback</h6></div>
            </div>
            <div className='accountDown'>
                <div className='accountDownLeft'><LogoutIcon /> <h6>Log out</h6></div>
            </div>
        </div>
    )
}

export default Account