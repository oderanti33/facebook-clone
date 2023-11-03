import React from 'react';
import './GroupCard.css';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Underline from '../Shared/Component/Underline';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MiddleInput from '../Shared/Component/MiddleInput'


function GroupCard() {
    return (
        <div className='groupCardContainer'>
            <div className='groupCardTop'>
                <h4>Recent activity</h4>
            </div>
            <div className='mainCardContainer'>
                <div className='groupSuggessionCombine'>
                    <div className='groupSuggession'>
                        <div className='avartarSuggession'><ThumbUpOffAltOutlinedIcon /></div> <h6>Suggested post from a public group</h6>
                    </div>
                    <Underline />
                </div>
                <div className='watchCardTop'>
                    <div className='watchCardTopLeft'>
                        <div className='picture'>
                            <div className='groupPicture'>
                                <img src="https://media.premiumtimesng.com/wp-content/files/2014/09/FUTA-Ondo-State.jpg" alt="FUTA" />
                            </div>
                            <div className='senderPicture'>
                                <img src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-01/manchester-united-crest-logo-badge-2020_1lcodpc2n8eh61bxbmvdtch4h8.jpg?itok=DMq2DnDk" alt="FUTA" />
                            </div>
                        </div>
                        <div className='WatchCardTopMiddle'>
                            <div className='watchCardName'>
                                <h6>Single Marital Club</h6> <div className='dot'><FiberManualRecordRoundedIcon /></div><h5>Join</h5>
                            </div>
                            <div className='watchCardTime'>
                                <h6>Fareti Olaniyi</h6> <div className='dot'><FiberManualRecordRoundedIcon /></div><h5>19h</h5> <div className='dot'><FiberManualRecordRoundedIcon /></div> <div className='worldSvg'><PublicRoundedIcon /></div>
                            </div>
                        </div>
                    </div>
                    <div className='WatchCardTopRight'>
                        <MoreHorizRoundedIcon />
                    </div>
                </div>
                <div className='WatchCardWord'>
                    <p>Excerpts from last Tuesday's teach on skills to learn while young. 1. Management of self. 2. Management of others.</p>
                </div>
                <div className='WatchCardvideo'>
                    <img src='https://i.insider.com/5d15f27a45756e48a7387da4?width=1200&format=jpeg' height='1000px' width='1000px' />
                </div>
                <div className='WatchCardDown'>
                    <div className='grouplikecomment'>
                        <div className='postlikeleft'>
                            <div className='postAvartar'><ThumbUpOffAltOutlinedIcon /></div>
                            <div className='postAvartar'><ThumbUpOffAltOutlinedIcon /></div>
                            <div className='postAvartar'><EmojiEmotionsIcon /></div>
                            <h6>2.8K</h6>
                        </div>
                        <div className='postlikeright'>
                            <div>
                                <h6>100</h6>
                                <h6>comments</h6>
                            </div>
                            <div>
                                <h6>100</h6>
                                <h6>shares</h6>
                            </div>
                        </div>
                    </div>
                    <div className='groupUnderline'><Underline /></div>
                    <div className='groupbottomContainer0'>
                        <div className='groupbottomContainer4'>
                            <div><ThumbUpOffAltOutlinedIcon /> <h6>Like</h6></div>
                            <div> <ChatBubbleOutlineRoundedIcon /> <h6>Comment</h6></div>
                            <div><ReplyOutlinedIcon /> <h6>Share</h6> </div>
                        </div>
                    </div>
                    <div className='groupUnderline'><Underline /></div>
                </div>
                <MiddleInput placeholder=' Write a comment....' />
            </div>
        </div>
    )
}

export default GroupCard