import React from 'react';
import '../Pages/Home.css';
import TabPanel from '../Pages/TabPanel';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import Avatar from '../../Shared/Component/Avatar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MarkChatUnreadRoundedIcon from '@mui/icons-material/MarkChatUnreadRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Carousal from '../../Shared/Component/Carousal';
import Carousaltest from '../../Shared/Component/Carousaltest';
import StoryCard from '../../Shared/Component/StoryCard';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import Input from '../../Shared/Component/Input'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


function Home() {
    return (
        <div>
            
            <div className='homeContainer'>
                <div className='nav-search-left'>
                    <FacebookOutlinedIcon /> <Input />
                </div>
                <div className='navCenter'>
                    <li><HomeRoundedIcon /> </li>
                    <li><HomeRoundedIcon /> </li>
                    <li><HomeRoundedIcon /> </li>
                    <li><HomeRoundedIcon /> </li>
                    <li><HomeRoundedIcon /> </li>
                </div>
                <div className='nav-search-right'>
                    <Avatar icon=<MenuRoundedIcon /> />
                    <Avatar icon=<QuestionAnswerRoundedIcon /> />
                    <Avatar icon=<NotificationsRoundedIcon /> />
                    <Avatar icon=<PersonRoundedIcon /> />
                </div>
            </div>
        </div>
    )
}

export default Home