import React from 'react';
import Avatar from './Avatar';
import '../../Watch/Post2.css';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CircleIcon from '@mui/icons-material/Circle';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Underline from './Underline';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Dot from './Dot'


function Post() {
    return (
        <div className='postContainer'>
            <div className='posttopcontainer'>
                <div>
                    <Avatar />
                </div>
                <div className='posttopName'>
                    <h6>Olajide Abiola</h6>
                    <div className='topNameperiod'>
                        <h5>8m</h5>
                        <Dot />
                        <PublicIcon />
                    </div>
                </div>
                <div>
                    <MoreHorizSharpIcon /><ClearRoundedIcon />
                </div>
            </div>
            <div className='postmiddlecontainer'>
                <div className='postword'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde labore enim debitis earum quis cumque, reiciendis minima maxime animi delectus fugit reprehenderit consequatur veritatis doloribus inventore sed! Dolor, dicta.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex iure harum eligendi provident est ut iste doloremque, dolor excepturi consequatur. Est illum animi esse deserunt reiciendis atque, dignissimos eveniet!
                    </p>
                </div>
                <div className='postImage'>
                    <img src="https://media.licdn.com/dms/image/C5603AQEFOpJXPOizXw/profile-displayphoto-shrink_800_800/0/1516889372364?e=2147483647&v=beta&t=Czo8oC1y0NM8qxI6xCl7CYUDCDy706FQGoNBUVPjAdw" alt="Post Image" />
                </div>
            </div>
            <div className='postlikecomment1'>
                <div className='postlikeleft'>
                    <div className='postAvartar'><ThumbUpOffAltOutlinedIcon /></div>
                    <div className='postAvartar'><ThumbUpOffAltOutlinedIcon /></div>
                    <div className='postAvartar'><EmojiEmotionsIcon /></div>
                    <h6>100</h6>
                </div>
                <div className='postlikeright1'>
                    <div>
                        <h6>100</h6>
                        <ChatBubbleOutlineRoundedIcon />
                    </div>
                    <div>
                        <h6>100</h6>
                        <ReplyOutlinedIcon />
                    </div>
                </div>
            </div>
            <div className='postUnderline1'><Underline /></div>
            <div className='postbottomContainer0'>
                <div className='postbottomContainer4'>
                    <div><ThumbUpOffAltOutlinedIcon /> <h6>Like</h6></div>
                    <div> <ChatBubbleOutlineRoundedIcon /> <h6>Comment</h6></div>
                    <div><ReplyOutlinedIcon /> <h6>Share</h6> </div>
                </div>
                <div className='postbottomContainer3'>
                    <PersonRoundedIcon /><ArrowDropDownRoundedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post