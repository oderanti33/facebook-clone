import React from 'react';
import './Group.css';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import '../Shared/Component/Underline';
import Underline from '../Shared/Component/Underline';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import GroupJoin from './GroupJoin';
import Dot from '../Shared/Component/Dot';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import GroupCard from './GroupCard';
import InputInside from '../Shared/Component/InputInside';
import Input from '../Shared/Component/Input';


function Group() {
    return (
        <div className='group1Container'>
            <div className='groupLeftSide'>
                <div className='groupLeftSideTop'>
                    <h4>Groups</h4> <SettingsRoundedIcon />
                </div>
                <div className='groupLeftSideTop2' >
                    <InputInside placeholder='Search groups' />
                </div>
                <div className='groupDivScroll'>
                    <div className='groupLeftSideBottom' >
                        <div className='groupLeftSideBottomIn'>
                            <StorefrontRoundedIcon /> <h6>Your feed</h6>
                        </div>
                    </div>
                    <div className='groupLeftSideBottom2' >
                        <div className='groupLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Discover</h6>
                        </div>
                    </div>
                    <div className='groupLeftSideBottom2' >
                        <div className='groupLeftSideBottomIn'>
                            <InboxRoundedIcon /> <h6>Your groups</h6>
                        </div>
                    </div>
                    <div className='groupcreateNewList' >
                        <h6>+ Create new group</h6>
                    </div>
                    <Underline />
                    <div className='groupcategory'>
                        <div className='groupcategoryheading'><h6>Groups you've joined</h6> <button>See all</button></div>
                        <GroupJoin
                            image='https://rockhaq.com/wp-content/uploads/EP-Review-Paramore-Singles-Club.png'
                            groupName='Single Marital Club'
                            lastSeen='9 days'
                        />
                        <GroupJoin
                            image='https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-01/manchester-united-crest-logo-badge-2020_1lcodpc2n8eh61bxbmvdtch4h8.jpg?itok=DMq2DnDk'
                            groupName='Manchester United Supporters'
                            lastSeen='a days'
                        />
                        <GroupJoin
                            image='https://media.premiumtimesng.com/wp-content/files/2014/09/FUTA-Ondo-State.jpg'
                            groupName='Federal university of Technology Akure'
                            lastSeen='4 days'
                        />
                        <GroupJoin
                            image='https://media.premiumtimesng.com/wp-content/files/2014/09/FUTA-Ondo-State.jpg'
                            groupName='Federal university of Technology Akure'
                            lastSeen='4 days'
                        />
                        <GroupJoin
                            image='https://media.premiumtimesng.com/wp-content/files/2014/09/FUTA-Ondo-State.jpg'
                            groupName='Federal university of Technology Akure'
                            lastSeen='4 days'
                        />
                        <GroupJoin
                            image='https://media.premiumtimesng.com/wp-content/files/2014/09/FUTA-Ondo-State.jpg'
                            groupName='Federal university of Technology Akure'
                            lastSeen='4 days'
                        />
                        <GroupJoin
                            image='https://media.premiumtimesng.com/wp-content/files/2014/09/FUTA-Ondo-State.jpg'
                            groupName='Federal university of Technology Akure'
                            lastSeen='4 days'
                        />
                    </div>
                </div>

            </div>
            <div className='groupRightSide'>
                <div className='groupPlaceTop'>
                    <GroupCard />
                    <GroupCard />
                </div>
                <div className='groupchatsToJoin'>
                    <h3>Chats you should join</h3>
                    <div className='groupCardTopLeft'>
                        <div className='groupMainpicture'>
                            <div className='groupPicture'>
                                <img src="https://media.premiumtimesng.com/wp-content/files/2014/09/FUTA-Ondo-State.jpg" alt="FUTA" />
                            </div>
                            <div className='groupSenderPicture'>
                                <OndemandVideoRoundedIcon />
                            </div>
                        </div>
                        <div className='groupChatRight'>
                            <div className='groupChatRightHeading'>
                                <h6>General Chat</h6>
                            </div>
                            <div className='groupChatRightSub'>
                                <h5>Click to join</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Group