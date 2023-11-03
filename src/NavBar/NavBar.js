import React from 'react';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import Avatar from '../Shared/Component/Avatar';
import Input from '../Shared/Component/Input';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './NavBar.css';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';


function NavBar() {
    return (
        <nav className='navBarContainer'>
            <div className='navLeft'>
                <div className='facebookIcon'><Link to='/'><FacebookOutlinedIcon /></Link></div><Input />
            </div>
            <div className='navCenter'>
                <Link to='/'><li><HomeRoundedIcon /> </li></Link>
                <Link to='/watch'><li><OndemandVideoRoundedIcon /> </li></Link>
                <Link to='/marketPlace'><li><StorefrontRoundedIcon /> </li></Link>
                <Link to='/groups'><li><GroupsRoundedIcon /> </li></Link>
                <Link to='/game'><li><VideogameAssetRoundedIcon /> </li></Link>
            </div>
            <div className='navRight'>
                <Avatar icon=<MenuRoundedIcon /> />
                <Avatar icon=<QuestionAnswerRoundedIcon /> />
                <Avatar icon=<NotificationsRoundedIcon /> />
                <Avatar icon=<PersonRoundedIcon /> />
            </div>
        </nav>
    )
}

export default NavBar