import React from 'react';
import './MarketPlace.css';
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
import MarketCard from './MarketCard';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Dot from '../Shared/Component/Dot';
import MarketCategory from './MarketCategory';





function MarketPlace() {
    return (
        <div className='market1Container'>
            <div className='market1LeftSide'>
                <div className='marketLeftSideTop'>
                    <h4>MarketPlace</h4> <SettingsRoundedIcon />
                </div>
                <div className='marketLeftSideTop2' >
                    <input type="text" placeholder='Search marketplace' />
                </div>
                <div className='divScroll'>
                    <div className='marketLeftSideBottom' >
                        <div className='marketLeftSideBottomIn'>
                            <StorefrontRoundedIcon /> <h6>Browse all</h6>
                        </div>
                    </div>
                    <div className='marketLeftSideBottom2' >
                        <div className='watchLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                    </div>
                    <div className='marketLeftSideBottom2' >
                        <div className='marketLeftSideBottomIn'>
                            <InboxRoundedIcon /> <h6>Inbox</h6>
                        </div>
                    </div>
                    <div className='marketLeftSideBottom2' >
                        <div className='marketLeftSideBottomIn2'>
                            <div className='marketLeftSideBottomInarrow'><BookmarkRoundedIcon /> <h6>Buying</h6></div> <div className='icon'><ArrowForwardIosRoundedIcon /></div>
                        </div>
                    </div>
                    <div className='marketLeftSideBottom2' >
                        <div className='marketLeftSideBottomIn2'>
                            <div className='marketLeftSideBottomInarrow'><BookmarkRoundedIcon /> <h6>Selling</h6></div> <div className='icon'><ArrowForwardIosRoundedIcon /></div>
                        </div>
                    </div>
                    <div className='marketCreateNewList' >
                        <h6>+ Create new listing</h6>
                    </div>
                    <Underline />
                    <div className='filter' >
                        <h6 className='filterheading'>Filters</h6>
                        <div className='filterDown'><h6>Lagos, Nigeria</h6> <FiberManualRecordRoundedIcon /> <h6>Within 65 kilometer</h6> </div>
                    </div>
                    <Underline />
                    <div className='category'>
                        <h6 className='categoryheading'>Categories</h6>
                        <div className='marketLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='marketLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='marketLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='marketLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='marketLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='marketLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='marketLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                        <div className='marketLeftSideBottomIn'>
                            <NotificationsRoundedIcon /> <h6>Notification</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='marketRightSide'>
                <div className='marketTodayPlaceTop'>
                    <h4> Today's picks </h4>
                    <div className='marketTodayPlaceTopRight'><LocationOnRoundedIcon />
                        <h5>Lagos</h5><div className='marketDot'><Dot /></div><h5>65km</h5></div>
                </div>
                <div className='marketPlaceContainer'>
                    <MarketCard image='https://scontent.flos1-1.fna.fbcdn.net/v/t45.5328-4/352530387_10092539217438396_1470088681069693032_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFxIWNWv2TdFBmJ-goDEDg_HvgLViKbvAce-AtWIpu8B7EuMAzhju6djqaI8BpJHIMyTh1Ch4k186p2Y4rtSAm8&_nc_ohc=WY-GhDWCgZMAX8OFuYS&_nc_ht=scontent.flos1-1.fna&oh=00_AfA2Pux5q5FmMx7QIsEdJ5mDajbQ0cmdPAJDi_0mN1RYiA&oe=64988458'
                        price='$500'
                        details='Android version of 11 pro Max'
                        location='Lagos, Lagos'
                    />
                    <MarketCard image='https://scontent.flos1-1.fna.fbcdn.net/v/t45.5328-4/352530387_10092539217438396_1470088681069693032_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFxIWNWv2TdFBmJ-goDEDg_HvgLViKbvAce-AtWIpu8B7EuMAzhju6djqaI8BpJHIMyTh1Ch4k186p2Y4rtSAm8&_nc_ohc=WY-GhDWCgZMAX8OFuYS&_nc_ht=scontent.flos1-1.fna&oh=00_AfA2Pux5q5FmMx7QIsEdJ5mDajbQ0cmdPAJDi_0mN1RYiA&oe=64988458'
                        price='$500'
                        details='Android version of 11 pro Max'
                        location='Lagos, Lagos'
                    />
                    <MarketCard image='https://scontent.flos1-1.fna.fbcdn.net/v/t45.5328-4/352530387_10092539217438396_1470088681069693032_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFxIWNWv2TdFBmJ-goDEDg_HvgLViKbvAce-AtWIpu8B7EuMAzhju6djqaI8BpJHIMyTh1Ch4k186p2Y4rtSAm8&_nc_ohc=WY-GhDWCgZMAX8OFuYS&_nc_ht=scontent.flos1-1.fna&oh=00_AfA2Pux5q5FmMx7QIsEdJ5mDajbQ0cmdPAJDi_0mN1RYiA&oe=64988458'
                        price='$500'
                        details='Android version of 11 pro Max'
                        location='Lagos, Lagos'
                    />
                    <MarketCard image='https://scontent.flos1-1.fna.fbcdn.net/v/t45.5328-4/352530387_10092539217438396_1470088681069693032_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFxIWNWv2TdFBmJ-goDEDg_HvgLViKbvAce-AtWIpu8B7EuMAzhju6djqaI8BpJHIMyTh1Ch4k186p2Y4rtSAm8&_nc_ohc=WY-GhDWCgZMAX8OFuYS&_nc_ht=scontent.flos1-1.fna&oh=00_AfA2Pux5q5FmMx7QIsEdJ5mDajbQ0cmdPAJDi_0mN1RYiA&oe=64988458'
                        price='$500'
                        details='Android version of 11 pro Max'
                        location='Lagos, Lagos'
                    />
                    <MarketCard image='https://scontent.flos1-1.fna.fbcdn.net/v/t45.5328-4/352530387_10092539217438396_1470088681069693032_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFxIWNWv2TdFBmJ-goDEDg_HvgLViKbvAce-AtWIpu8B7EuMAzhju6djqaI8BpJHIMyTh1Ch4k186p2Y4rtSAm8&_nc_ohc=WY-GhDWCgZMAX8OFuYS&_nc_ht=scontent.flos1-1.fna&oh=00_AfA2Pux5q5FmMx7QIsEdJ5mDajbQ0cmdPAJDi_0mN1RYiA&oe=64988458'
                        price='$500'
                        details='Android version of 11 pro Max'
                        location='Lagos, Lagos'
                    />
                </div>
                <Underline />
                <MarketCategory
                    categoryName='Cell Phones'
                    image='https://scontent.flos1-1.fna.fbcdn.net/v/t45.5328-4/352530387_10092539217438396_1470088681069693032_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFxIWNWv2TdFBmJ-goDEDg_HvgLViKbvAce-AtWIpu8B7EuMAzhju6djqaI8BpJHIMyTh1Ch4k186p2Y4rtSAm8&_nc_ohc=WY-GhDWCgZMAX8OFuYS&_nc_ht=scontent.flos1-1.fna&oh=00_AfA2Pux5q5FmMx7QIsEdJ5mDajbQ0cmdPAJDi_0mN1RYiA&oe=64988458'
                    price='$500'
                    details='Android version of 11 pro Max'
                    location='Lagos, Lagos'
                />
            </div>
        </div>
    )
}

export default MarketPlace