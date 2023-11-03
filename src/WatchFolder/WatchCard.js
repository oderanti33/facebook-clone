import React from 'react';
import './WatchCard.css';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';


function WatchCard() {
    return (
        <div className='watchCardContainer'>
            <div className='watchCardTop'>
                <div className='watchCardTopLeft'>
                    <img src="https://media.premiumtimesng.com/wp-content/files/2014/09/FUTA-Ondo-State.jpg" alt="FUTA" />
                    <div className='WatchCardTopMiddle'>
                        <div className='watchCardName'>
                            <h6>Ebenezer Oderanti</h6> <div className='dot'><FiberManualRecordRoundedIcon /></div><h5>Follow</h5>
                        </div>
                        <div className='watchCardTime'>
                            <h5>June 7 at 4:10PM</h5> <div className='dot'><FiberManualRecordRoundedIcon /></div> <div className='worldSvg'><PublicRoundedIcon /></div>
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
            <div className='WatchCardDown1'>
                <div className='postbottomContainer2'>
                    <div><ThumbUpOffAltOutlinedIcon /> <h6>Like</h6></div>
                    <div> <ChatBubbleOutlineRoundedIcon /> <h6>Comment</h6></div>
                    <div><ReplyOutlinedIcon /> <h6>Share</h6> </div>
                </div>
                <div className='postbottomContainer1'>
                    <div className='WatchlikeContainer'><div className='avartarReduce1'><ThumbUpOffAltOutlinedIcon /> <ThumbUpOffAltOutlinedIcon /> <h6>1.1k</h6></div></div>
                    <div className='dot2'><FiberManualRecordRoundedIcon /></div>
                    <h6>25 comments</h6>
                    <div className='dot2'><FiberManualRecordRoundedIcon /></div>
                    <h6>1 view</h6>
                </div>
            </div>
        </div>
    )
}

export default WatchCard